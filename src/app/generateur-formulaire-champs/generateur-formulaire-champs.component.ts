import { Component, OnInit } from '@angular/core';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { field, value } from '../global.model';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { champsPrisEnCharge } from './champs-pris-en-charge';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generateur-formulaire-champs',
  templateUrl: './generateur-formulaire-champs.component.html',
  styleUrls: ['./generateur-formulaire-champs.component.css'],
})
export class GenerateurFormulaireChampsComponent implements OnInit {
  @Output() modelChange = new EventEmitter();

  /* options pour les champs radio , checkbox et select */
  value: value = {
    label: '',
    value: '',
  };

  /* champs à afficher */
  fieldModels: Array<field> = champsPrisEnCharge;

  /* champs sélectionnés pour le formulaire */
  modelFields: Array<field> = [];

  /* model du formulaire */
  model: any = {
    name: 'App name...',
    description: 'App Description...',
    theme: {
      bgColor: 'ffffff',
      textColor: '555555',
      bannerImage: '',
    },
    attributes: this.modelFields,
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onDragStart(event: DragEvent) {
    console.log('drag started', JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {
    console.log('drag ended', JSON.stringify(event, null, 2));
    this.modelChange.emit(this.model);
  }

  onDraggableCopied(event: DragEvent) {
    console.log('draggable copied', JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {
    console.log('draggable linked', JSON.stringify(event, null, 2));
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragCanceled(event: DragEvent) {
    console.log('drag cancelled', JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {
    console.log('dragover', JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      if (event.dropEffect === 'copy')
        event.data.name = event.data.type + '-' + new Date().getTime();
      let index = event.index;
      if (typeof index === 'undefined') {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }

  /* Add options pour les champs radio , checkbox et select */
  addValue(values) {
    values.push(this.value);
    this.value = { label: '', value: '' };
  }

  /* Méthode qui pemet supprimer un champs de la list de champ du formulaire */
  removeField(i) {
    swal
      .fire({
        title: 'Êtes-vous sûr?',
        text: 'Voulez-vous supprimer ce champ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00B96F',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer!',
      })
      .then((result) => {
        if (result.value) {
          this.model.attributes.splice(i, 1);
        }
      });
  }

  toggleValue(item) {
    item.selected = !item.selected;
  }

  /* Bouton Submit, à des fins de validation dans l'aperçu du formulaire */
  submit() {
    let valid = true;
    let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    validationArray.reverse().forEach((field) => {
      console.log(field.label + '=>' + field.required + '=>' + field.value);
      if (field.required && !field.value && field.type != 'checkbox') {
        swal.fire(
          'Error',
          'Veuillez saisir information dans le champ ' + field.label,
          'error'
        );
        valid = false;
        return false;
      }
      if (field.required && field.regex) {
        let regex = new RegExp(field.regex);
        if (regex.test(field.value) == false) {
          swal.fire('Error', field.errorText, 'error');
          valid = false;
          return false;
        }
      }
      if (field.required && field.type == 'checkbox') {
        if (field.values.filter((r) => r.selected).length == 0) {
          swal.fire(
            'Error',
            'Veuillez saisir information dans le champ ' + field.label,
            'error'
          );
          valid = false;
          return false;
        }
      }
    });
    if (!valid) {
      return false;
    } else {
      swal.fire(
        'Le formulaire a été soumis avec succès.',
        'cliquez sur le bouton pour continuer.',
        'success'
      );
    }
  }
}

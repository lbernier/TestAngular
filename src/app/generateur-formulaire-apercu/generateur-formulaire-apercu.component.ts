import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-generateur-formulaire-apercu',
  templateUrl: './generateur-formulaire-apercu.component.html',
  styleUrls: ['./generateur-formulaire-apercu.component.css'],
})
export class GenerateurFormulaireApercuComponent implements OnInit {
  @Input() model;

  constructor() {}

  ngOnInit(): void {}

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

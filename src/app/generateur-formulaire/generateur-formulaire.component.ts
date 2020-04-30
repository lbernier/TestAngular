import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generateur-formulaire',
  templateUrl: './generateur-formulaire.component.html',
  styleUrls: ['./generateur-formulaire.component.css'],
})
export class GenerateurFormulaireComponent implements OnInit {
  modelJSON: any;

  @Output() modelJSONChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  trouverModel(model) {
    this.modelJSON = model;
  }
}

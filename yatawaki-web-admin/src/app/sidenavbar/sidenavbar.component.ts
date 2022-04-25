import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  showFiller = false;

  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}

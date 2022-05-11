import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  showFiller = false;

  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;

  constructor(private storageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.storageService.clear();
    this.router.navigate(['sidenavbar']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    });
  }
}

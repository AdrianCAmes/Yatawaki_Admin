import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Composer } from 'src/app/models/composer';
import { ComposerService } from '../../service/composer.service'


@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.css']
})
export class ComposerComponent implements OnInit {

  /* istanbul ignore next */
  composers = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private router: Router, private composerService: ComposerService) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.composerService.getComposers().subscribe(response => {
      console.log(response)
      this.composers = response;
    });
  }

  /* istanbul ignore next */
  loadDataComposerss() {
    this.composerService
      .getComposers()
      .subscribe((composers) => (this.composers = composers));
  }

  /* istanbul ignore next */
  deleteComposer(composers: Composer) {
    this.composerService.deleteComposer(composers.idComposer).subscribe((data) => {
      this.loadDataComposerss();
    });
  }

  /* istanbul ignore next */
  changeComposer(composers: Composer) {
    this.router.navigate(['sidenavbar/composer-change-form', composers.idComposer]);
  }

}

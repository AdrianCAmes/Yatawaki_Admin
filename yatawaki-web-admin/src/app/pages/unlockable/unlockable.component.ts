import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Unlockable } from 'src/app/models/unlockable';
import { UnlockableService } from '../../service/unlockable.service'

@Component({
  selector: 'app-unlockable',
  templateUrl: './unlockable.component.html',
  styleUrls: ['./unlockable.component.css']
})
export class UnlockableComponent implements OnInit {

  /* istanbul ignore next */
  unlockables = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private router: Router, private unlockableService: UnlockableService) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.unlockableService.getUnlockables().subscribe(response => {
      console.log(response)
      this.unlockables = response;
    });
  }

  /* istanbul ignore next */
  loadDataUnlockables() {
    this.unlockableService
      .getUnlockables()
      .subscribe((unlockables) => (this.unlockables = unlockables));
  }

  /* istanbul ignore next */
  deleteUnlockable(unlockable: Unlockable) {
    this.unlockableService.deleteUnlockable(unlockable.idUnlockable).subscribe((data) => {
      this.loadDataUnlockables();
    });
  }

  /* istanbul ignore next */
  changeUnlockable(unlockable: Unlockable) {
    this.router.navigate(['sidenavbar/composer-change-form', unlockable.idUnlockable]);
  }

}

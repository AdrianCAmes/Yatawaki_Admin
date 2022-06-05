import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserUnlockable } from 'src/app/models/user-unlockable';
import { UserUnlockableService } from 'src/app/service/user-unlockable.service'; 

@Component({
  selector: 'app-user-unlockable',
  templateUrl: './user-unlockable.component.html',
  styleUrls: ['./user-unlockable.component.css']
})
export class UserUnlockableComponent implements OnInit {

  /* istanbul ignore next */
  userUnlockables = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private router: Router, private userUnlockableService: UserUnlockableService) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.userUnlockableService.getUserUnlockables().subscribe(response => {
      console.log(response)
      this. userUnlockables = response;
    });
  }

  /* istanbul ignore next */
  loadDataUsers() {
    this.userUnlockableService
      .getUserUnlockables()
      .subscribe((userUnlockables) => (this.userUnlockables = userUnlockables));
  }

  /* istanbul ignore next */
  deleteUser(user: UserUnlockable) {
    this.userUnlockableService.deleteUserUnlockable(user.idUserUnlockable).subscribe((data) => {
      this.loadDataUsers();
    });
  }

  /* istanbul ignore next */
  changeUser(userUnlockable: UserUnlockable) {
    this.router.navigate(['sidenavbar/user-unlockable-change-form', userUnlockable.idUserUnlockable]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  /* istanbul ignore next */
  users = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private router: Router, private userService: UserService) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      console.log(response)
      this.users = response;
    });
  }

  /* istanbul ignore next */
  loadDataUsers() {
    this.userService
      .getUsers()
      .subscribe((users) => (this.users = users));
  }

  /* istanbul ignore next */
  deleteUser(user: User) {
    this.userService.deleteUser(user.idUser).subscribe((data) => {
      this.loadDataUsers();
    });
  }

  /* istanbul ignore next */
  changeUser(user: User) {
    this.router.navigate(['sidenavbar/user-change-form', user.idUser]);
  }
}

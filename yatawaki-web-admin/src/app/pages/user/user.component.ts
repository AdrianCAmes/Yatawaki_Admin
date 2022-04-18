import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = new Array<any>();

  displayedColumns: string[] = ['id', 'name', 'lastname', 'nickname']

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //console.log("Hola")
    this.userService.getUsers().subscribe(response => {
      console.log(response)
      this.users = response;
    });
  }
}

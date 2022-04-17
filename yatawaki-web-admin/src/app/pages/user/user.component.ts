import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = new Array<any>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      console.log(response.data)
      this.users = response.data;
    });
    console.log("Hola")
  }


}

import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from 'src/app/service/avatar.service';

@Component({
  selector: 'app-avatar-new-form',
  templateUrl: './avatar-new-form.component.html',
  styleUrls: ['./avatar-new-form.component.css']
})
export class AvatarNewFormComponent implements OnInit {

  avatar: Avatar = new Avatar();

  constructor(private avatarService: AvatarService) { }

  ngOnInit(): void {
  }

  insertAvatar() {
    this.avatarService.createAvatar(this.avatar).subscribe(
      (datos) => console.log(datos)
      //(error) => console.log(error)
    );
    this.avatar = new Avatar();
    //this.router.navigate(['ListCustomer']);
  }

}

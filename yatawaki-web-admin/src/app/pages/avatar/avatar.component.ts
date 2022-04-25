import { Component, OnInit } from '@angular/core';
import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from '../../service/avatar.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  avatars = new Array<any>();

  //displayedColumns: string[] = ['id', 'name', 'description', 'rareness']

  constructor(private router: Router, private avatarService: AvatarService) { }

  ngOnInit(): void {
    this.avatarService.getAvatars().subscribe(response => {
      console.log(response)
      this.avatars = response;
    });
  }

  loadDataAvatars() {
    this.avatarService
      .getAvatars()
      .subscribe((avatars) => (this.avatars = avatars));
  }

  deleteAvatar(avatar: Avatar) {
    this.avatarService.deleteAvatar(avatar.idUnlockable).subscribe((data) => {
      this.loadDataAvatars();
    });
  }

  
  updateAvatar(avatar: Avatar) {
    this.router.navigate(['UpdateCustomer', avatar.idUnlockable]);
  }

}

import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../../service/avatar.service'

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  avatars = new Array<any>();

  displayedColumns: string[] = ['id', 'name', 'description', 'rareness']

  constructor(private avatarService: AvatarService) { }

  ngOnInit(): void {
    this.avatarService.getAvatars().subscribe(response => {
      console.log(response)
      this.avatars = response;
    });
  }

}

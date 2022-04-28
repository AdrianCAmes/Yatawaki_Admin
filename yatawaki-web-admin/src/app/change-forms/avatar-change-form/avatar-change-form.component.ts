import { Component, OnInit } from '@angular/core';
import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from 'src/app/service/avatar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-avatar-change-form',
  templateUrl: './avatar-change-form.component.html',
  styleUrls: ['./avatar-change-form.component.css']
})
export class AvatarChangeFormComponent implements OnInit {

  id: number = 0;
  avatar: Avatar = new Avatar();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private avatarService: AvatarService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.avatarService.getAvatarById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.avatar = datos;
      }
    );
  }

  changeAvatar() {
    this.avatarService.changeAvatar(this.avatar).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.avatar = new Avatar();
  }

}

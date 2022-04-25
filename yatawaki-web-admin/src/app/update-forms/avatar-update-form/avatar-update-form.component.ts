import { Component, OnInit } from '@angular/core';
import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from 'src/app/service/avatar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-avatar-update-form',
  templateUrl: './avatar-update-form.component.html',
  styleUrls: ['./avatar-update-form.component.css']
})
export class AvatarUpdateFormComponent implements OnInit {

  id: number = 0;
  avatar: Avatar = new Avatar();

  constructor( private route: ActivatedRoute,
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

  actualizarAvatar() {
    if (this.avatar.description == ''){
      this.avatar.description = null;
    }
    if(this.avatar.enhancedFeaturesJson == ''){
      this.avatar.enhancedFeaturesJson == null;
    }
    if(this.avatar.icon == ''){
      this.avatar.icon == null;
    }
    if(this.avatar.name == ''){
      this.avatar.name == null;
    }
    if(this.avatar.rareness == ''){
      this.avatar.rareness == null;
    }
    if(this.avatar.unlockerType == ''){
      this.avatar.unlockerType == null;
    }
    this.avatarService.updateAvatar(this.avatar).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.avatar = new Avatar();
  }

}

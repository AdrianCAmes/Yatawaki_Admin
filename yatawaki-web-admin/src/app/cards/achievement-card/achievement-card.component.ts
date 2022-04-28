import { Component, OnInit } from '@angular/core';
import { AchievementService } from '../../service/achievement.service'
import { Achievement } from '../../models/achievement'

@Component({
  selector: 'app-achievement-card',
  templateUrl: './achievement-card.component.html',
  styleUrls: ['./achievement-card.component.css']
})
export class AchievementCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  /*searchAvatarById() {
    this.avatarService.getAvatarById(this.id).subscribe((avatar) => {
      console.log(avatar);
      this.avatar = avatar;
    });
    this.show = true;
    this.showUpdate = false;
  }

  showUpdateForm(){
    this.showUpdate = true;
    this.show = false;
  }

  updateAvatar() {
    this.avatarService.updateAvatar(this.avatar).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.avatar = new Avatar();
  }*/


}

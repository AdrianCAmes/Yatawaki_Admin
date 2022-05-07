import { Component, OnInit } from '@angular/core';
import { UserUnlockableCreate } from 'src/app/models/create/UserUnlockableCreate';
import { UserService } from 'src/app/service/user.service';
import { UnlockableService } from 'src/app/service/unlockable.service';
import { UserUnlockableService } from 'src/app/service/user-unlockable.service';

@Component({
  selector: 'app-user-unlockable-new-form',
  templateUrl: './user-unlockable-new-form.component.html',
  styleUrls: ['./user-unlockable-new-form.component.css']
})
export class UserUnlockableNewFormComponent implements OnInit {

  userUnlockable: UserUnlockableCreate = new UserUnlockableCreate();
  users: any[] = [];
  unlockables: any[] = []

  constructor(private userService: UserService, private unlockableService: UnlockableService, private userUnlockService: UserUnlockableService ) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      data => {
        console.log(data);
        this.users = data
      }
    );

    this.unlockableService.getUnlockables().subscribe(
      data => {
        console.log(data);
        this.unlockables = data
      }
    );
  }

  insertUserUnlockable() {
    console.log(this.userUnlockable);
    this.userUnlockService.createUserUnlockable(this.userUnlockable).subscribe(
      (datos) => console.log(datos)
    );
    this.userUnlockable = new UserUnlockableCreate();
    //this.router.navigate(['ListCustomer']);
  }

}

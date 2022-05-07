import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SymphonyService } from 'src/app/service/symphony.service';
import { GestureService } from 'src/app/service/gesture.service';
import { SymphonyGestureService } from 'src/app/service/symphony-gesture.service';
import { UnlockableService } from 'src/app/service/unlockable.service';
import { SymphonyGestureUpdate } from 'src/app/models/update/SymphonyGestureUpdate';
@Component({
  selector: 'app-symphony-gesture-change-form',
  templateUrl: './symphony-gesture-change-form.component.html',
  styleUrls: ['./symphony-gesture-change-form.component.css']
})
export class SymphonyGestureChangeFormComponent implements OnInit {

  id: number = 0;
  symphonyGesture: SymphonyGestureUpdate = new SymphonyGestureUpdate();
  symphonies: any[] = [];
  gestures: any[] = [];
  statuses: any[] = [];


  constructor(private route: ActivatedRoute, private router: Router, private unlockableService: UnlockableService, private symphonyService: SymphonyService, private gestureService: GestureService, private symphonyGesService: SymphonyGestureService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.symphonyGesService.getSymphonGestureyById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.symphonyGesture = datos
      }
    )

    this.symphonyService.getSymphonies().subscribe(
      data => {
        console.log(data);
        this.symphonies = data
      }
    );

    this.gestureService.getGestures().subscribe(
      data => {
        console.log(data);
        this.gestures = data
      }
    );

    this.unlockableService.getUnlockableStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );

  }

  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.symphonyGesture.status = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputBeginningTime(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.symphonyGesture.beginningTime = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputEndingTime(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.symphonyGesture.endingTime = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  changeSymphonyGesture() {
    this.symphonyGesService.changeSymphonyGesture(this.symphonyGesture).subscribe(
      (datos) => console.log(datos)
    );
    this.symphonyGesture = new SymphonyGestureUpdate();
    //this.router.navigate(['ListCustomer']);
  }

}

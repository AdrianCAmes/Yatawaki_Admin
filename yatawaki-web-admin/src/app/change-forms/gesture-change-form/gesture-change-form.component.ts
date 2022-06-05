import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gesture } from 'src/app/models/gesture';
import { GestureService } from 'src/app/service/gesture.service';

@Component({
  selector: 'app-gesture-change-form',
  templateUrl: './gesture-change-form.component.html',
  styleUrls: ['./gesture-change-form.component.css']
})
export class GestureChangeFormComponent implements OnInit {

  id: number = 0;
  gesture: Gesture = new Gesture();
  statuses: any[] = [];
  evidencia: any;
  compWindow: any;

  constructor(private router: Router, private route: ActivatedRoute,
    private gestureService: GestureService) {
      this.compWindow = window;
     }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.gestureService.getGestureById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.gesture = datos;
      }
    );
    this.gestureService.getGestureStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  /* istanbul ignore next */
  nullInputName(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.gesture.name = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  /* istanbul ignore next */
  nullInputDescription(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.gesture.description = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  /* istanbul ignore next */
  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.gesture.status = 0;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  changeGesture() {
    this.gestureService.changeGesture(this.gesture).subscribe(
      (datos) => {
        console.log(datos);
        this.evidencia = datos
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.gesture = new Gesture();
    return this.router.navigate(['sidenavbar/gesture']).then(()=>
    {
      console.log(this.router.url);
      this.compWindow.location.reload();
    })
  }

}

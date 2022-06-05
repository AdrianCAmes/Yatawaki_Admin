import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gesture } from 'src/app/models/gesture';
import { GestureService } from 'src/app/service/gesture.service';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.css']
})
export class GestureComponent implements OnInit {

  /* istanbul ignore next */
  gestures = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private router: Router, private gestureService: GestureService) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.gestureService.getGestures().subscribe(response => {
      console.log(response)
      this.gestures = response;
    });
  }

  /* istanbul ignore next */
  loadDataGestures() {
    this.gestureService
      .getGestures()
      .subscribe((gestures) => (this.gestures = gestures));
  }

  /* istanbul ignore next */
  deleteGesture(gesture: Gesture) {
    this.gestureService.deleteGesture(gesture.idGesture).subscribe((data) => {
      this.loadDataGestures();
    });
  }

  /* istanbul ignore next */
  changeGesture(gesture: Gesture) {
    this.router.navigate(['sidenavbar/gesture-change-form', gesture.idGesture]);
  }

}

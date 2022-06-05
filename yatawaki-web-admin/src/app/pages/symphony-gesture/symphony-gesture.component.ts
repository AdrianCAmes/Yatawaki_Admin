import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SymphonyGesture } from 'src/app/models/symphony-gesture';
import { SymphonyGestureService } from 'src/app/service/symphony-gesture.service';

@Component({
  selector: 'app-symphony-gesture',
  templateUrl: './symphony-gesture.component.html',
  styleUrls: ['./symphony-gesture.component.css']
})
export class SymphonyGestureComponent implements OnInit {

  /* istanbul ignore next */
  symphonyGestures = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private router: Router, private symphonyGestService: SymphonyGestureService) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.symphonyGestService.getSymphoniesGesture().subscribe((symphoniesGes) => (this.symphonyGestures = symphoniesGes))
  }

  /* istanbul ignore next */
  loadDataSymphonies() {
    this.symphonyGestService
      .getSymphoniesGesture()
      .subscribe((symphoniesGes) => (this.symphonyGestures = symphoniesGes));
  }

  /* istanbul ignore next */
  deleteSymphony(symphonyGest: SymphonyGesture) {
    this.symphonyGestService.deleteSymphonyGesture(symphonyGest.idSymphonyGesture).subscribe((data) => {
      this.loadDataSymphonies();
    });
  }

  /* istanbul ignore next */
  changeSymphony(symphonyGest: SymphonyGesture) {
    this.router.navigate(['sidenavbar/symphony-gesture-change-form', symphonyGest.idSymphonyGesture]);
  }
}

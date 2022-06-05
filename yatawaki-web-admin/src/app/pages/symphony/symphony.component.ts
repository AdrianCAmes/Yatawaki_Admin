import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Symphony } from 'src/app/models/symphony';
import { SymphonyService } from 'src/app/service/symphony.service';

@Component({
  selector: 'app-symphony',
  templateUrl: './symphony.component.html',
  styleUrls: ['./symphony.component.css']
})
export class SymphonyComponent implements OnInit {

  /* istanbul ignore next */
  symphonies = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private router: Router, private symphonyService: SymphonyService) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.symphonyService.getSymphonies().subscribe(response => {
      console.log(response)
      this.symphonies = response;
    });
  }

  /* istanbul ignore next */
  loadDataSymphonies() {
    this.symphonyService
      .getSymphonies()
      .subscribe((symphonies) => (this.symphonies = symphonies));
  }

  /* istanbul ignore next */
  deleteSymphony(symphony: Symphony) {
    this.symphonyService.deleteSymphony(symphony.idUnlockable).subscribe((data) => {
      this.loadDataSymphonies();
    });
  }

  /* istanbul ignore next */
  changeSymphony(symphony: Symphony) {
    this.router.navigate(['sidenavbar/symphony-change-form', symphony.idUnlockable]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SymphonyInstrument } from 'src/app/models/symphony-instrument';
import { SymphonyInstrumentService } from 'src/app/service/symphony-instrument.service'; 

@Component({
  selector: 'app-symphony-instrument',
  templateUrl: './symphony-instrument.component.html',
  styleUrls: ['./symphony-instrument.component.css']
})
export class SymphonyInstrumentComponent implements OnInit {

  /* istanbul ignore next */
  symphonyInstruments = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private router: Router, private symphonyInstruService: SymphonyInstrumentService) { }

  /* istanbul ignore next */
  ngOnInit(): void {

    this.symphonyInstruService.getSymphoniesInstrument().subscribe((symphoniesGes) => (this.symphonyInstruments = symphoniesGes))
  }

  /* istanbul ignore next */
  loadDataSymphonies() {
    this.symphonyInstruService
      .getSymphoniesInstrument()
      .subscribe((symphoniesIns) => (this.symphonyInstruments = symphoniesIns));
  }

  /* istanbul ignore next */
  deleteSymphony(symphonyIns: SymphonyInstrument) {
    this.symphonyInstruService.deleteSymphonyInstrument(symphonyIns.idSymphonyInstrument).subscribe((data) => {
      this.loadDataSymphonies();
    });
  }

  /* istanbul ignore next */
  changeSymphony(symphonyInst: SymphonyInstrument) {
    this.router.navigate(['sidenavbar/symphony-instrument-change-form', symphonyInst.idSymphonyInstrument]);
  }

}

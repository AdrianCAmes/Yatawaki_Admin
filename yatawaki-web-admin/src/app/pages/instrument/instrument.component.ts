import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrument } from 'src/app/models/instrument';
import { InstrumentService } from 'src/app/service/instrument.service';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {

  /* istanbul ignore next */
  instruments = new Array<any>();
  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  /* istanbul ignore next */
  constructor(private router: Router, private instrumentService: InstrumentService) { }

  /* istanbul ignore next */
  ngOnInit(): void {
    this.instrumentService.getInstruments().subscribe(response => {
      console.log(response)
      this.instruments = response;
    });
  }

  /* istanbul ignore next */
  loadDataInstruments() {
    this.instrumentService
      .getInstruments()
      .subscribe((instruments) => (this.instruments = instruments));
  }

  /* istanbul ignore next */
  deleteInstrument(instrument: Instrument) {
    this.instrumentService.deleteInstrument(instrument.idInstrument).subscribe((data) => {
      this.loadDataInstruments();
    });
  }

  /* istanbul ignore next */
  changeInstrument(instrument: Instrument) {
    this.router.navigate(['sidenavbar/instrument-change-form', instrument.idInstrument]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Concert } from 'src/app/models/concert';
import { ConcertService } from 'src/app/service/concert.service';

@Component({
  selector: 'app-concert-card',
  templateUrl: './concert-card.component.html',
  styleUrls: ['./concert-card.component.css']
})
export class ConcertCardComponent implements OnInit {

  concert: Concert = new Concert();
  concerts: Concert[] = [];
  statuses: any[] = [];

  id: number = 0;

  show:boolean = false;
  showUpdate:boolean = false;
  showChange:boolean = false;

  public popoverTitle:string = 'Aviso'
  public popoverMessage:string = '¿Seguro que quiere eliminar este elemento?'
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;

  constructor(private concertService: ConcertService, private router: Router) { }

  ngOnInit(): void {
    this.concertService.getConcertStatus().subscribe(
      datos => {
        console.log(datos)
        this.statuses = datos;
      }
    );
  }

  nullInputPlayedDate(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.concert.playedDate = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputStatus(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.concert.status = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputPoints(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.concert.points = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputAccuracyRate(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.concert.accuracyRate = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  nullInputGesturesCompleted(elementId: string, chbox: string) {
    if ((<HTMLInputElement>document.getElementById(chbox)).checked === true) {
      (<HTMLInputElement>document.getElementById(elementId)).value = "";
      this.concert.gesturesCompleted = null;
      (<HTMLInputElement>document.getElementById(elementId)).disabled = true;
    } else {
      (<HTMLInputElement>document.getElementById(elementId)).disabled = false;
    }
  }

  searchConcertById() {
    this.concertService.getConcertById(this.id).subscribe((concert) => {
      console.log(concert);
      this.concert = concert;
    });
    this.show = true;
    this.showChange = false;
  }


  showChangeForm(){
    this.showChange = true;
    this.show = false;
  }

  loadDataConcerts() {
    this.router.navigate(['concert']);
  }


  changeConcert(){
    this.concertService.changeConcert(this.concert).subscribe(
      datos => {
        console.log(datos);
      }
    );
    this.concert = new Concert();
  }

  deleteConcert(concert: Concert) {
    this.concertService.deleteConcert(concert.idConcert).subscribe((data) => {
      this.loadDataConcerts();
    });
  }


}

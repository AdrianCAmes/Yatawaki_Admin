import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertUpdate } from 'src/app/models/update/ConcertUpdate';
import { Concert } from 'src/app/models/concert';
import { ConcertService } from 'src/app/service/concert.service';

@Component({
  selector: 'app-concert-change-form',
  templateUrl: './concert-change-form.component.html',
  styleUrls: ['./concert-change-form.component.css']
})
export class ConcertChangeFormComponent implements OnInit {

  id: number = 0;
  concert: ConcertUpdate = new ConcertUpdate();
  statuses: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute,
    private concertService: ConcertService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.concertService.getConcertById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.concert = datos;
      }
    );
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

  changeConcert() {
    this.concertService.changeConcert(this.concert).subscribe(
      (datos) => {
        console.log(datos);
        //this.router.navigate(['ListCustomer']);
      }
    );
    this.concert = new ConcertUpdate();
    return this.router.navigate(['/concert']).then(()=>
    {
      console.log(this.router.url);
      window.location.reload();
    })
  }


}
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavbarComponent } from 'src/app/sidenavbar/sidenavbar.component';
import { TableComponent } from 'src/app/table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslateModule, TranslateLoader, TranslateService, TranslateFakeLoader } from '@ngx-translate/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

import { ConcertUpdate } from 'src/app/models/update/ConcertUpdate';
import { Concert } from 'src/app/models/concert';
import { ConcertService } from 'src/app/service/concert.service';
import { ConcertComponent } from 'src/app/pages/concert/concert.component';

import { ConcertChangeFormComponent } from './concert-change-form.component';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

class ConcertTestingService {

  getConcertById(id: number): Observable<any> {
    return of({
      idConcert: 1,
      symphony: {
        idUnlockable: 1,
        name: "Symphony",
        description: "Symphony",
        rareness: "Oro",
        unlockerType: "Symphony",
        unlockerValue: 100,
        coinsCost: 200,
        icon: "Symphony",
        status: 1,
        composer: {
          idComposer: 1,
          name: "Composer",
          birthDate: new Date('2023-10-06 02:20:00'),
          deathDate: new Date('2023-10-06 02:20:00'),
          status: 1
        },
        year: 1970,
        duration: 20,
        type: "Symphony",
        previewTrack: "Symphony",
        initialBpm: 200,
      },
      playedDate: new Date('2023-10-06 02:20:00'),
      status: 1,
      user: {
        idUser: 1,
        userStatistics: {
          idUserStatistics: 1,
          triviasPlayed: 2,
          triviasWon: 2,
          concertsOrchestrated: 2,
          orchestrationAccuracy: 2,
          status: 1,
        },
        nickname: "User",
        password: "User",
        firstname: "User",
        lastname: "User",
        mail: "User",
        birthDate: new Date('2023-10-06 02:20:00'),
        coinsOwned: 100,
        status: 1,
        role: "User",
        showTutorials: true
      },
      points: 10,
      accuracyRate: 1,
      gesturesCompleted: 1,
    })
  }
  changeConcert(concert: Object): Observable<Object> {
    return of({
      idConcert: 1,
      symphony: {
        idUnlockable: 1,
        name: "Symphony",
        description: "Symphony",
        rareness: "Oro",
        unlockerType: "Symphony",
        unlockerValue: 100,
        coinsCost: 200,
        icon: "Symphony",
        status: 1,
        composer: {
          idComposer: 1,
          name: "Composer",
          birthDate: new Date('2023-10-06 02:20:00'),
          deathDate: new Date('2023-10-06 02:20:00'),
          status: 1
        },
        year: 1970,
        duration: 20,
        type: "Symphony",
        previewTrack: "Symphony",
        initialBpm: 200,
      },
      playedDate: new Date('2023-10-06 02:20:00'),
      status: 1,
      user: {
        idUser: 1,
        userStatistics: {
          idUserStatistics: 1,
          triviasPlayed: 2,
          triviasWon: 2,
          concertsOrchestrated: 2,
          orchestrationAccuracy: 2,
          status: 1,
        },
        nickname: "User",
        password: "User",
        firstname: "User",
        lastname: "User",
        mail: "User",
        birthDate: new Date('2023-10-06 02:20:00'),
        coinsOwned: 100,
        status: 1,
        role: "User",
        showTutorials: true
      },
      points: 13,
      accuracyRate: 1,
      gesturesCompleted: 1,
    })
  }

  getConcertStatus(): Observable<any>{
    return of([{description: "Activado", value: 1},{description: "Eliminado",value: 0}]);
  }
}


describe('ConcertChangeFormComponent', () => {
  let fixture: ComponentFixture<ConcertChangeFormComponent>;
  let component: ConcertChangeFormComponent;
  let service: ConcertService;
  let router: Router;
  const myWindow = {
    location:{
      reload() {return 'something'}
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatExpansionModule,
        MatChipsModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
        ConfirmationPopoverModule.forRoot({
          confirmButtonType: 'danger'
        })
      ],
      declarations: [
        ConcertChangeFormComponent,
        ConcertComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: ConcertService,
          useClass: ConcertTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(ConcertChangeFormComponent)
    component = fixture.componentInstance;
    service = TestBed.get(ConcertService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('Actualizar Concert', () => {
    const data: Concert = {
      idConcert: 1,
      symphony: {
        idUnlockable: 1,
        name: "Symphony",
        description: "Symphony",
        rareness: "Oro",
        unlockerType: "Symphony",
        unlockerValue: 100,
        coinsCost: 200,
        icon: "Symphony",
        status: 1,
        composer: {
          idComposer: 1,
          name: "Composer",
          birthDate: new Date('2023-10-06 02:20:00'),
          deathDate: new Date('2023-10-06 02:20:00'),
          status: 1
        },
        year: 1970,
        duration: 20,
        type: "Symphony",
        previewTrack: "Symphony",
        initialBpm: 200,
      },
      playedDate: new Date('2023-10-06 02:20:00'),
      status: 1,
      user: {
        idUser: 1,
        userStatistics: {
          idUserStatistics: 1,
          triviasPlayed: 2,
          triviasWon: 2,
          concertsOrchestrated: 2,
          orchestrationAccuracy: 2,
          status: 1,
        },
        nickname: "User",
        password: "User",
        firstname: "User",
        lastname: "User",
        mail: "User",
        birthDate: new Date('2023-10-06 02:20:00'),
        coinsOwned: 100,
        status: 1,
        role: "User",
        showTutorials: true
      },
      points: 10,
      accuracyRate: 1,
      gesturesCompleted: 1,
    }
    component.id = 1
    spyOn(service, 'getConcertById').withArgs(component.id).and.returnValue(of(data));
    component.concert.points = 13;
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    component.compWindow = myWindow;
    component.changeConcert();
    expect(router.navigate).toHaveBeenCalled();
    expect(component.evidencia).toEqual({
      idConcert: 1,
      symphony: {
        idUnlockable: 1,
        name: "Symphony",
        description: "Symphony",
        rareness: "Oro",
        unlockerType: "Symphony",
        unlockerValue: 100,
        coinsCost: 200,
        icon: "Symphony",
        status: 1,
        composer: {
          idComposer: 1,
          name: "Composer",
          birthDate: new Date('2023-10-06 02:20:00'),
          deathDate: new Date('2023-10-06 02:20:00'),
          status: 1
        },
        year: 1970,
        duration: 20,
        type: "Symphony",
        previewTrack: "Symphony",
        initialBpm: 200,
      },
      playedDate: new Date('2023-10-06 02:20:00'),
      status: 1,
      user: {
        idUser: 1,
        userStatistics: {
          idUserStatistics: 1,
          triviasPlayed: 2,
          triviasWon: 2,
          concertsOrchestrated: 2,
          orchestrationAccuracy: 2,
          status: 1,
        },
        nickname: "User",
        password: "User",
        firstname: "User",
        lastname: "User",
        mail: "User",
        birthDate: new Date('2023-10-06 02:20:00'),
        coinsOwned: 100,
        status: 1,
        role: "User",
        showTutorials: true
      },
      points: 13,
      accuracyRate: 1,
      gesturesCompleted: 1,
    });
  });
});

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

import { Rank } from 'src/app/models/ranks';
import { RankService } from 'src/app/service/rank.service';
import { RankComponent } from 'src/app/pages/rank/rank.component';

import { RankChangeFormComponent } from './rank-change-form.component';
import { Router } from '@angular/router';

class RankTestingService {

  getRankById(id: number): Observable<any> {
    return of({
      idRank: 1,
      name: "Rank",
      level: 1,
      maxExperience: 1,
      status: 1,
    })
  }
  changeRank(rank: Object): Observable<Object> {
    return of(rank)
  }

  getRankStatus(): Observable<any> {
    return of([{ description: "Activado", value: 1 }, { description: "Eliminado", value: 0 }]);
  }
}

describe('RankChangeFormComponent', () => {
  let fixture: ComponentFixture<RankChangeFormComponent>;
  let component: RankChangeFormComponent;
  let service: RankService;
  let router: Router;
  const myWindow = {
    location:{
      reload() { return 'something'}
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
        RankChangeFormComponent,
        RankComponent,
        SidenavbarComponent,
        TableComponent,],
      providers: [TranslateService,
        {
          provide: RankService,
          useClass: RankTestingService
        }]
    }).compileComponents();
    fixture = TestBed.createComponent(RankChangeFormComponent)
    component = fixture.componentInstance;
    service = TestBed.get(RankService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('Actualizar Rank', () => {
    const data: Rank = {
      idRank: 1,
      name: "Rank",
      level: 1,
      maxExperience: 1,
      status: 1,
    }
    component.id = 1
    spyOn(service, 'getRankById').withArgs(component.id).and.returnValue(of(data));
    component.rank.name = "Rank 2";
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    component.compWindow = myWindow;
    component.changeRank();
    expect(router.navigate).toHaveBeenCalled();
    expect(component.evidencia).toEqual({
      idRank: 1,
      name: "Rank 2",
      level: 1,
      maxExperience: 1,
      status: 1,
    });
  });
});

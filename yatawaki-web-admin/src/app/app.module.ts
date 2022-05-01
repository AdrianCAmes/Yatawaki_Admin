import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';*/
import { AvatarComponent } from './pages/avatar/avatar.component';
import { UserComponent } from './pages/user/user.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './service/token.interceptor';
import { AchievementComponent } from './pages/achievement/achievement.component';
import { ComposerComponent } from './pages/composer/composer.component';
import { UnlockableComponent } from './pages/unlockable/unlockable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { AvatarCardComponent } from './cards/avatar-card/avatar-card.component';
import { MatCardModule } from '@angular/material/card';
import { AvatarNewFormComponent } from './new-forms/avatar-new-form/avatar-new-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AvatarUpdateFormComponent } from './update-forms/avatar-update-form/avatar-update-form.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { AvatarChangeFormComponent } from './change-forms/avatar-change-form/avatar-change-form.component';
import { AchievementCardComponent } from './cards/achievement-card/achievement-card.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'
import { ReactiveFormsModule } from '@angular/forms';
import { AchievementNewFormComponent } from './new-forms/achievement-new-form/achievement-new-form.component';
import { AchievementUpdateFormComponent } from './update-forms/achievement-update-form/achievement-update-form.component';
import { AchievementChangeFormComponent } from './change-forms/achievement-change-form/achievement-change-form.component';
import { ComposerCardComponent } from './cards/composer-card/composer-card.component';
import { ComposerChangeFormComponent } from './change-forms/composer-change-form/composer-change-form.component';
import { ComposerNewFormComponent } from './new-forms/composer-new-form/composer-new-form.component';
import { ComposerUpdateFormComponent } from './update-forms/composer-update-form/composer-update-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UnlockableCardComponent } from './cards/unlockable-card/unlockable-card.component';
import { SymphonyComponent } from './pages/symphony/symphony.component';
import { SymphonyNewFormComponent } from './new-forms/symphony-new-form/symphony-new-form.component';
import { SymphonyChangeFormComponent } from './change-forms/symphony-change-form/symphony-change-form.component';
import { SymphonyCardComponent } from './cards/symphony-card/symphony-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    UserComponent,
    AchievementComponent,
    ComposerComponent,
    UnlockableComponent,
    SidenavbarComponent,
    TableComponent,
    AvatarCardComponent,
    AvatarNewFormComponent,
    AvatarUpdateFormComponent,
    AvatarChangeFormComponent,
    AchievementCardComponent,
    AchievementNewFormComponent,
    AchievementUpdateFormComponent,
    AchievementChangeFormComponent,
    ComposerCardComponent,
    ComposerChangeFormComponent,
    ComposerNewFormComponent,
    ComposerUpdateFormComponent,
    UnlockableCardComponent,
    SymphonyComponent,
    SymphonyNewFormComponent,
    SymphonyChangeFormComponent,
    SymphonyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

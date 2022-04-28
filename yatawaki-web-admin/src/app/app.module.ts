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
import { AvatarDeleteDialogComponent } from './delete-dialogs/avatar-delete-dialog/avatar-delete-dialog.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'
import { ReactiveFormsModule } from '@angular/forms';

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
    AvatarDeleteDialogComponent
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

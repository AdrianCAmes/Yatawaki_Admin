import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievementCardComponent } from './cards/achievement-card/achievement-card.component';
import { AvatarCardComponent } from './cards/avatar-card/avatar-card.component';
import { ComposerCardComponent } from './cards/composer-card/composer-card.component';
import { UnlockableCardComponent } from './cards/unlockable-card/unlockable-card.component';
import { AchievementChangeFormComponent } from './change-forms/achievement-change-form/achievement-change-form.component';
import { AvatarChangeFormComponent } from './change-forms/avatar-change-form/avatar-change-form.component';
import { ComposerChangeFormComponent } from './change-forms/composer-change-form/composer-change-form.component';
import { AchievementNewFormComponent } from './new-forms/achievement-new-form/achievement-new-form.component';
import { AvatarNewFormComponent } from './new-forms/avatar-new-form/avatar-new-form.component';
import { ComposerNewFormComponent } from './new-forms/composer-new-form/composer-new-form.component';
import { AchievementComponent } from './pages/achievement/achievement.component';
import { AvatarComponent } from './pages/avatar/avatar.component';
import { ComposerComponent } from './pages/composer/composer.component';
import { UnlockableComponent } from './pages/unlockable/unlockable.component';
import { UserComponent } from './pages/user/user.component';
import { AchievementUpdateFormComponent } from './update-forms/achievement-update-form/achievement-update-form.component';
import { AvatarUpdateFormComponent } from './update-forms/avatar-update-form/avatar-update-form.component';
import { ComposerUpdateFormComponent } from './update-forms/composer-update-form/composer-update-form.component';
/*import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';*/

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  //{ path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent },
  //{ path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserComponent },
  { path: 'avatar', component: AvatarComponent },
  { path: 'avatar-card', component: AvatarCardComponent },
  { path: 'avatar-new-form', component: AvatarNewFormComponent },
  { path: 'avatar-update-form/:id', component: AvatarUpdateFormComponent },
  { path: 'avatar-change-form/:id', component: AvatarChangeFormComponent },

  { path: 'achievement', component: AchievementComponent },
  { path: 'achievement-card', component: AchievementCardComponent },
  { path: 'achievement-new-form', component: AchievementNewFormComponent },
  { path: 'achievement-update-form/:id', component: AchievementUpdateFormComponent },
  { path: 'achievement-change-form/:id', component: AchievementChangeFormComponent },

  { path: 'composer', component: ComposerComponent },
  { path: 'composer-card', component: ComposerCardComponent },
  { path: 'composer-new-form', component: ComposerNewFormComponent },
  { path: 'composer-update-form/:id', component: ComposerUpdateFormComponent },
  { path: 'composer-change-form/:id', component: ComposerChangeFormComponent },

  
  { path: 'unlockable', component: UnlockableComponent },
  { path: 'unlockable-card', component: UnlockableCardComponent },

  { path: 'composer', component: ComposerComponent },
  { path: 'unlockable', component: UnlockableComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

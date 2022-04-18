import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievementComponent } from './pages/achievement/achievement.component';
import { AvatarComponent } from './pages/avatar/avatar.component';
import { ComposerComponent } from './pages/composer/composer.component';
import { UnlockableComponent } from './pages/unlockable/unlockable.component';
import { UserComponent } from './pages/user/user.component';
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
  { path: 'achievement', component: AchievementComponent },
  { path: 'composer', component: ComposerComponent },
  { path: 'unlockable', component: UnlockableComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

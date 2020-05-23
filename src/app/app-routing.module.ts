import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PostsComponent } from './Components/posts/posts.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { TaskComponent } from './Components/task/task.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'task',
    component: TaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserFormComponent} from './user-form/user-form.component';
import {UsersListComponent} from './users-list/users-list.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: ``, component: HomeComponent},
  {path: `users`, component: UsersListComponent},
  {path: `users/create`, component: UserFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

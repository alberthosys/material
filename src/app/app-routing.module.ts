import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {UserComponent} from './user/user.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/user']); // or redirect to default route
    }
  }
}

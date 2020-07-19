import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoldierFormComponent } from './soldier-form/soldier-form.component'
import { CaptainScreenComponent } from './captain-screen/captain-screen.component'
import { SearchComponent } from './search/search.component'

const routes: Routes = [
  { path: '', component: SoldierFormComponent },
  { path: 'review/:id', component: CaptainScreenComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

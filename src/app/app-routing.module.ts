import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvertNumberComponent } from './components/convert-number/convert-number.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ConvertNumberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

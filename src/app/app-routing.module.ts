import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UpsertComponent } from './pages/upsert/upsert.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'upsert', component: UpsertComponent },
  { path: 'upsert/:id', component: UpsertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

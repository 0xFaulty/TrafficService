import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CameraComponent, Error404Component, ListComponent, StatisticComponent} from './core';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'camera-page', component: CameraComponent},
  {path: 'statistic-page', component: StatisticComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

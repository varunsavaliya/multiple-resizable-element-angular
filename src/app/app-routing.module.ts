import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleElementsComponent } from './multiple-elements/multiple-elements.component';

const routes: Routes = [{ path: '', component: MultipleElementsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

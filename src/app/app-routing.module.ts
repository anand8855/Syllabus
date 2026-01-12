import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SubtopicDetailComponent } from './components/subtopic-detail/subtopic-detail.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'subtopic-detail', component: SubtopicDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

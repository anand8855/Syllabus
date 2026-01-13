import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SubtopicDetailComponent } from './components/subtopic-detail/subtopic-detail.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'syllabus', component: HomepageComponent },
  { path: 'syllabus/:technology', component: SyllabusComponent },
  { path: 'java', redirectTo: 'syllabus/java', pathMatch: 'full' },
  { path: 'spring', redirectTo: 'syllabus/spring', pathMatch: 'full' },
  { path: 'springboot', redirectTo: 'syllabus/springboot', pathMatch: 'full' },
  { path: 'subtopic-detail', component: SubtopicDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

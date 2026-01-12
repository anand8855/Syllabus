import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SectionComponent } from './components/section/section.component';
import { TopicComponent } from './components/topic/topic.component';
import { DifficultyBadgeComponent } from './components/difficulty-badge/difficulty-badge.component';
import { SubtopicDetailComponent } from './components/subtopic-detail/subtopic-detail.component';
import { SyllabusService } from './services/syllabus.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SectionComponent,
    TopicComponent,
    DifficultyBadgeComponent,
    SubtopicDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [SyllabusService],
  bootstrap: [AppComponent]
})
export class AppModule { }

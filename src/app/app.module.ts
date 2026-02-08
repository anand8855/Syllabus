import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SectionComponent } from './components/section/section.component';
import { TopicComponent } from './components/topic/topic.component';
import { DifficultyBadgeComponent } from './components/difficulty-badge/difficulty-badge.component';
import { SubtopicDetailComponent } from './components/subtopic-detail/subtopic-detail.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { SyllabusService } from './services/syllabus.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomepageComponent,
    SectionComponent,
    TopicComponent,
    DifficultyBadgeComponent,
    SubtopicDetailComponent,
    SyllabusComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SyllabusService],
  bootstrap: [AppComponent]
})
export class AppModule { }

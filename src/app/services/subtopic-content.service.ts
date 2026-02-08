import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { SubtopicContent } from '../models/syllabus.model';

@Injectable({
  providedIn: 'root'
})
export class SubtopicContentService {
  constructor(private http: HttpClient) {}

  getSubtopicContent(
    technologyKey: string,
    sectionTitle: string,
    subtopicId: string
  ): Observable<SubtopicContent | null> {
    if (!technologyKey || !sectionTitle || !subtopicId) {
      return of(null);
    }

    const sectionSlug = this.slugify(sectionTitle);
    const url = `/assets/json/subtopics/${technologyKey}/${sectionSlug}/${subtopicId}.json`;

    return this.http.get<SubtopicContent>(url).pipe(
      catchError(() => of(null))
    );
  }

  private slugify(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
  }
}

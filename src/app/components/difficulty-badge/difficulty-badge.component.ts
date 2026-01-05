import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-difficulty-badge',
    templateUrl: './difficulty-badge.component.html',
    styleUrls: ['./difficulty-badge.component.css'],
    standalone: false
})
export class DifficultyBadgeComponent {
  @Input() difficulty: string = '';
}

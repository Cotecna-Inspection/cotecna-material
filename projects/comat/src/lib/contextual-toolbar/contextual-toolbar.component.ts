import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActionElement } from '../../public_api';
import { ContextualToolbarDisplayMode } from '../model/model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'comat-contextual-toolbar',
  templateUrl: './contextual-toolbar.component.html',
  styleUrls: ['./contextual-toolbar.component.scss'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
})
export class ContextualToolbarComponent implements OnInit {

  @Input() count!: number;

  @Input() actions!: ActionElement[];

  @Input() displayMode: ContextualToolbarDisplayMode = ContextualToolbarDisplayMode.icons;

  @Input() moreActions!: ActionElement[];

  @Input() contextualizeTo!: string;

  @Output() selectedAction = new EventEmitter<ActionElement>();

  @Output() clearSelection = new EventEmitter();

  classesToApply = {};

  progressMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  ngOnInit() {
    this.setContextualization();
  }

  showButtonIcon() {
    return this.displayMode != ContextualToolbarDisplayMode.text;
  }

  showButtonText() {
    return this.displayMode != ContextualToolbarDisplayMode.icons;
  }

  private setContextualization() {
    this.classesToApply = {
      'page-contextual-toolbar': this.contextualizeTo != 'card',
      'card-contextual-toolbar': this.contextualizeTo == 'card'
    }
  }

  public setProgress(progressMessage: string) {
    this.progressMessage.next(progressMessage);
  }

  public stopProgress() {
    this.progressMessage.next('');
  }

  actionSelected(action: ActionElement): void {
    this.selectedAction.emit(action);
  }

  clear(): void {
    this.clearSelection.emit();
  }

}

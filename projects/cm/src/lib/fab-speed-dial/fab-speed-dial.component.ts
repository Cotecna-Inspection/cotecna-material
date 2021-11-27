import { FabSpeedDialAnimation } from './fab-speed-dial.animation';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionElement } from '../model/action-element';

@Component({
  selector: 'cm-fab-speed-dial',
	template: `
		<div *ngIf="isCorrectActionsNumber">
            <div id="cm-fab-speed-dial-button-overlay"></div>
            <div class="cm-fab-speed-dial-button-component">
                <div *ngIf="showActions" [@speedDialStagger]="actions.length" class="cm-fab-speed-dial-menu-actions">
                    <div *ngFor="let action of actions" class="cm-fab-speed-dial-mini-button">
                        <mat-card class="cm-fab-speed-dial-card-action" *ngIf="action.name">
                            {{ action.name }}
                        </mat-card>
                        <button mat-mini-fab color="primary" (click)="actionSelected(action)"> 
                            <mat-icon>{{ action.icon }}</mat-icon>
                        </button>
                    </div>
                </div>
                <button mat-fab color="primary" (click)="toggleSpeedDial()">
                    <mat-icon [@fabButtonAnimation]="{value: fabSpeedDialState}">{{ displayedIcon }}</mat-icon>
                </button>
            </div>
        </div>
		`,
  styles: [`
    .cm-fab-speed-dial-button-component {
        position: fixed;
        bottom: 16px;
        right: 16px;
        text-align: right;
    }
    .cm-fab-speed-dial-mini-button {
        display: flex;
        align-items: flex-end;
        margin-bottom: 16px;
    }
    .cm-fab-speed-dial-card-action {
        margin-right: 16px;
        padding: 12px;
        text-align: center;
        padding-right: 16px;
        padding-left: 16px;
    }
    .cm-fab-speed-dial-menu-actions {
        flex-direction: column-reverse;
        display: flex;
        align-items: flex-end;
        margin-right: 8px;
        position: relative;
        bottom: 56px;
    }
    .cm-fab-speed-dial-overlay {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 0;
		background: rgba(0, 0, 0, 0.32);
    }
  `],
  animations: FabSpeedDialAnimation
})
export class FabSpeedDialComponent implements OnInit {
  @Input() mainIcon!: string;

  @Input() actions!: ActionElement[];

  @Output() selectedAction = new EventEmitter<ActionElement>();

  showActions: boolean = false;
  displayedIcon: string = '';
	fabSpeedDialState: string = '';
	isCorrectActionsNumber: boolean = true;

  constructor() { }

  ngOnInit() {
    this.displayedIcon = this.mainIcon;
    this.checkActions();
  }

	checkActions() {
		if (this.actions.length < 3) {
			console.error('A speed dial should include at least three options.');
			this.isCorrectActionsNumber = false;
		}
		else if (this.actions.length > 6) {
			console.error('A speed dial should include no more than six options.');	
			this.isCorrectActionsNumber = false;
		}
	}

  toggleSpeedDial() {
    this.showActions = !this.showActions;
    if (this.showActions) {
      this.fabSpeedDialState = 'active';
      this.displayedIcon = 'close';
      document.getElementById('cm-fab-speed-dial-button-overlay')!.classList.add('cm-fab-speed-dial-overlay');
    } 
    else {
      this.fabSpeedDialState = 'inactive';
      this.displayedIcon = this.mainIcon;
      document.getElementById('cm-fab-speed-dial-button-overlay')!.classList.remove('cm-fab-speed-dial-overlay');
    }
  }

  actionSelected(action: ActionElement) {
    this.selectedAction.emit(action);
    this.toggleSpeedDial();
  }
}

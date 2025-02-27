import { FabSpeedDialAnimation } from './fab-speed-dial.animation';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionElement } from '../model/action-element';
import { ThemePalette } from '@angular/material/core';
import { ToggleState } from '../model/toggle-state';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'comat-fab-speed-dial',
	template: `
		<div *ngIf="isCorrectActionsNumber">
						<div id="comat-fab-speed-dial-button-overlay"></div>
						<div class="comat-fab-speed-dial-button-component">
								<div *ngIf="showActions" [@speedDialStagger]="actions.length" class="comat-fab-speed-dial-menu-actions">
										<div *ngFor="let action of actions" class="comat-fab-speed-dial-mini-button">
												<mat-card class="comat-fab-speed-dial-card-action" *ngIf="action.name">
														{{ action.name }}
												</mat-card>
												<button mat-mini-fab [color]="color" (click)="actionSelected(action)">
														<mat-icon>{{ action.icon }}</mat-icon>
												</button>
										</div>
								</div>
								<button mat-fab [color]="color" (click)="toggleSpeedDial()">
										<mat-icon [@fabButtonAnimation]="{value: fabSpeedDialState}">{{ displayedIcon }}</mat-icon>
								</button>
						</div>
				</div>
		`,
	styles: [`
		.comat-fab-speed-dial-button-component {
				position: fixed;
				bottom: 16px;
				right: 16px;
				text-align: right;
		}
		.comat-fab-speed-dial-mini-button {
				display: flex;
				align-items: flex-end;
				margin-bottom: 16px;
		}
		.comat-fab-speed-dial-card-action {
				margin-right: 16px;
				padding: 12px;
				text-align: center;
				padding-right: 16px;
				padding-left: 16px;
		}
		.comat-fab-speed-dial-menu-actions {
				flex-direction: column-reverse;
				display: flex;
				align-items: flex-end;
				margin-right: 8px;
				position: relative;
				bottom: 8px;
		}
		.comat-fab-speed-dial-overlay {
				width: 100%;
				height: 100%;
				position: fixed;
				left: 0;
				top: 0;
				z-index: 0;
		background: rgba(0, 0, 0, 0.32);
		}
	`],
	animations: FabSpeedDialAnimation,
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule
	],
})
export class FabSpeedDialComponent implements OnInit {
	@Input() mainIcon!: string;

	@Input() color: ThemePalette;

	@Input() actions!: ActionElement[];

	@Output() selectedAction = new EventEmitter<ActionElement>();

	@Output() stateChanged = new EventEmitter<ToggleState>();

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
		if (this.actions.length < 2) {
			console.error('A speed dial should include at least two options.');
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
			document.getElementById('comat-fab-speed-dial-button-overlay')!.classList.add('comat-fab-speed-dial-overlay');
			this.stateChanged.emit({ isActive: true, icon: this.displayedIcon });
		}
		else {
			this.fabSpeedDialState = 'inactive';
			this.displayedIcon = this.mainIcon;
			document.getElementById('comat-fab-speed-dial-button-overlay')!.classList.remove('comat-fab-speed-dial-overlay');
			this.stateChanged.emit({ isActive: false, icon: this.displayedIcon });
		}
	}

	actionSelected(action: ActionElement) {
		this.selectedAction.emit(action);
		this.toggleSpeedDial();
	}
}

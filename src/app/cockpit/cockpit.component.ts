import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: [ './cockpit.component.css' ]
})
export class CockpitComponent implements OnInit {
	constructor() {}
	@Output('srCreated') serverCreated = new EventEmitter<{ serverName: string; serverContent: string }>();
	@Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string; serverContent: string }>();

	ngOnInit() {}

	onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
		this.serverCreated.emit({
			serverName: nameInput.value,
			serverContent: contentInput.value
		});
	}

	onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
		this.bluePrintCreated.emit({
			serverName: nameInput.value,
			serverContent: contentInput.value
		});
	}
}

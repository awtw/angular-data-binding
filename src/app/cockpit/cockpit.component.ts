import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: [ './cockpit.component.css' ]
})
export class CockpitComponent implements OnInit {
	constructor() {}
	@Output('srCreated') serverCreated = new EventEmitter<{ serverName: string; serverContent: string }>();
	@Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string; serverContent: string }>();

	@ViewChild('serverNameInput', { static: true })
	serverNameInput: ElementRef;
	@ViewChild('serverContent', { static: true })
	serverContent: ElementRef;

	ngOnInit() {}

	onAddServer() {
		this.serverCreated.emit({
			serverName: this.serverNameInput.nativeElement.value,
			serverContent: this.serverContent.nativeElement.value
		});
	}

	onAddBlueprint() {
		this.bluePrintCreated.emit({
			serverName: this.serverNameInput.nativeElement.value,
			serverContent: this.serverContent.nativeElement.value
		});
	}
}

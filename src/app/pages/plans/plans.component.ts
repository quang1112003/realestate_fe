import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {
  @ViewChild('startDateInput') startDateInput: ElementRef | undefined;
  @ViewChild('endDateDisplay') endDateDisplay: ElementRef | undefined;

}

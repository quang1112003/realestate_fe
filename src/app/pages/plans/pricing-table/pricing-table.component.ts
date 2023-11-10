import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent {
  @ViewChild('startDateInput') startDateInput!: ElementRef;
  @ViewChild('endDateDisplay') endDateDisplay!: ElementRef;
  selectedPlan: any;
  
  updateEndDate() {
    const startDate = new Date(this.startDateInput.nativeElement.value);
    const daysToAdd = this.selectedPlan.days; // Replace with your logic to get the selected plan's days
    startDate.setDate(startDate.getDate() + daysToAdd);
    
    const endDateFormat = startDate.toLocaleDateString(); // Format the date as needed
    this.endDateDisplay.nativeElement.innerText = `Kết thúc ngày ${endDateFormat}`;
  }
  pricingPlans = [
    { name: '10 ngày', price: '2.700', days: 10 },
    { name: '15 ngày', price: '2.430', days: 15 },
    { name: '30 ngày', price: '2.160', days: 30 }
  ];
  submitForm() {
    // Implement your form submission logic here
    // You can access the selected start date and other form data as needed
    const selectedStartDate = this.startDateInput.nativeElement.value;
    // Perform the form submission actions here
  }
  

  endDate = '04/11/2023';
};




function updateEndDate() {
  throw new Error('Function not implemented.');
}

function submitForm() {
  throw new Error('Function not implemented.');
}


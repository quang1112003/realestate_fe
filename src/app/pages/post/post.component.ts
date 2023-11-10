import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  realEstateTypes: string[] = ['Type 1', 'Type 2', 'Type 3']; // Replace with your real estate types
  cities: string[] = ['City 1', 'City 2', 'City 3']; // Define your list of cities here
  districts: string[] = ['District 1', 'District 2', 'District 3']; // Define your list of districts here
  streets: string[] = ['Street 1', 'Street 2', 'Street 3']; // Define your list of districts here
  filteredCitySuggestions: string[] = [];
  citySuggestions: string[] = ['City 1', 'City 2', 'City 3', /* Add more cities */];

  selectedRealEstateType: string | null = null;
  formData: any = {
    city: ''
  };
  filterCitySuggestions(input: string) {
    this.filteredCitySuggestions = this.citySuggestions.filter(
      suggestion => suggestion.toLowerCase().includes(input.toLowerCase())
    );
  }
  

}

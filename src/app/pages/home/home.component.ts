import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  placeholder = '';
  fullTexts = ['What are you looking for?', 'Cau Giay District', 'Dong Anh Town', 'Hai Ba Trung District'];
  currentTextIndex = 0;


  ngOnInit(): void {
    this.animatePlaceholder(0);
  }
  animatePlaceholder(index: number): void {
    if (index < this.fullTexts[this.currentTextIndex].length) {
      this.placeholder += this.fullTexts[this.currentTextIndex][index];
      setTimeout(() => {
        this.animatePlaceholder(index + 1);
      }, 200); // Change 200 to adjust the animation speed
    } else {
      // After the first text is fully shown, switch to the next text
      setTimeout(() => {
        this.currentTextIndex = (this.currentTextIndex + 1) % this.fullTexts.length;
        this.placeholder = '';
        this.animatePlaceholder(0);
      }, 100); // Change 2000 to adjust the delay before switching to the next text
    }
  }
}

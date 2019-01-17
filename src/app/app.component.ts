import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testing-directives-pipes';
  spanStyle: any;
  spanStyle2: any;
  places: { name: string; visited: boolean; city: string; state: string; country: string; }[];
  backgroundColor: string;

  messages: string[] = ['First', 'Second', '', 'Fourth', ''];
  weather: any = { 'temperature': 50, humidity: 1 };
  weather2: any;
  numbers: number[] = [1.5, undefined, 38.47, undefined, 28.77];
  isTrue: boolean;
  isFalse: boolean = false;
  
  constructor() {
    this.spanStyle = {
      color: 'orange',
      fontFamily: 'Times New Roman'
    };

    this.spanStyle2 = {
      color: 'red',
      fontFamily: 'Verdana'
    };

    this.backgroundColor = 'antiquewhite';
  }

  ngOnInit() {
    this.places = [
      { name: 'Taj Mahal', visited: false, city: 'Agra', state: 'Uttar Pradesh', country: 'India' },
      { name: 'Charminar', visited: true, city: 'Hyderabad', state: 'Telengana', country: 'India' },
      { name: 'Red Rocks', visited: true, city: 'Denver', state: 'Colorado', country: 'USA' },
      { name: 'London Bridge', visited: false, city: 'London', state: 'London', country: 'UK' }
    ];
  }

  changeStyle() {
    this.spanStyle = {
      color: 'yellow',
      fontFamily: 'Roboto'
    };
    this.backgroundColor = 'dimgrey';
  }

  changeStyle2() {
    this.spanStyle2 = {
      color: 'orange',
      fontFamily: 'Roboto'
    };
    this.backgroundColor = 'dimgrey';
  }

  changePlaces() {
    this.places = [
      { name: 'Kutub Minar', visited: false, city: 'Delhi', state: 'Delhi', country: 'India' },
      { name: 'Vivekananda Rock', visited: true, city: 'Kanniyakumari', state: 'Tamil Nadu', country: 'India' },
      { name: 'FlatIron Hills', visited: true, city: 'Denver', state: 'Colorado', country: 'USA' }
    ];
  }
}

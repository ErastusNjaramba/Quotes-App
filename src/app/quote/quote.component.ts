import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, words:'Life is what happens when you`re busy making other plans.',author:'John Lennon'},
    {id:2,words:'When you reach the end of your rope, tie a knot in it and hang on.',author:'Franklin D. Roosevelt'},
    {id:3,words:'The future belongs to those who believe in the beauty of their dreams.',author:'Eleanor Roosevelt'},
    {id:4,words:'Whoever is happy will make others happy too.',author:'Anne Frank'},
    {id:5,words:'Tell me and I forget. Teach me and I remember. Involve me and I learn.',author:'Benjamin Franklin'},
    {id:6,words:'In the end, it`s not the years in your life that count. It`s the life in your years. ',author:'Abraham Lincoln'},
  ];

  constructor() { }

  ngOnInit() {
  }

}

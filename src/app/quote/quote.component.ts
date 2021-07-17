import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
   new Quote (2, 'When you reach the end of your rope, tie a knot in it and hang on.', 'Franklin D. Roosevelt'),
   new Quote (3, 'The future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt'),
   new Quote (1, 'Life is what happens when you`re busy making other plans.', 'John Lennon'),
   new Quote (4, 'Whoever is happy will make others happy too.', 'Anne Frank'),
   new Quote (5, 'Tell me and I forget. Teach me and I remember. Involve me and I learn.', 'Benjamin Franklin'),
   new Quote (6, 'In the end, it`s not the years in your life that count. It`s the life in your years. ', 'Abraham Lincoln'),
  ];
  

  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if (toDelete){                          
        this.quotes.splice(index,1);
      }
  }
}

  
  constructor() { }

  ngOnInit() {
  }

}

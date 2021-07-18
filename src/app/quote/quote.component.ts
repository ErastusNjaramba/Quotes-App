import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
   new Quote (2, 'Eratus', 'When you reach the end of your rope, tie a knot in it and hang on.', 'Franklin D. Roosevelt',new Date(2021,3,18),0,0),
   new Quote (3, 'Antony', 'The future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt',new Date(2021,4,16),0,0),
   new Quote (1, 'Rayan', 'Life is what happens when you`re busy making other plans.', 'John Lennon',new Date(2021,5,12),0,0),
   new Quote (4, 'Mike', 'Whoever is happy will make others happy too.', 'Anne Frank',new Date(2021,6,12),0,0),
   new Quote (5, 'Tyrel', 'Tell me and I forget. Teach me and I remember. Involve me and I learn.', 'Benjamin Franklin',new Date(2021,6,13),0,0),
   new Quote (6, 'Tysha', 'In the end, it`s not the years in your life that count. It`s the life in your years. ', 'Abraham Lincoln',new Date(2021,6,17),0,0),
  ];
  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }

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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../book.model';
import {BooklistService} from '../services/booklist.service'

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookListService : BooklistService) { }
   book: Book;
 
  ngOnInit() {
    //this.book = this.bookListService.getBooks();
  //  this.book['id']= this.route.params['id'];
  //  this.book['name']= this.route.params['name'];
   //to ensure change of data and not just the url
   this.route.params.subscribe((params1:Params)=>{

    // this.book['id']=params1['id'];
    // this.book['name']=params1['name'];
    this.book= this.bookListService.getBook(params1['id']);
    }
  );  
  }

 
}
  //this.book = this.bookListService.getBooks();




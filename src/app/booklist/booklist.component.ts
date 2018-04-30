import { Component, OnInit } from '@angular/core';
import {Book} from '../book.model';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {BooklistService} from '../services/booklist.service'
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  providers:[]
})
export class BooklistComponent implements OnInit {
    books : Book[];
  constructor(private router: Router, 
    private bookListService : BooklistService,
     private route:ActivatedRoute,
    // private params:Params
  ) { }

  ngOnInit() {
    this.books =this.bookListService.getBooks(); 
    console.log("Books-->",this.books);
    this.route.params.subscribe((params1:Params)=>{

      this.books['id']=params1['id'];
      this.books['name']=params1['name'];
      this.books['author']=params1['author'];
      this.books['file']=params1['file'];
      
      
      })
    

  }
  gotoBookDesc(id,name){
      console.log("Id is, name is--->>", id,name);
    this.router.navigate(['/view',id,name]);
  }
 
  goToForm(){
    this.router.navigate(['/form']);
  }
  updateBook(id, name)
  {
             this.router.navigate(['/update',id]);
  }
  deleteBook(id)
  {
    this.bookListService.removeBook(id);
  }
}

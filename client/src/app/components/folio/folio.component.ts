import { Component } from '@angular/core';
import { FolioService } from '../../services/folio.service';
import { Folio } from './folio';

@Component({
  selector: 'folio-list',
  templateUrl: './folio.component.html'
})

export class FolioComponent  {


  folioitems: Folio[];
  _id: string;
  title: string;
  body: string;
  imageUrl: string;
  isDone: boolean;


  constructor(private folioService:FolioService ){

  this.folioService.getFolio()
      .subscribe(folio => {
        this.folioitems = folio;
      });
  }

  addFolioItem(event:any){
    event.preventDefault();
    var newFolio = {
      title: this.title,
      body: this.body,
      imageUrl: this.imageUrl,
      isDone: false
    }

    this.folioService.addFolio(newFolio)
      .subscribe(folio => {
        console.log('newFolio');
        this.folioitems.push(folio);
        this.title = '';
        console.log('successfully added '+this.title + '!');
      });

  }

  removeFolio(id:any){
    var folioitems = this.folioitems;

    this.folioService.deleteFolio(id)
    .subscribe(data => {
      if(data.n == 1){
        for(var i=0; i < folioitems.length; i++){
          if(folioitems[i]._id == id){
            folioitems.splice(i, 1);
          }
        }
      }

    });


  }



}

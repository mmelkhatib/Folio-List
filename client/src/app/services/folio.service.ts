import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FolioService {
  constructor(private http:Http){
    console.log('Folio Service Initialized');
  }
//Get all Folio Items//
  getFolio(){
    return this.http.get('http://localhost:3600/api/folio')
    .map(res=> res.json());
  }
  //Get One Folio Item//
  getOneFolio(id:any){
    return this.http.get('http://localhost:3600/api/folio/' + id)
    .map(res => res.json());
  }

//Add Folio//
  addFolio(newFolio:any) {
    console.log(newFolio);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3600/api/folio', JSON.stringify(newFolio), {headers: headers})
      .map(res => res.json());
  }

//Delete Folio//

  deleteFolio(id:any){
    return this.http.delete('/api/folio/' + id)
      .map(res => res.json());
  }

}

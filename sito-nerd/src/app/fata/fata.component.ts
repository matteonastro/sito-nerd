import { Component, Input } from '@angular/core';
import { Root} from './fata.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fata',
  templateUrl: './fata.component.html',
  styleUrls: ['./fata.component.css']
})
export class fataComponent {
  [x: string]: any;
  data: Root | undefined;
  loading: boolean | undefined;
  fata : Observable<Root> | undefined;
  constructor(public http: HttpClient) { }
  visualizza(): void{
   this.fata = this.http.get<Root>('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Maiden%20with%20Eyes%20of%20Blue');
   this.fata.subscribe(this.getData)
  }
  getData = (d : Root) =>
   {
     this.data = (d);
     this.loading = false;
   }

}
import { Component } from '@angular/core';
import { Root} from './exodia.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-exodia',
  templateUrl: './exodia.component.html',
  styleUrls: ['./exodia.component.css']
})
export class ExodiaComponent {
  [x: string]: any;
  data: Root | undefined;
  loading: boolean | undefined;
  fata : Observable<Root> | undefined;
  constructor(public http: HttpClient) { }
  visualizza(): void{
   this.fata = this.http.get<Root>('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Exodia%20the%20Forbidden%20One');
   this.fata.subscribe(this.getData)
  }
  getData = (d : Root) =>
   {
     this.data = (d);
     this.loading = false;
   } 
  

}

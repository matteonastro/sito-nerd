import { Component } from '@angular/core';
import { Root} from './utopia.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-utopia',
  templateUrl: './utopia.component.html',
  styleUrls: ['./utopia.component.css']
})
export class UtopiaComponent {
  [x: string]: any;
  data: Root | undefined;
  loading: boolean | undefined;
  fata : Observable<Root> | undefined;
  constructor(public http: HttpClient) { }
  visualizza(): void{
   this.fata = this.http.get<Root>('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Number%2039:%20Utopia');
   this.fata.subscribe(this.getData)
  }
  getData = (d : Root) =>
   {
     this.data = (d);
     this.loading = false;
   }
}

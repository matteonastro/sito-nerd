import { Component } from '@angular/core';
import { Root} from './pietra.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pietra',
  templateUrl: './pietra.component.html',
  styleUrls: ['./pietra.component.css']
})
export class PietraComponent {
  [x: string]: any;
  data: Root | undefined;
  loading: boolean | undefined;
  fata : Observable<Root> | undefined;
  constructor(public http: HttpClient) { }
  visualizza(): void{
   this.fata = this.http.get<Root>('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=The%20White%20Stone%20of%20Legend');
   this.fata.subscribe(this.getData)
  }
  getData = (d : Root) =>
   {
     this.data = (d);
     this.loading = false;
   }
}

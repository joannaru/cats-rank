import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlCats = "http://localhost:3000/cats"
  urlCategories = "http://localhost:3000/categories"

  constructor(private http: HttpClient) { }

  getCats():Observable<Cat[]>{
    return this.http.get(this.urlCats)
            .pipe(tap(console.log))
  }

  getCategories():Observable<string>{
    return this.http.get(this.urlCategories)
      .pipe(tap(console.log))
  }

  voteUp(cat: Cat):Observable<Cat>{
    cat.votesUp+=1;
    return this.http.put<Cat>(this.urlCats+'/'+cat.id, cat)
          .pipe(tap(console.log))
  }

  voteDown(cat:Cat):Observable<Cat>{
    cat.votesDown-=1;
    return this.http.put<Cat>(this.urlCats+'/'+cat.id, cat)
          .pipe(tap(console.log))
  }
}

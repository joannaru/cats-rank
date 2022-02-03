import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Cat } from 'src/app/models/cat';
import { DataService } from 'src/app/services/data.service';
import { CatCardComponent } from 'src/app/shared/cat-card/cat-card.component';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  
  @ViewChildren(CatCardComponent) catCards!: QueryList<CatCardComponent>;//scrollIntoView cat
  cats!:Cat[]; 
  step = 3;
  count = 6;
  
  constructor(private http: DataService) { }

  ngOnInit(): void {
    this.getAllCats()
  }

  getAllCats(){
    this.http.getCats().subscribe((data)=>{
      this.cats=data;
      this.sort();
    })
  }

  onVoteEvent(){
    this.sort();
  }

  sort(){
    this.cats.sort((a:Cat,b:Cat)=>{
      return a.votesUp>b.votesUp ? -1 : (a.votesUp<b.votesUp ? 1 : 0)
    })
  }

  loadMoreCats(){
    const newIdx = this.count;
    this.count +=this.step;
    setTimeout(()=>{
      this.catCards.toArray()[newIdx]?.scrollIntoView();
    },500)
    
   
  }

 

}

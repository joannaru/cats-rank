import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cat } from 'src/app/models/cat';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {

  @Input() cat!:Cat;
  @Output() voteEvent = new EventEmitter<void>()
  loading:boolean = true;

  constructor(private http: DataService, private elRef:ElementRef) { }

  ngOnInit(): void {
  }

  voteUp(){
    this.http.voteUp(this.cat).subscribe();
    this.voteEvent.emit()
  }

  voteDown(){
    this.http.voteDown(this.cat).subscribe();
    this.voteEvent.emit()
  }
  onLoad(){
    this.loading=false;
    console.log(this.loading);
  }

  scrollIntoView(){
    this.elRef.nativeElement.scrollIntoView();
  }
}

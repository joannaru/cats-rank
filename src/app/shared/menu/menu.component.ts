import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterContentChecked, AfterViewChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AnimationEvent } from "@angular/animations";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

  animations: [
    trigger('openClose', [
      state(
        'open',
        style({height: '150px'})
      ),
      state(
        'closed',
        style({height: '0px'})
      ),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('0.2s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class MenuComponent implements OnInit {

  @Input() active:boolean=false;

  constructor() {
    

   }

  ngOnInit(): void {
  }



}








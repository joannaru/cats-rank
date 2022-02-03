import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { MenuComponent } from './shared/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cats-json-database';

  
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  active:boolean=false;

  showMenu(){
    this.active=!this.active;
  }

  scrollToTheTop(topElement: HTMLElement){
    topElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}


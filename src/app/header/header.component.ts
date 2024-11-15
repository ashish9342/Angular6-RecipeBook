import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent  {

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    console.log(feature);
    this.featureSelected.emit(feature);

  }

}

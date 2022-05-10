import { Component, Input, OnInit } from '@angular/core';
import { Concierto } from 'src/app/interfaces/concierto';

@Component({
  selector: 'app-concierto-card',
  templateUrl: './concierto-card.component.html',
  styleUrls: ['./concierto-card.component.css']
})
export class ConciertoCardComponent implements OnInit {

  //con el input recogemos los datos del evento pasado por el padre
  @Input() concierto?: Concierto;
  @Input() index: number;
  image: any;

  constructor() { }

  ngOnInit(): void {
    if(this.concierto?.imagen == undefined || this.concierto?.imagen == null) {
      this.image = '../../../assets/photos/error_image.jpg';
    } else {
      this.image = this.concierto?.imagen;
    }
  }

}

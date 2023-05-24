import { Component, OnInit } from '@angular/core';
import { RandomUtilitiesService } from 'projects/random-utilities/src/public-api';
import { BblueButtonComponent } from 'projects/bblue-button/src/public-api';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.scss']
})
export class LibrariesComponent implements OnInit{
  capString = RandomUtilitiesService.capitalize('randomly uppercase first char')

  ngOnInit(): void {
      
  }
 
  getYolo() {
    RandomUtilitiesService.yolo('Ant')
  }
}

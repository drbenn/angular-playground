import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomUtilitiesService {

  constructor() { }

  public static capitalize(string: string): string {
    return string[0].toUpperCase() + string.slice(1);
  }

  public static yolo(name: string): void {
    return console.log('YOLO ' + name);
    
  }
}

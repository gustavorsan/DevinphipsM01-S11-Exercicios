import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalizePhilips'
})
export class CaptalizePhilipsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(!value.trim){
      return '';
    }

    let words = value.split(' ');
    for(let i = 0; i < words.length; i++){
      if(words[i].length  > 2){
        words[i] = this.capitalizeFirstLetter(words[i]);
      }else{
        words[i] =   words[i].toLowerCase()
      }
     
    }

    return words.join(" ");
  }

  capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
}

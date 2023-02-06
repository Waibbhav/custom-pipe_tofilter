import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpipe',
  pure : false
})
export class CpipePipe implements PipeTransform {

  transform(item :any[],searchText:string):any[] {
    // Condition 1
    if (!item){
      return [];
    }

    //condition 2
    if (!searchText){
      return item
    }

    return item.filter(data =>{
      return data.toLowerCase().includes(searchText.toLowerCase());
    })
  }

}

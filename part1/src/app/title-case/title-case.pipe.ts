import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  //   let preposition: any = {
  //   let: 's',
  //   of: 'ss'
  // };
  transform(value: string): any {
    // if (!value) { return null; }

    // let words = value.split(' ');
    // for (var i = 0; i < words.length; i++) {

    // }
    // }
  }
}

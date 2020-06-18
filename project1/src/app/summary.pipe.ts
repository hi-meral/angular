import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

  name:'summary'
})
export class SummaryPipe implements PipeTransform{

  transform(value: string, limit?: number) {

    if (!value)
      return null;

    let limitVal = limit ? limit : 10;

    return value.substr(0, limitVal) + '...';
  }
}

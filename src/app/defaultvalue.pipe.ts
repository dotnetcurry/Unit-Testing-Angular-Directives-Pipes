import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultvalue'
})
export class DefaultvaluePipe implements PipeTransform {
  transform(value: any, type: string): any {
    if (value === undefined || value === null || value === '') {
      if (type === 'number') {
        return 0;
      }
      else if (type === 'string') {
        return "-";
      }
      else if (type === 'boolean') {
        return false;
      }
      else if (type === 'object') {
        return {};
      }
    }
    return value;
  }
}

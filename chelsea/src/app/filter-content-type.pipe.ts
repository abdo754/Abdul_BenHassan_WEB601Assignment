import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-file/content-interface';
@Pipe({
  name: 'filterContentType'
})
export class FilterContentTypePipe implements PipeTransform {
  transform(contents: Content[], type?: string): Content[] {
    if (!type) {
      // Return contents with no type set
      return contents.filter(content => !content.type);
    }
    // Return contents where type matches the provided type
    return contents.filter(content => content.type === type);
  }
}

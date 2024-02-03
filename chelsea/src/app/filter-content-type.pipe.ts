import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-file/content-interface';

@Pipe({
  name: 'filterContentType'
})
export class FilterContentTypePipe implements PipeTransform {
  transform(contents: Content[], type?: string): Content[] {
    return type ? contents.filter(content => content.type === type) : contents.filter(content => !content.type);
  }
}

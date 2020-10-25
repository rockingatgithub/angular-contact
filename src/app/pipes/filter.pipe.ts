import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    // console.log(searchText);
    // console.log(items[0]['First Name']);
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    if (searchText.charAt(0) >= 'a' && searchText.charAt(0) <= 'z') {
      return items.filter((it) => {
        return (
          it['First Name'].toLocaleLowerCase().includes(searchText) ||
          it['E-mail Address'].toLocaleLowerCase().includes(searchText)
        );
      });
    } else if (searchText.charAt(0) >= '0' && searchText.charAt(0) <= '9') {
      return items.filter((it) => {
        return it['Home Phone'].toLocaleLowerCase().includes(searchText);
      });
    }
  }
}

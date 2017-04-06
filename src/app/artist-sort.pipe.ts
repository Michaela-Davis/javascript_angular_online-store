import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistSort'
})
export class ArtistSortPipe implements PipeTransform {

  transform(input: any[], sortValue: string) {
    if(input) {
      let output: any[] = [];
      input.forEach(function(album) {
        if (album.artist === sortValue ) {
          output.push(album);
        }
      });
      return output;
    }
  }
}

import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

// The in-memory-data.service.ts file replaces mock-heroes.ts,
// which is now safe to delete.


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Snow White', cartoon: 'Snow White and the Seven Dwarfs' },
      { id: 2, name: 'Cinderella', cartoon: 'Cinderella' },
      { id: 3, name: 'Aurora', cartoon: 'Sleeping Beauty' },
      { id: 4, name: 'Ariel', cartoon: 'The little Mermaid' },
      { id: 5, name: 'Belle', cartoon: 'Beauty and the Beast' },
      { id: 6, name: 'Jasmine', cartoon: 'Aladdin' },
      { id: 7, name: 'Pocahontas', cartoon: 'Pocahontas' },
      { id: 8, name: 'Mulan', cartoon: 'Mulan' },
      { id: 9, name: 'Tiana', cartoon: 'The Princess and the Frog' },
      { id: 10, name: 'Rapunzel', cartoon: 'Tangled' },
      { id: 11, name: 'Merida', cartoon: 'Brave' },
      { id: 12, name: 'Moana', cartoon: 'Moana' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 12;
  }
}

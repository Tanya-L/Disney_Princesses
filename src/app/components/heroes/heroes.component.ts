import { Component, OnInit } from '@angular/core';

import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';


// @ = decoration function that specifies the Angular metadata for the component.

@Component({
  selector: 'app-heroes', // component's CSS element selector
  templateUrl: './heroes.component.html', // location of the component's template file.
  styleUrls: ['./heroes.component.css']  //  location of the component's private CSS styles.
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

// ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component.
  ngOnInit() {
    this.getHeroes();
}

// The subscribe() method passes the emitted array
// to the callback, which sets the component's heroes property.
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}

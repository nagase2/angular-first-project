import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../messages/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm!!!';
  hero: Hero = {
    id: 1,
    name: 'nagase',
    age: 40
  };
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.messageService.add(hero.name + ':が選択されたよ。');
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}

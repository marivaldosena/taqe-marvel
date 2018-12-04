import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { Hero } from '../../domain/hero';
import { Comic } from 'src/domain/comic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hero: Hero;
  comics: Comic[];
  constructor(private service: MarvelService) { }

  ngOnInit() {
    this.comics = new Array<Comic>();
    this.service.fetchHeroData('Hulk').subscribe(res => {
      this.setHeroData(res);

      this.service.fetchHeroComics(this.hero.id).subscribe(res => {
        this.setComicData(res);
      });
    });
  }

  private setHeroData(res: any) {
    const hero = res.data.results[0];
    this.hero = {
      id: hero.id,
      name: hero.name,
      description: hero.description,
      resourceURI: hero.resourceURI,
      comics: hero.comics.items,
      comicsAvailable: hero.comics.available,
      stories: hero.stories,
      events: hero.events,
      series: hero.series,
      image: hero.thumbnail.path + '.' + hero.thumbnail.extension
    };
  }

  private setComicData(res) {
    const comics = res.data.results;

    for (const item of comics) {
      this.comics.push({
        title: item.title,
        image: item.thumbnail.path + '.' + item.thumbnail.extension,
        description: item.description
      });
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Joke } from '../models';
import { map } from 'rxjs';

const endpoint = {
  randomJoke: 'https://api.chucknorris.io/jokes/random',
};

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  private readonly httpClient = inject(HttpClient);

  getRandomJoke$() {
    return this.httpClient
      .get<Joke>(endpoint.randomJoke)
      .pipe(map(joke => joke.value));
  }
}

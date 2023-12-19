import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { JokeService } from './joke.service';

export const jokeResolver: ResolveFn<string> = () => {
  return inject(JokeService).getRandomJoke$();
};

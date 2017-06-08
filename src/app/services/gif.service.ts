import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GifService {

  constructor(private http: Http) { }

  getGifUrl(keyword:string){
  	let url = 'http://api.giphy.com/v1/gifs/search?q=' + keyword + '&api_key=dc6zaTOxFJmzC&limit=1';
  	console.log(url);
  	return this.http.get(url);
  }

}

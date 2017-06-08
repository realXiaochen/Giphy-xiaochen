import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {

  constructor(private gifService: GifService) { }

  ngOnInit() {
  }

  public searchKeyWord: string = "";
  public imageUrl: string = "";
  public gifUrl:string = "";
  private clicked: boolean = false;
  private display: boolean = false;

  onSearch(){
  	this.gifService.getGifUrl(this.searchKeyWord).subscribe(
      res => {
        console.log('gif loaded sucessfully');
        this.clicked = true;
        this.display = true;
        this.imageUrl = JSON.parse(res['_body'])['data']['0']['url'];
        let lst1 = this.imageUrl.split("/");
        let tempString = lst1[lst1.length-1];
        let lst2 = tempString.split("-");
        let gifKey = lst2[lst2.length-1];
        this.gifUrl = "https://media.giphy.com/media/" + gifKey + "/giphy.gif";
      }, 
      error => {
      	console.log('gif loading failed');
      }
)
  }

  afterLoading(){
  	this.display = false;
  }

}

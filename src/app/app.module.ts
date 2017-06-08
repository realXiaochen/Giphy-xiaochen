import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing'

//components
import { AppComponent } from './app.component';
import { GifComponent } from './components/gif/gif.component';

//services
import { GifService } from './services/gif.service'

@NgModule({
  declarations: [
    AppComponent,
    GifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    GifService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

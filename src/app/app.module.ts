import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostcardComponent } from './postcard/postcard.component';
import { SearchwidgetComponent } from './searchwidget/searchwidget.component';
import { LatestpostsComponent } from './latestposts/latestposts.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { PostdataComponent } from './postdata/postdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    PagenotfoundComponent,
    PostcardComponent,
    SearchwidgetComponent,
    LatestpostsComponent,
    CategoriesComponent,
    TagsComponent,
    PostdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

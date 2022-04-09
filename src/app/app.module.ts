import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
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
import { PostService } from './post.service';
import { PagingComponent } from './paging/paging.component';
import { FooterpostsComponent } from './footerposts/footerposts.component';

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
    PostdataComponent,
    PagingComponent,
    FooterpostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PoststableComponent } from './poststable/poststable.component';
import { NewpostComponent } from './newpost/newpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { PostcardComponent } from './postcard/postcard.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'post', component:PostComponent},
  {path: 'admin', component: PoststableComponent},
  {path: 'admin/newPost', component:NewpostComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'admin/post/:id', component: EditpostComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

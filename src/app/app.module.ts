import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from "ngx-markdown";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticlesComponent,
    ArticleComponent,
    CategoryComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

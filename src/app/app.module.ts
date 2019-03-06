import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ClipboardModule } from 'ngx-clipboard';
import { HighlightModule } from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'javascript', func: javascript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml }
  ];
}

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContentComponent } from './content/content.component';
import { CopyAndCodeComponent } from './copy-and-code/copy-and-code.component';
import { SideNavItemsComponent } from './side-nav/side-nav-items/side-nav-items.component';
import { TopicOneComponent } from './content/topic-one/topic-one.component';
import { TopicTwoComponent } from './content/topic-two/topic-two.component';
import { TopicThreeComponent } from './content/topic-three/topic-three.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    InViewportModule,
    ScrollSpyModule.forRoot(),
    NgxPageScrollModule,
    ClipboardModule,
  ],
  declarations: [
    AppComponent,
    SideNavComponent,
    ContentComponent,
    CopyAndCodeComponent,
    SideNavItemsComponent,
    TopicOneComponent,
    TopicTwoComponent,
    TopicThreeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

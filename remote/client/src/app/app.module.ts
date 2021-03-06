import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import {CommandService} from "./service/command_server";
import { LoginComponent } from './login';
import { CommandComponent } from './component/command';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';
//modal
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { WindowModule } from '@progress/kendo-angular-dialog';
// import { ButtonsModule } from '@progress/kendo-angular-buttons';


import { SearchPipe } from './pipe/search.pipe';
import { SearchByKeyPipe } from './pipe/searchbykey.pipe';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

interface StoreType {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    LoginComponent,
    CommandComponent,
    HomeComponent,
    NoContentComponent,
    XLargeDirective,

    SearchPipe,
    SearchByKeyPipe,
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    DropDownsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    DatePickerModule ,

    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    ...environment.showDevModule ? [  ] : [],
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS,
    CommandService,
  ]

})
export class AppModule {}

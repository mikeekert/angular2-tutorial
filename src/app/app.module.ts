import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { AppAdminLinkDirective } from './app-admin-link.directive';
import { ConvertToEuroPipe } from './convert-to-euro.pipe';
import { BackendApiServiceService } from './backend-api-service.service';



@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    AppAdminLinkDirective,
    ConvertToEuroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [BackendApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptalizePhilipsPipe } from './pipes/captalize-philips.pipe';
import { CaptaliseExampleComponent } from './components/captalise-example/captalise-example.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { PrecosComponent } from './pages/precos/precos.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptalizePhilipsPipe,
    CaptaliseExampleComponent,
    HeaderComponent,
    HomeComponent,
    InfoComponent,
    PrecosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

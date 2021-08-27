import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { HomeComponent } from './components/home/home.component';
import { MorelServicesComponent } from './components/morel-services/morel-services.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { PersonalPhotosComponent } from './components/personal-photos/personal-photos.component';
import { PhotosAlaUneComponent } from './components/photos-ala-une/photos-ala-une.component';
import { ModelesFemininsComponent } from './components/modeles-feminins/modeles-feminins.component';
import { ModelesMasculinsComponent } from './components/modeles-masculins/modeles-masculins.component';
import { ShootingsComponent } from './components/shootings/shootings.component';
import { XcreationComponent } from './components/xcreation/xcreation.component';
import { XPrivateDemandsComponent } from './components/xprivate-demands/xprivate-demands.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserStatusComponent,
    HomeComponent,
    MorelServicesComponent,
    AudioPlayerComponent,
    ClothesComponent,
    PersonalPhotosComponent,
    PhotosAlaUneComponent,
    ModelesFemininsComponent,
    ModelesMasculinsComponent,
    ShootingsComponent,
    XcreationComponent,
    XPrivateDemandsComponent,
    SubscriptionComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

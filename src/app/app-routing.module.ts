import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { MorelServicesComponent } from './components/morel-services/morel-services.component';
import { CartComponent } from './components/cart/cart.component';
import { XcreationComponent } from './components/xcreation/xcreation.component';
import { XPrivateDemandsComponent } from './components/xprivate-demands/xprivate-demands.component';
import { ShootingsComponent } from './components/shootings/shootings.component';
import { PhotosAlaUneComponent } from './components/photos-ala-une/photos-ala-une.component';
import { ModelesMasculinsComponent } from './components/modeles-masculins/modeles-masculins.component';
import { ModelesFemininsComponent } from './components/modeles-feminins/modeles-feminins.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthenticationGuard } from './Guards/authentication.guard';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component: SubscriptionComponent},
  // {path:'services/v1/:id', component: MorelServicesComponent}, 
  { path: 'services', component: MorelServicesComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path:'music', component: AudioPlayerComponent },
      { path: 'xcreations', component: XcreationComponent },
      { path: 'xprivatedemands', component: XPrivateDemandsComponent },
      { path: 'shootings', component: ShootingsComponent },
      { path: 'photosalaune', component: PhotosAlaUneComponent },
      { path: 'modelesmasculins', component: ModelesMasculinsComponent },
      { path: 'modelesfeminins', component: ModelesFemininsComponent },
      { path: 'subscription', component: SubscriptionComponent },
      { path: 'photospersonnelles', component: ClothesComponent },
      { path: 'clothes', component: ClothesComponent },
      { path: 'userprofile', component: UserProfileComponent },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./components/register/register.component";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/register.reducer";
import {AuthService} from "./services/auth.service";
import {EffectsModule} from "@ngrx/effects";
import {RegisterEffects} from "./store/register.effects";
import {ErrorHandlerComponent} from "./components/error-handler/error-handler.component";

const routes: Routes = [
  {
    path:'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent,
    ErrorHandlerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild((routes)),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffects]),
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }

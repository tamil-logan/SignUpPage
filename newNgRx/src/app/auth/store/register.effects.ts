import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {register, registerFailed, registerSuccess} from "./register.action";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {AuthService} from "../services/auth.service";
import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class RegisterEffects {

  constructor(private actions$ : Actions, private authService: AuthService, private router:Router) {
  }

  register$ = createEffect(() => this.actions$.pipe(
    ofType(register),
    switchMap(({request}) => {
      return this.authService.register(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          return registerSuccess({currentUser})
        }),
        catchError((err: HttpErrorResponse) => {
          return of(registerFailed(err.error.errors))
        } )
      )
    })
  )
 )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccess),
        tap(() => {
        this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )
}

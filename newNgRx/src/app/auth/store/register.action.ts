import { createAction, props } from '@ngrx/store';
import {ErrorInterface, RegisterRequestInterface} from "./register.models";
import {CurrentUserInterface} from "../../shared/types/currentUser.interface";

export const register = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestInterface}>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{currentUser:CurrentUserInterface}>()
)

export const registerFailed = createAction(
  '[Auth] Register Failed',
  props<{error: ErrorInterface}>()
)

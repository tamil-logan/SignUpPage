import {CurrentUserInterface} from "../../shared/types/currentUser.interface";

export interface RegisterRequestInterface {
  user: {
    email:string,
    password:string,
    username:string
  }
}

export interface AuthStateInterface {
  isSubmitting: boolean,
  currentUser: CurrentUserInterface | null,
  isLoggedIn: boolean | null,
  validationError: ErrorInterface |null
}

export interface AuthResponseInterface {
  user: CurrentUserInterface
}

export interface ErrorInterface {
 [key: string] : string[]
}

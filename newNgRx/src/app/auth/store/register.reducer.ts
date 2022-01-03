import {AuthStateInterface} from "./register.models";
import {Action, createReducer, on} from "@ngrx/store";
import {register, registerFailed, registerSuccess} from "./register.action";

const initialState : AuthStateInterface = {
  isSubmitting: false,
  currentUser : null ,
  validationError: null,
  isLoggedIn: null
}

const authReducer = createReducer(
  initialState,
  on(register, (state): AuthStateInterface => ({...state, isSubmitting: true, validationError: null})),
  on(registerSuccess, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting:false,
    isLoggedIn:false,
    currentUser: action.currentUser
  })),
  on(registerFailed, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting:false,
    validationError: action.error
  })),
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}

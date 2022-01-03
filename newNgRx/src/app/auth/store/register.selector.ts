import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateModel} from "../../shared/types/appState.interface";
import {AuthStateInterface} from "./register.models";


export const authFeatureSelector = createFeatureSelector<AppStateModel, AuthStateInterface >('auth')

export const isSubmittingSelector = createSelector(authFeatureSelector,
  (authState:AuthStateInterface) => authState.isSubmitting
  )

export  const validationErrorSelector = createSelector(
  authFeatureSelector,
  (authState:AuthStateInterface) => authState.validationError
)

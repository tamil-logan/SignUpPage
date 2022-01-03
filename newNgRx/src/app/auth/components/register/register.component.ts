import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from "@ngrx/store";
import * as registerActions from "src/app/auth/store/register.action"
import {Observable} from "rxjs";
import {AuthStateInterface, ErrorInterface, RegisterRequestInterface} from "../../store/register.models";
import {isSubmittingSelector, validationErrorSelector} from "../../store/register.selector";
import {AppStateModel} from "../../../shared/types/appState.interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  // @ts-ignore
  isSubmitting$: Observable<boolean>
  // @ts-ignore
  errors$: Observable<ErrorInterface>

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
     const request: RegisterRequestInterface = {user: this.form.value}
     this.store.dispatch(registerActions.register({request}));
  }

  initializeValues(): void {
    // @ts-ignore
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    // @ts-ignore
    this.errors$ = this.store.pipe(select(validationErrorSelector))
  }
}

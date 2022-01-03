import {Component, Input, OnInit} from '@angular/core';
import {ErrorInterface} from "../../store/register.models";

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {

  // @ts-ignore
  @Input('responseErrors') errors: ErrorInterface;
  // @ts-ignore
  errorMessages: string[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.errors)
    // @ts-ignore
    this.errorMessages = Object.keys(this.errors).map((name:string) => {
      const messages = this.errors[name].join('');
      return `${name} ${messages}`
    })

  }

}

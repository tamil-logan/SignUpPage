import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthResponseInterface, RegisterRequestInterface} from "../store/register.models";
import {map, Observable} from "rxjs";
import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {environment} from "../../../environments/environment";

@Injectable()

export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.baseUrl + '/users'
     return this.http.post<AuthResponseInterface>(url, data).pipe(
       map((response) => response.user)
     )
  }
}

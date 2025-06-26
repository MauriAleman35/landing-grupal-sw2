import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SubscriptionResponse } from '../interfaces/subscription';



@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private ApiUrl:string=environment.apiUrl
  constructor(private Http:HttpClient, private router:Router) { }

 
sendChatBotMessage(mensaje: string): Observable<any> {
  return this.Http.post<any>(`${this.ApiUrl}/chatbot`, { mensaje }); // <--- aquí
}
 getSubscriptions():Observable<SubscriptionResponse>{
    return this.Http.get<SubscriptionResponse>(`${this.ApiUrl}/subscription`)
  }
}

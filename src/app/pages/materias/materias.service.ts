import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private readonly apiUrl = environment.apiUrl + '/chatbot';

  constructor(
    private http: HttpClient
  ) { }

  startConversation(): any {
    return this.http.get(this.apiUrl);
  }

  sendMessage(text, context) {
    return this.http.post(this.apiUrl, {
      input: {
        text
      },
      context
    });
  }
}

import { BuscaCep } from './../model/busca-cep';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscacepService {

//apiUrl = 'https://viacep.com.br/ws'
apiUrl = 'https://viacep.com.br/ws/58303360/json/'
//apiUrl = 'http://localhost:3001/endereco'
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string){
    this.snackBar.open(msg, 'x', {
      duration: 1000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  // retornando um array de clientes na requisição GET Observable metodo que escuta os eventos de resposta
  read(): Observable<BuscaCep>{
    return this.http.get<BuscaCep>(this.apiUrl)
  }

/*
   read(): Observable<Produtc[]>{
    return this.http.get<Produtc[]>(this.baseUrl)
  }
  
  readById(id: string): Observable<Produtc>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Produtc>(url)
  }
*/

}

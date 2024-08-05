import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { BuscaCepComponent } from './components/busca-cep/busca-cep.component';
// import classe para tool bar no topo
import {MatToolbarModule} from '@angular/material/toolbar';
// estilo de botão
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
// classe do componente de card
import { MatCardModule } from '@angular/material/card';
// componente de msg
import {MatSnackBarModule} from '@angular/material/snack-bar';
// modulo com metodos http
import {HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ListaCepComponent } from './components/lista-cep/lista-cep.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BuscaCepComponent,
    ListaCepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

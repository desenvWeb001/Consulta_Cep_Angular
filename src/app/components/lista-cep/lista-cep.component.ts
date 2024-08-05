import { BuscacepService } from './../../service/buscacep.service';
import { Component, OnInit } from '@angular/core';
import { BuscaCep } from 'src/app/model/busca-cep';

@Component({
  selector: 'app-lista-cep',
  templateUrl: './lista-cep.component.html',
  styleUrls: ['./lista-cep.component.css']
})

export class ListaCepComponent implements OnInit {

  buscacep: BuscaCep;

  displayedColumns = ['cep','logradouro','complemento','bairro','localidade','uf','ibge','gia','ddd','siaf']
  
  constructor(private buscacepservice: BuscacepService) { }

  ngOnInit(): void {
    this.buscacepservice.read()
      .subscribe(
          cepevent => {
          this.buscacep = cepevent
    })
  }
}

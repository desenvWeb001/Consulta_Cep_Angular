import { BuscacepService } from './../../service/buscacep.service';
import { Component, OnInit } from '@angular/core';
import { BuscaCep } from 'src/app/model/busca-cep';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent implements OnInit {
/*
  buscacep: BuscaCep = {
  };
*/

  constructor(private buscaceoservice: BuscacepService) { }

  ngOnInit(): void {
    
  }
}

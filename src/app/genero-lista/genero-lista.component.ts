import { Component, OnInit } from '@angular/core';

import { GenerosService } from '../generos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-genero-lista',
  templateUrl: './genero-lista.component.html',
  styleUrls: ['./genero-lista.component.css']
})
export class GeneroListaComponent implements OnInit {
  genero = null;

  resultadoExcluir = null;

  constructor(private genero$: GenerosService, private router: Router) { 

  }

  ngOnInit() {
  }

    /**
   * Este método usa o serviço `GenerosService` para obter a lista de artistas. 
   * Quando houver retorno, armazena o resultado no atributo `generos`.
   */
  atualizarLista() {
    this.genero$.lista()
      .subscribe(
        lista => this.genero = lista.results
      );
  }

    /**
   * Este método exclui um artista, de acordo com confirmação do usuário. Ao excluir, atualiza a lista de artistas.
   * 
   * @param genero O artista que será excluído
   */
  excluir(genero) {
    if (confirm(`Tem certeza que deseja excluir o genero "${genero.nome}" ?\nEssa ação não é reversível!`)) {
      this.genero$.excluir(genero.id)
        .subscribe(
          _ => {
            this.resultadoExcluir = true;
            this.atualizarLista();
          },
          err => {
            this.resultadoExcluir = err.error;
          }
        )
    }
  }

  /**
   * Este método realiza navegação para a funcionalidade de edição do artista.
   * 
   * @param genero O artista que será editado
   */
  editar(genero) {
    this.router.navigate(['genero', genero.id, 'editar']);
  }

  /**
   * Este método realiza navegação para a funcionalide de consulta do artista.
   * 
   * @param genero O artista que será consultado
   */
  consultar(genero) {
    this.router.navigate(['genero', genero.id]);
  }
}
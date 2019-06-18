import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { ValicacaoFormUtilService } from '../valicacao-form-util.service';

/**
 * O componente `CadastrarArtistaComponent` implementa a funcionalidade de cadastrar
 * artista. Para isso, utiliza o serviço [`ArtistasService`]{@link ArtistasService}.
 * 
 * @see ArtistasService
 * @see ValicacaoFormUtilService
 */
@Component({
  selector: 'app-cadastrar-generos',
  templateUrl: './cadastrar-generos.component.html',
  styleUrls: ['./cadastrar-generos.component.css']
})
export class CadastrarArtistaComponent implements OnInit {
  /** Atributo vinculado ao campo do nome do artista */
  nome = null;
  

  constructor(private generos$: GenerosService,
    private validacao$: ValicacaoFormUtilService) { }

  ngOnInit() {
  }

  /**
   * Este método utiliza o método [`cadastrar()`]{@link generoService#cadastrar}
   * para cadastrar um artista, utilizando os atributos `nome` e `foto`.
   * 
   * Quando obtiver um resultado do método, faz um tratamento para lidar com situação
   * de erro ou sucesso.
   */
  salvar() {
    this.generos$.cadastrar(this.nome)
      .subscribe(
        data => this.validacao$.erro = false,
        err => this.validacao$.erro = err.error
      );
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicaComponent } from './musica/musica.component';
import { MusicasComponent } from './musicas/musicas.component';
import { ArtistaComponent } from './artista/artista.component';
import { GeneroComponent } from './genero/genero.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CadastrarArtistaComponent } from './cadastrar-artista/cadastrar-artista.component';
import { ArtistaListaComponent } from './artista-lista/artista-lista.component';
import { EditarArtistaComponent } from './editar-artista/editar-artista.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { GeneroCadastrarComponent } from './cadastrar-genero/cadastrar-generos.component';
import { GeneroAtualizarComponent } from './genero-atualizar/genero-atualizar.component';
import { GeneroExcluirComponent } from './genero-excluir/genero-excluir.component';
import { GeneroConsultarComponent } from './genero-consultar/genero-consultar.component';

const routes: Routes = [
  { path: 'artistas/cadastrar', component: CadastrarArtistaComponent },
  { path: 'artistas/listar', component: ArtistaListaComponent },
  { path: 'artistas/:id/editar', component: EditarArtistaComponent },
  { path: 'artistas/:id', component: ArtistaComponent },
  { path: 'musicas', component: MusicasComponent },
  { path: 'musicas/:id', component: MusicaComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'genero/listar', component: GeneroListaComponent },
  { path: 'genero/cadastrar', component: GeneroCadastrarComponent },
  { path: 'genero/atualizar', component: GeneroAtualizarComponent },
  { path: 'genero/excluir', component: GeneroExcluirComponent },
  { path: 'genero/consultar', component: GeneroConsultarComponent },
  { path: 'generos/:id', component: GeneroComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

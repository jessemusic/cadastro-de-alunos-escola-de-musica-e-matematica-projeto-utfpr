import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { EnderecosAlunosComponent } from './enderecos-alunos/enderecos-alunos.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './shared/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { MatCardModule } from '@angular/material/card';
import { CardDepoimentosComponent } from './shared/card-depoimentos/card-depoimentos.component';
import { FormCursoComponent } from './shared/form-curso/form-curso.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    CadastroAlunosComponent,
    EnderecosAlunosComponent,
    HelloWorldComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    CardComponent,
    ContainerComponent,
    HomeComponent,
    CardBuscaComponent,
    CardDepoimentosComponent,
    FormCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

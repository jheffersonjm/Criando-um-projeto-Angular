import { Routes } from '@angular/router';
import { BoasVindas } from './boas-vindas/boas-vindas';
import {Home} from './home/home'; 
import {Sobre} from './sobre/sobre'; 
import { ListaComponentes } from './lista-componentes/lista-componentes';


export const routes: Routes = [
    {path: "", component: BoasVindas}, 
    {path: "home", component: Home},
    {path: "sobre", component: Sobre},
    {path: 'lista-componentes', component: ListaComponentes}
];

import { Routes } from '@angular/router';
import { AtributosComponent } from './pages/atributos/atributos.component';
import { EstructuralesComponent } from './pages/estructurales/estructurales.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path:"atributos", component: AtributosComponent, title:"Directivas de atributos"},    
    {path:"estructurales", component: EstructuralesComponent, title:"Directivas estructurales"},
    {path:'', component: InicioComponent, title: "Signos App"},
    {path:'**', component: NotFoundComponent, title: "Página no encontrada"}
];

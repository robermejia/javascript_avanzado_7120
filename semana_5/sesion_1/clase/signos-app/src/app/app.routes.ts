import { Routes } from '@angular/router';
import { AtributosComponent } from './pages/atributos/atributos.component';
import { EstructuralesComponent } from './pages/estructurales/estructurales.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { GestorSignosComponent } from './pages/gestor-signos/gestor-signos.component';

export const routes: Routes = [
    {path:"atributos", component: AtributosComponent, title:"Directivas de atributos"},    
    {path:"estructurales", component: EstructuralesComponent, title:"Directivas estructurales"},
    {path:"pipes", component: PipesComponent, title:"Pipes"},
    {path:"template", component: TemplateComponent, title:"Formularios basado en plantillas"},
    {path:"reactive", component: ReactiveComponent, title:"Formularios reactivo"},
    {path:"gestor", component: GestorSignosComponent, title:"Gestor de signos"},
    {path:'', component: InicioComponent, title: "Signos App"},
    {path:'**', component: NotFoundComponent, title: "Página no encontrada"}
];

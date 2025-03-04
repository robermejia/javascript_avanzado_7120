import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductosComponent } from './pages/productos/productos.component';

export const routes: Routes = [
    { path: '', component: InicioComponent, title: "Inicio" },
    { path: 'nosotros', component: NosotrosComponent, title: "Nosotros" },
    { path: 'contacto', component: ContactoComponent, title: "Contacto" },
    { path: 'productos', component: ProductosComponent, title: "Productos" }
];

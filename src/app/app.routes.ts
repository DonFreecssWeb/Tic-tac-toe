import { Routes } from '@angular/router';
import { JugarComponent } from './pages/jugar/jugar.component';
import { BotoneraComponent } from './components/botonera/botonera.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CambiarNombreComponent } from './pages/cambiar-nombre/cambiar-nombre.component';

export const routes: Routes = [
    {path: "", component:HomeComponent},
    {path: "jugar", component:JugarComponent},
    {path: "cambiar-nombre", component:CambiarNombreComponent}
];


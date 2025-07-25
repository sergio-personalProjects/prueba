import { Routes } from '@angular/router';
import { FrutasComponent } from './views/frutas/frutas.component';
import { PescadosComponent } from './views/pescados/pescados.component';
import { VerdurasComponent } from './views/verduras/verduras.component';

export const routes: Routes = [    
    {path:'', redirectTo:'/frutas', pathMatch:'full'},//Esta línea del array sirve para redireccionar de forma automática
    {path:'frutas', component: FrutasComponent},
    {path:'verduras', component: VerdurasComponent},
    {path:'pescados', component: PescadosComponent},
];

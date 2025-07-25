import { Routes } from '@angular/router';
import { GithubComponent } from './views/github/github.component';
import { GithubTwoComponent } from './views/github-two/github-two.component';
import { MemeComponent } from './views/meme/meme.component';
//import { MemeTwoComponent } from './views/meme-two/meme-two.component';
import { MemeThreeComponent } from './views/meme-three/meme-three.component';
import { MemetwoComponent } from './views/memetwo/memetwo.component';

export const routes: Routes = [
    { path: '', redirectTo: '/github', pathMatch: 'full' },//Esta línea del array sirve para redireccionar de forma automática
    { path: 'github', component: GithubComponent },
    { path: 'github-two', component: GithubTwoComponent },
    { path: 'meme', component: MemeComponent },
    //{ path: 'meme-two', component: MemeTwoComponent },
    { path: 'memetwo', component: MemetwoComponent },
    { path: 'meme-three', component: MemeThreeComponent },
];

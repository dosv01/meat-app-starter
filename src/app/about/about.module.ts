import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

export const ROUTES: Routes = [
    {path: '', component: AboutComponent}
];

@NgModule({
    declarations: [AboutComponent],
    imports: [RouterModule, RouterModule.forChild(ROUTES)]
})
export class AboutModule {}
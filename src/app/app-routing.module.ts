import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  { path: 'stakeholder', component: StakeholderComponent },
  { path: 'media', component: MediaComponent },
  { path: '', redirectTo: '/stakeholder', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

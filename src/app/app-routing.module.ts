import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandsComponent } from './commands/commands.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';

const routes: Routes = [
  {path:'commands', component: CommandsComponent},
  {path:'string-interpolation', component: StringInterpolationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

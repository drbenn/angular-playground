import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { CommandsComponent } from './commands/commands.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';

const routes: Routes = [
  {path:'commands', component: CommandsComponent},
  {path:'string-interpolation', component: StringInterpolationComponent},
  {path:'property-binding', component: PropertyBindingComponent},
  {path:'event-binding', component: EventBindingComponent},
  {path:'class-style-binding', component: ClassStyleBindingComponent},
  {path:'attribute-binding', component: AttributeBindingComponent},
  {path:'ngmodel', component: NgmodelComponent},
  {path:'template-variables', component: TemplateVariablesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

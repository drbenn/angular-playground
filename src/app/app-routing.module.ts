import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { BasicCustomStructuralDirectiveComponent } from './basic-custom-structural-directive/basic-custom-structural-directive.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { CommandsComponent } from './commands/commands.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgOptimizedImageComponent } from './ng-optimized-image/ng-optimized-image.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { SvgTemplatesComponent } from './svg-templates/svg-templates.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';

const routes: Routes = [
  {path:'commands', component: CommandsComponent},
  {path:'string-interpolation', component: StringInterpolationComponent},
  {path:'property-binding', component: PropertyBindingComponent},
  {path:'event-binding', component: EventBindingComponent},
  {path:'class-style-binding', component: ClassStyleBindingComponent},
  {path:'attribute-binding', component: AttributeBindingComponent},
  {path:'ngmodel', component: NgmodelComponent},
  {path:'template-variables', component: TemplateVariablesComponent},
  {path:'svg-templates', component: SvgTemplatesComponent},
  {path:'ng-container', component: NgContainerComponent},
  {path:'ng-content', component: NgContentComponent},
  {path:'ng-template', component: NgTemplateComponent},
  {path:'ng-optimized-image', component: NgOptimizedImageComponent},
  {path:'basic-custom-structural-directive', component: BasicCustomStructuralDirectiveComponent},
  {path:'template-ref', component: TemplateRefComponent},
  {path:'view-container-ref', component: ViewContainerRefComponent},
  {path:'host-listener', component: HostListenerComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

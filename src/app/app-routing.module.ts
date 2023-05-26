import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { BasicCustomStructuralDirectiveComponent } from './basic-custom-structural-directive/basic-custom-structural-directive.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { CommandsComponent } from './commands/commands.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { IntersectionObserverComponent } from './intersection-observer/intersection-observer.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgOptimizedImageComponent } from './ng-optimized-image/ng-optimized-image.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { RendererTwoComponent } from './renderer-two/renderer-two.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { SvgTemplatesComponent } from './svg-templates/svg-templates.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';
import { ViewChildComponent} from './view-child/view-child.component'
import { ModulesComponent } from './modules/modules.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

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
  {path:'element-ref', component: ElementRefComponent},
  {path:'renderer-two', component: RendererTwoComponent},
  {path:'intersection-observer', component: IntersectionObserverComponent},
  {path:'view-child', component: ViewChildComponent},
  {path:'modules', component: ModulesComponent},
  {path:'libraries', component: LibrariesComponent},
  {path:'td-forms', component: TemplateDrivenFormsComponent},
  {path:'reactive-forms', component: ReactiveFormsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

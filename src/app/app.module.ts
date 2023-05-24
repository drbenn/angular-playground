import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CommandsComponent } from './commands/commands.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { PropBindChildComponent } from './property-binding/prop-bind-child/prop-bind-child.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { SvgTemplatesComponent } from './svg-templates/svg-templates.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContentChildComponent } from './ng-content/ng-content-child/ng-content-child.component';
import { NgOptimizedImageComponent } from './ng-optimized-image/ng-optimized-image.component';
import { NgOptimizedImage } from '@angular/common';
import { BasicCustomStructuralDirectiveComponent } from './basic-custom-structural-directive/basic-custom-structural-directive.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { UnlessDirective } from './basic-custom-structural-directive/unless.directive';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { RendererTwoComponent } from './renderer-two/renderer-two.component';
import { IntersectionObserverComponent } from './intersection-observer/intersection-observer.component';
import { ObserveElementDirective } from './intersection-observer/observe-element.directive';
import { ViewChildComponent } from './view-child/view-child.component';
import { RedDirective } from './basic-custom-structural-directive/red.directive';
import { MessageMagicDirective } from './basic-custom-structural-directive/message-magic.directive';
import { ModulesComponent } from './modules/modules.component';
import { LibrariesComponent } from './libraries/libraries.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CommandsComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    PropBindChildComponent,
    NgmodelComponent,
    EventBindingComponent,
    AttributeBindingComponent,
    ClassStyleBindingComponent,
    TemplateVariablesComponent,
    SvgTemplatesComponent,
    NgContainerComponent,
    NgContentComponent,
    NgTemplateComponent,
    NgContentChildComponent,
    NgOptimizedImageComponent,
    BasicCustomStructuralDirectiveComponent,
    TemplateRefComponent,
    ViewContainerRefComponent,
    HostListenerComponent,
    UnlessDirective,
    ElementRefComponent,
    RendererTwoComponent,
    IntersectionObserverComponent,
    ObserveElementDirective,
    ViewChildComponent,
    RedDirective,
    MessageMagicDirective,
    ModulesComponent,
    LibrariesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

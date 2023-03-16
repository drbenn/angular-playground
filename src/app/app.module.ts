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
    NgContentChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

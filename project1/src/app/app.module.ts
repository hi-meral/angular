import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFavouriteComponent } from './my-favourite/my-favourite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { TweeterLikesComponent } from './tweeter-likes/tweeter-likes.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { InputFormatDirective } from './input-format.directive';
import { ShippingBoxExerciseComponent } from './shipping-box-exercise/shipping-box-exercise.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormExerciseComponent } from './template-form-exercise/template-form-exercise.component';
import { NewFormArrayComponent } from './new-form-array/new-form-array.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpSampleServiceComponent } from './http-sample-service/http-sample-service.component';
import { PostDateServicesService } from './services/post-date-services.service';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowersComponent } from './followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    MyFavouriteComponent,
    BootstrapPanelComponent,
    TweeterLikesComponent,
    DirectivesComponent,
    CustomDirectiveComponent,
    InputFormatDirective,
    ShippingBoxExerciseComponent,
    ContactFormComponent,
    TemplateFormExerciseComponent,
    NewFormArrayComponent,
    HttpSampleServiceComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostDateServicesService, ,
    { provide: ErrorHandler, useClass: AppErrorHandler } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

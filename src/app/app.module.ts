import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from "./shared/menu/menu.component";
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { InstructorsComponent } from './pages/instructors/instructors.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LowercaseCustomPipe } from './pipes/lowercase-custom.pipe';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuComponent,
    ProfileComponent,
    HomeComponent,
    CoursesComponent,
    InstructorsComponent,
    LoginComponent,
    SignupComponent,
    LowercaseCustomPipe
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

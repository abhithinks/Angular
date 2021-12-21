import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OurmembersComponent } from './ourmembers/ourmembers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CollectionComponent } from './collection/collection.component';
import { FooterComponent } from './footer/footer.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LightboxModule } from 'ngx-lightbox';
import { PaginationComponent } from './pagination/pagination.component';
import {MatTableModule} from '@angular/material/table';
import { JoinusComponent } from './joinus/joinus.component';
import { HttpClientModule } from "@angular/common/http";
import { StoreComponent } from './store/store.component';
import { ChildComponent } from './child/child.component';
import { DesignutilityService } from './designutility.service';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OurmembersComponent,
    ContactusComponent,
    CollectionComponent,
    FooterComponent,
    GalleryComponent,
    PaginationComponent,
    JoinusComponent,
    StoreComponent,
    ChildComponent,
    EmployeelistComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,
    LightboxModule,
    NgxPaginationModule,
    MatTableModule,
    HttpClientModule,
    MaterialModule
    
    
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

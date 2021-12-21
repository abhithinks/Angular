import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationControlsDirective } from 'ngx-pagination';
import { CollectionComponent } from './collection/collection.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { JoinusComponent } from './joinus/joinus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurmembersComponent } from './ourmembers/ourmembers.component';
import { PaginationComponent } from './pagination/pagination.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {path:'' , component:HomeComponent },

  {path:'home' , component:HomeComponent},

  {path:'ourMembers' , component:OurmembersComponent },

  {path:'contactUs' , component:ContactusComponent },

  {path:'gallery' , component:GalleryComponent },

  {path:'pagination' , component:PaginationComponent },

  {path:'joinUs' , component:JoinusComponent },

  {path:'onlineStore' , component:StoreComponent },

  {path:'employeeList' , component:EmployeelistComponent },

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

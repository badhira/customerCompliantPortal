import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ServiceAgentComponent } from './components/service-agent/service-agent.component';
import { AddServiceAgentComponent } from './components/add-service-agent/add-service-agent.component';
import { EditServiceAgentComponent } from './components/edit-service-agent/edit-service-agent.component';
import { ViewServiceAgentComponent } from './components/view-service-agent/view-service-agent.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ViewCustomerComponent,
    AdminComponent,
    CustomerComponent,
    ServiceAgentComponent,
    AddServiceAgentComponent,
    EditServiceAgentComponent,
    ViewServiceAgentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

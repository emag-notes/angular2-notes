import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import FooterComponent from '../footer/footer';
import HomeComponent from '../home/home';
import NavbarComponent from '../navbar/navbar';
import SearchComponent from '../search/search';

@Component({
  selector: 'auction-application',
  templateUrl: 'app/components/application/application.html',
  directives: [
    ROUTER_DIRECTIVES,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent],
  encapsulation: ViewEncapsulation.None
})
export default class ApplicationComponent {}

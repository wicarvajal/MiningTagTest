import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faHome, faCheckCircle, IconDefinition, faEdit, faFileAlt, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

// Metadata
export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  collapse?: string;
  icontype: IconDefinition;
  // icon: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [{
  path: '/exercise-one',
  title: 'Ejercicio Uno',
  type: 'link',
  icontype: faChevronCircleRight
}, {
  path: '/exercise-two',
  title: 'Ejercicio Dos',
  type: 'link',
  icontype: faChevronCircleRight
}];

@Component({
  // moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent implements OnInit, AfterViewInit {

  faHome = faHome;
  faCheckCircle = faCheckCircle;
  faEdit = faEdit;
  faFileAlt = faFileAlt;
  public menuItems: any[];

  constructor() {}

  isNotMobileMenu() {
    if (window.outerWidth > 991) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  ngAfterViewInit() {
  }

}

import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { filter, takeWhile } from 'rxjs/operators';
import { ROUTES } from '../sidebar/sidebar.component';
import * as _ from 'lodash';

const misc: any = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};

@Component({
    // moduleId: module.id,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {

    private listTitles: any[];
    location: Location;
    private toggleButton;
    private sidebarVisible: boolean;
    private _router: Subscription;
    public open = false;

    @ViewChild('app-navbar', { static: false }) button;
    isActiveComponent = true;

    constructor(location: Location, private element: ElementRef, private router: Router) {
        this.location = location;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);

        const navbar: HTMLElement = this.element.nativeElement;
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            const $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    }

    minimizeSidebar() {
        const body = document.getElementsByTagName('body')[0];

        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;

        } else {
            setTimeout(() => {
                body.classList.add('sidebar-mini');

                misc.sidebar_mini_active = true;
            }, 300);
        }


        const simulateWindowResize = setInterval(() => {
            window.dispatchEvent(new Event('resize'));
        }, 180);

        setTimeout(() => {
            clearInterval(simulateWindowResize);
        }, 1000);
    }

    isMobileMenu() {
        if (window.outerWidth < 991) {
            return false;
        }
        return true;
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(() => {
            toggleButton.classList.add('toggled');
        }, 500);
        const mainPanel = document.getElementsByClassName('main-panel')[0] as HTMLElement;
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
        const mainPanel = document.getElementsByClassName('main-panel')[0] as HTMLElement;

        if (window.innerWidth < 991) {
            setTimeout(() => {
                mainPanel.style.position = '';
            }, 500);
        }
    }
    sidebarToggle() {
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    getTitle() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        // tslint:disable-next-line: prefer-for-of
        for (let item = 0; item < this.listTitles.length; item++) {
            const parent = this.listTitles[item];
            if (parent.path === titlee) {
                return parent.title;
            } else if (parent.children) {
                const children_from_url = titlee.split('/')[2];
                // tslint:disable-next-line: prefer-for-of
                for (let current = 0; current < parent.children.length; current++) {
                    if (parent.children[current].path === children_from_url) {
                        return parent.children[current].title;
                    }
                }
            }
        }

        return 'Dashboard';
    }

    getPath() {
        return this.location.prepareExternalUrl(this.location.path());
    }

    ngAfterViewInit(): void {
        this.router.events.pipe(takeWhile(() => this.isActiveComponent)).subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.sidebarToggle();
            }
        });
    }

    ngOnDestroy(): void {
        this.isActiveComponent = false;
    }
}

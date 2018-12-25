import {Component, OnInit, Renderer2} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {NavigationEnd} from '@angular/router';

declare const $: any;
declare const jquery: any;
declare const App: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    previousUrl: string;
    currentURL = '';

    constructor(private renderer: Renderer2, private router: Router) {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    if (this.previousUrl) {
                        this.renderer.removeClass(document.body, this.previousUrl);
                    }
                    const currentUrl = event.url.split('/');
                    const currentUrlSlug = currentUrl[currentUrl.length - 1];
                    if (currentUrlSlug) {
                        this.renderer.addClass(document.body, currentUrlSlug);
                    }
                    this.previousUrl = currentUrlSlug;

                    if (currentUrlSlug === 'dashboardv3' || currentUrlSlug === 'landingpage'
                        || currentUrlSlug === 'email' || currentUrlSlug === 'pricingtable'
                        || currentUrlSlug === 'fivezerothree' || currentUrlSlug === 'fivehundred'
                        || currentUrlSlug === 'lockScreen' || currentUrlSlug === 'forgotPassword'
                        || currentUrlSlug === 'loginv1' || currentUrlSlug === 'registrationv1'
                        || currentUrlSlug === 'resetPassword' || currentUrlSlug === 'profile'
                        || currentUrlSlug === 'fouroffour') {
                        $('.page-title').addClass('m-b-0');
                    } else {
                        $('.page-title').removeClass('m-b-0');
                    }

                    if (currentUrlSlug === 'darkfooter') {
                        $('footer').removeClass('footer-light');
                    } else {
                        $('footer').addClass('footer-light');
                    }

                    this.currentURL = currentUrlSlug;
                    $(function () {
                        App.init();
                    });
                }
            });
        this.currentURL = window.location.href;
    }

    ngOnInit() {

    }

    title = 'app';

}

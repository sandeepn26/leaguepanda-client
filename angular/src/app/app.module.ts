import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {Dashboardv1Component} from './dashboardv1/dashboardv1.component';
import {Dashboardv2Component} from './dashboardv2/dashboardv2.component';
import {Dashboardv3Component} from './dashboardv3/dashboardv3.component';
import {AccordionComponent} from './ui-elements/accordion/accordion.component';
import { AlertsComponent } from './ui-elements/alerts/alerts.component';
import { ButtonsComponent } from './ui-elements/buttons/buttons.component';
import { CardsComponent } from './ui-elements/cards/cards.component';
import { FormsComponent } from './ui-elements/forms/forms.component';
import { FormLayoutsComponent } from './ui-elements/form-layouts/form-layouts.component';
import { GalleryComponent } from './ui-elements/gallery/gallery.component';
import { ImagesComponent } from './ui-elements/images/images.component';
import { ListGroupComponent } from './ui-elements/list-group/list-group.component';
import { MediaObjectComponent } from './ui-elements/media-object/media-object.component';
import { ModalComponent } from './ui-elements/modal/modal.component';
import { PaginationComponent } from './ui-elements/pagination/pagination.component';
import { PillsComponent } from './ui-elements/pills/pills.component';
import { ProgressBarsComponent } from './ui-elements/progress-bars/progress-bars.component';
import { StepsComponent } from './ui-elements/steps/steps.component';
import { TablesComponent } from './ui-elements/tables/tables.component';
import { UsersComponent } from './ui-elements/users/users.component';
import { UserProfileComponent } from './essentials/userprofile/userprofile.component';
import { AccountComponent } from './ui-elements/account/account.component';
import { TabsComponent } from './ui-elements/tabs/tabs.component';
import { ToastNotificationComponent } from './ui-elements/toast-notification/toast-notification.component';
import { SweetAlertComponent } from './ui-elements/sweet-alert/sweet-alert.component';
import { TooltipsComponent } from './ui-elements/tooltips/tooltips.component';
import { TypographyComponent } from './ui-elements/typography/typography.component';

import { Sidebarv1Component } from './essentials/layout/sidebarv1/sidebarv1.component';
import { Sidebarv2Component } from './essentials/layout/sidebarv2/sidebarv2.component';
import { WithoutsidebarComponent } from './essentials/layout/withoutsidebar/withoutsidebar.component';
import { WithtopbarComponent } from './essentials/layout/withtopbar/withtopbar.component';
import { DarkfooterComponent } from './essentials/layout/darkfooter/darkfooter.component';
import { LightfooterComponent } from './essentials/layout/lightfooter/lightfooter.component';
import { StarterPageComponent } from './essentials/starter-page/starter-page.component';
import { Loginv1Component } from './essentials/login/loginv1/loginv1.component';
import { Loginv2Component } from './essentials/login/loginv2/loginv2.component';
import { Registrationv1Component } from './essentials/registration/registrationv1/registrationv1.component';
import { Registrationv2Component } from './essentials/registration/registrationv2/registrationv2.component';
import { ForgotPasswordComponent } from './essentials/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './essentials/reset-password/reset-password.component';
import { LockScreenComponent } from './essentials/lock-screen/lock-screen.component';
import { FouroffourComponent } from './essentials/errorpages/fouroffour/fouroffour.component';
import { FivehundredComponent } from './essentials/errorpages/fivehundred/fivehundred.component';
import { FivezerothreeComponent } from './essentials/errorpages/fivezerothree/fivezerothree.component';
import { Cookiev1Component } from './essentials/cookie/cookiev1/cookiev1.component';
import { Cookiev2Component } from './essentials/cookie/cookiev2/cookiev2.component';
import { ChatComponent } from './apps/chat/chat.component';
import { ShopgridComponent } from './apps/ecommerce/shopgrid/shopgrid.component';
import { ShoplistComponent } from './apps/ecommerce/shoplist/shoplist.component';
import { ShopnosidebarComponent } from './apps/ecommerce/shopnosidebar/shopnosidebar.component';
import { SingleproductComponent } from './apps/ecommerce/singleproduct/singleproduct.component';
import { Contactv1Component } from './apps/contact/contactv1/contactv1.component';
import { Contactv2Component } from './apps/contact/contactv2/contactv2.component';
import { CalendarComponent } from './apps/calendar/calendar.component';
import { FilemanagerComponent } from './apps/filemanager/filemanager.component';
import { EmailComponent } from './apps/email/email.component';
import { PricingtableComponent } from './apps/pricingtable/pricingtable.component';
import { FormelementsComponent } from './forms/formelements/formelements.component';
import { FormvalidationComponent } from './forms/formvalidation/formvalidation.component';
import { DatepickerComponent } from './forms/formcomponents/datepicker/datepicker.component';
import { TimepickerComponent } from './forms/formcomponents/timepicker/timepicker.component';
import { Select2Component } from './forms/formcomponents/select2/select2.component';
import { ClipboardComponent } from './forms/formcomponents/clipboard/clipboard.component';
import { SessionComponent } from './forms/formcomponents/session/session.component';
import { CkeditorComponent } from './forms/formcomponents/ckeditor/ckeditor.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { SearchresultsComponent } from './pages/searchresults/searchresults.component';
import { HelpComponent } from './pages/help/help.component';
import { ComingsoonComponent } from './pages/comingsoon/comingsoon.component';
import { ProfileComponent } from './essentials/profile/profile.component';
import { FormlayoutComponent } from './forms/formlayout/formlayout.component';
import { UserService } from './ui-elements/users/users.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        Dashboardv1Component,
        Dashboardv2Component,
        Dashboardv3Component,
        AccordionComponent,
        AlertsComponent,
        ButtonsComponent,
        CardsComponent,
        FormsComponent,
        FormLayoutsComponent,
        GalleryComponent,
        ImagesComponent,
        ListGroupComponent,
        MediaObjectComponent,
        ModalComponent,
        PaginationComponent,
        PillsComponent,
        ProgressBarsComponent,
        StepsComponent,
        TablesComponent,
		UsersComponent,
		UserProfileComponent,
		AccountComponent,
        TabsComponent,
        ToastNotificationComponent,
        SweetAlertComponent,
        TooltipsComponent,
        TypographyComponent,
        Sidebarv1Component,
        Sidebarv2Component,
        WithoutsidebarComponent,
        WithtopbarComponent,
        DarkfooterComponent,
        LightfooterComponent,
        StarterPageComponent,
        Loginv1Component,
        Loginv2Component,
        Registrationv1Component,
        Registrationv2Component,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        LockScreenComponent,
        FouroffourComponent,
        FivehundredComponent,
        FivezerothreeComponent,
        Cookiev1Component,
        Cookiev2Component,
        ChatComponent,
        ShopgridComponent,
        ShoplistComponent,
        ShopnosidebarComponent,
        SingleproductComponent,
        Contactv1Component,
        Contactv2Component,
        CalendarComponent,
        FilemanagerComponent,
        EmailComponent,
        PricingtableComponent,
        FormelementsComponent,
        FormvalidationComponent,
        DatepickerComponent,
        TimepickerComponent,
        Select2Component,
        ClipboardComponent,
        SessionComponent,
        CkeditorComponent,
        LandingpageComponent,
        SearchresultsComponent,
        HelpComponent,
        ComingsoonComponent,
        ProfileComponent,
        FormlayoutComponent
    ],
    imports: [
        BrowserModule,
		FormsModule,
		ReactiveFormsModule,
        AppRoutingModule,
        ChartsModule,
		HttpClientModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

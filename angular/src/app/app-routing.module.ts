import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Dashboardv1Component} from './dashboardv1/dashboardv1.component';
import {Dashboardv2Component} from './dashboardv2/dashboardv2.component';
import {Dashboardv3Component} from './dashboardv3/dashboardv3.component';
import {AccordionComponent} from './ui-elements/accordion/accordion.component';
import {AlertsComponent} from './ui-elements/alerts/alerts.component';
import {ButtonsComponent} from './ui-elements/buttons/buttons.component';
import {CardsComponent} from './ui-elements/cards/cards.component';
import {FormsComponent} from './ui-elements/forms/forms.component';
import {FormLayoutsComponent} from './ui-elements/form-layouts/form-layouts.component';
import {GalleryComponent} from './ui-elements/gallery/gallery.component';
import {ImagesComponent} from './ui-elements/images/images.component';
import {ListGroupComponent} from './ui-elements/list-group/list-group.component';
import {MediaObjectComponent} from './ui-elements/media-object/media-object.component';
import {ModalComponent} from './ui-elements/modal/modal.component';
import {PaginationComponent} from './ui-elements/pagination/pagination.component';
import {PillsComponent} from './ui-elements/pills/pills.component';
import {ProgressBarsComponent} from './ui-elements/progress-bars/progress-bars.component';
import {StepsComponent} from './ui-elements/steps/steps.component';
import {TablesComponent} from './ui-elements/tables/tables.component';
import {UsersComponent} from './ui-elements/users/users.component';
import {UserProfileComponent} from './essentials/userprofile/userprofile.component';
import {AccountComponent} from './ui-elements/account/account.component';
import {TabsComponent} from './ui-elements/tabs/tabs.component';
import {ToastNotificationComponent} from './ui-elements/toast-notification/toast-notification.component';
import {SweetAlertComponent} from './ui-elements/sweet-alert/sweet-alert.component';
import {TooltipsComponent} from './ui-elements/tooltips/tooltips.component';
import {TypographyComponent} from './ui-elements/typography/typography.component';
import {Sidebarv1Component} from './essentials/layout/sidebarv1/sidebarv1.component';
import {Sidebarv2Component} from './essentials/layout/sidebarv2/sidebarv2.component';
import {WithoutsidebarComponent} from './essentials/layout/withoutsidebar/withoutsidebar.component';
import {WithtopbarComponent} from './essentials/layout/withtopbar/withtopbar.component';
import {DarkfooterComponent} from './essentials/layout/darkfooter/darkfooter.component';
import {LightfooterComponent} from './essentials/layout/lightfooter/lightfooter.component';
import {StarterPageComponent} from './essentials/starter-page/starter-page.component';
import {Loginv1Component} from './essentials/login/loginv1/loginv1.component';
import {Loginv2Component} from './essentials/login/loginv2/loginv2.component';
import {Registrationv1Component} from './essentials/registration/registrationv1/registrationv1.component';
import {Registrationv2Component} from './essentials/registration/registrationv2/registrationv2.component';
import {ForgotPasswordComponent} from './essentials/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './essentials/reset-password/reset-password.component';
import {LockScreenComponent} from './essentials/lock-screen/lock-screen.component';
import {FouroffourComponent} from './essentials/errorpages/fouroffour/fouroffour.component';
import {FivehundredComponent} from './essentials/errorpages/fivehundred/fivehundred.component';
import {FivezerothreeComponent} from './essentials/errorpages/fivezerothree/fivezerothree.component';
import {Cookiev1Component} from './essentials/cookie/cookiev1/cookiev1.component';
import {Cookiev2Component} from './essentials/cookie/cookiev2/cookiev2.component';
import {ChatComponent} from './apps/chat/chat.component';
import {ShopgridComponent} from './apps/ecommerce/shopgrid/shopgrid.component';
import {ShoplistComponent} from './apps/ecommerce/shoplist/shoplist.component';
import {ShopnosidebarComponent} from './apps/ecommerce/shopnosidebar/shopnosidebar.component';
import {SingleproductComponent} from './apps/ecommerce/singleproduct/singleproduct.component';
import {Contactv1Component} from './apps/contact/contactv1/contactv1.component';
import {Contactv2Component} from './apps/contact/contactv2/contactv2.component';
import {CalendarComponent} from './apps/calendar/calendar.component';
import {FilemanagerComponent} from './apps/filemanager/filemanager.component';
import {EmailComponent} from './apps/email/email.component';
import {PricingtableComponent} from './apps/pricingtable/pricingtable.component';
import {FormelementsComponent} from './forms/formelements/formelements.component';
import {FormvalidationComponent} from './forms/formvalidation/formvalidation.component';
import {DatepickerComponent} from './forms/formcomponents/datepicker/datepicker.component';
import {TimepickerComponent} from './forms/formcomponents/timepicker/timepicker.component';
import {Select2Component} from './forms/formcomponents/select2/select2.component';
import {ClipboardComponent} from './forms/formcomponents/clipboard/clipboard.component';
import {SessionComponent} from './forms/formcomponents/session/session.component';
import {CkeditorComponent} from './forms/formcomponents/ckeditor/ckeditor.component';
import {LandingpageComponent} from './pages/landingpage/landingpage.component';
import {SearchresultsComponent} from './pages/searchresults/searchresults.component';
import {HelpComponent} from './pages/help/help.component';
import {ComingsoonComponent} from './pages/comingsoon/comingsoon.component';
import { ProfileComponent } from './essentials/profile/profile.component';
import { FormlayoutComponent } from './forms/formlayout/formlayout.component';

const routes: Routes = [
    {
        path: '',
        component: Dashboardv1Component
    },
    {
        path: 'dashboardv1',
        component: Dashboardv1Component
    },
    {
        path: 'dashboardv2',
        component: Dashboardv2Component
    },
    {
        path: 'dashboardv3',
        component: Dashboardv3Component
    },
    {
        path: 'accordion',
        component: AccordionComponent
    },
    {
        path: 'alerts',
        component: AlertsComponent
    },
    {
        path: 'buttons',
        component: ButtonsComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'formLayouts',
        component: FormLayoutsComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'images',
        component: ImagesComponent
    },
    {
        path: 'listGroup',
        component: ListGroupComponent
    },
    {
        path: 'mediaObject',
        component: MediaObjectComponent
    },
    {
        path: 'modals',
        component: ModalComponent
    },
    {
        path: 'pagination',
        component: PaginationComponent
    },
    {
        path: 'pills',
        component: PillsComponent
    },
    {
        path: 'progressBars',
        component: ProgressBarsComponent
    },
    {
        path: 'steps',
        component: StepsComponent
    },
    {
        path: 'tables',
        component: TablesComponent
    },
	{
        path: 'users',
        component: UsersComponent
    },
	{
        path: 'account',
        component: AccountComponent
    },
	{
        path: 'tabs',
        component: TabsComponent
    },
    {
        path: 'toastNotification',
        component: ToastNotificationComponent
    },
    {
        path: 'sweetAlert',
        component: SweetAlertComponent
    },
    {
        path: 'tooltips',
        component: TooltipsComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'sidebarv1',
        component: Sidebarv1Component
    },
    {
        path: 'sidebarv2',
        component: Sidebarv2Component
    },
    {
        path: 'withoutsidebar',
        component: WithoutsidebarComponent
    },
    {
        path: 'withtopbar',
        component: WithtopbarComponent
    },
    {
        path: 'darkfooter',
        component: DarkfooterComponent
    },
    {
        path: 'lightfooter',
        component: LightfooterComponent
    },
    {
        path: 'starterPage',
        component: StarterPageComponent
    },
    {
        path: 'loginv1',
        component: Loginv1Component
    },
    {
        path: 'loginv2',
        component: Loginv2Component
    },
    {
        path: 'registrationv1',
        component: Registrationv1Component
    },
    {
        path: 'registrationv2',
        component: Registrationv2Component
    },
    {
        path: 'forgotPassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'resetPassword',
        component: ResetPasswordComponent
    },
    {
        path: 'lockScreen',
        component: LockScreenComponent
    },
    {
        path: 'fouroffour',
        component: FouroffourComponent
    },
    {
        path: 'fivehundred',
        component: FivehundredComponent
    },
    {
        path: 'fivezerothree',
        component: FivezerothreeComponent
    },
    {
        path: 'cookiev1',
        component: Cookiev1Component
    },
    {
        path: 'cookiev2',
        component: Cookiev2Component
    },
    {
        path: 'chat',
        component: ChatComponent
    },
    {
        path: 'shopgrid',
        component: ShopgridComponent
    },
    {
        path: 'shoplist',
        component: ShoplistComponent
    },
    {
        path: 'shopnosidebar',
        component: ShopnosidebarComponent
    },
    {
        path: 'singleproduct',
        component: SingleproductComponent
    },
    {
        path: 'contactv1',
        component: Contactv1Component
    },
    {
        path: 'contactv2',
        component: Contactv2Component
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
    {
        path: 'filemanager',
        component: FilemanagerComponent
    },
    {
        path: 'email',
        component: EmailComponent
    },
    {
        path: 'pricingtable',
        component: PricingtableComponent
    },
    {
        path: 'formelements',
        component: FormelementsComponent
    },
    {
        path: 'formvalidation',
        component: FormvalidationComponent
    },
    {
        path: 'datepicker',
        component: DatepickerComponent
    },
    {
        path: 'timepicker',
        component: TimepickerComponent
    },
    {
        path: 'select2',
        component: Select2Component
    },
    {
        path: 'clipboard',
        component: ClipboardComponent
    },
    {
        path: 'session',
        component: SessionComponent
    },
    {
        path: 'ckeditor',
        component: CkeditorComponent
    },
    {
        path: 'landingpage',
        component: LandingpageComponent
    },
    {
        path: 'searchresults',
        component: SearchresultsComponent
    },
    {
        path: 'help',
        component: HelpComponent
    },
    {
        path: 'comingsoon',
        component: ComingsoonComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'formlayout',
        component: FormlayoutComponent
    },
    {
        path: 'userprofile',
        component: UserProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { TranslateModule } from '@ngx-translate/core';
import {AuthService} from "./auth.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'reset'
    },
    {
      path     : 'reset',
      component: AppComponent
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        TranslateModule.forRoot(),
       // FuseMainModule,
       // FuseSampleModule
    ],
    providers   : [
        FuseSplashScreenService,
        FuseConfigService,
        AuthService,
		{provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{


}

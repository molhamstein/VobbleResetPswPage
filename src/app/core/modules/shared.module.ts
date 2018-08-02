import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


// import { FusePerfectScrollbarDirective } from '../directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
// import { FuseIfOnDomDirective } from '../directives/fuse-if-on-dom/fuse-if-on-dom.directive';
import { FuseTranslationLoaderService } from '../services/translation-loader.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations   : [


    ],
    imports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,

        ReactiveFormsModule,


        TranslateModule
    ],
    entryComponents: [

    ],
    providers      : [

        FuseTranslationLoaderService
    ]
})

export class SharedModule
{

}

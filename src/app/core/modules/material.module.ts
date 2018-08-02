import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatTooltipModule
    ],
    exports: [
     //   MatAutocompleteModule,
        MatButtonModule,
     //   MatButtonToggleModule,
        MatCardModule,
      //  MatCheckboxModule,
      //  MatChipsModule,
      //  MatDatepickerModule,
      //  MatDialogModule,
      //  MatExpansionModule,
     //   MatGridListModule,
        MatIconModule,
        MatInputModule,
     //   MatListModule,
     //   MatMenuModule,
     //   MatNativeDateModule,
    //    MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
    //    MatRadioModule,
        MatRippleModule,
   //     MatSelectModule,
        MatSidenavModule,
     //   MatSliderModule,
     //   MatSlideToggleModule,
        MatSnackBarModule,
     //   MatStepperModule,
     //   MatSortModule,
     //   MatTableModule,
     //   MatTabsModule,
    //    MatToolbarModule,
        MatTooltipModule,
     //   CdkTableModule
    ]
})
export class MaterialModule
{

}

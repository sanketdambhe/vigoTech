import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatIconModule,
         MatCardModule,
         MatSidenavModule,
         MatDividerModule,
         MatInputModule,
         MatOptionModule,
         MatSelectModule,
         MatCheckboxModule,
         MatDialogModule
      
        } from '@angular/material';

        import {ReactiveFormsModule} from '@angular/forms';
        
        

         


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule
  ],
})
export class MaterialModModule { }

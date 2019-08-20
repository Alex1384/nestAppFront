import { NgModule } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatProgressBarModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatProgressBarModule,
  MatIconModule,
  MatTooltipModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule
]
})
export class MaterialModule { }

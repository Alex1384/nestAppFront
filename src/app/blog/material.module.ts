import { NgModule } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatProgressBarModule
  ],
  exports: [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatProgressBarModule
]
})
export class MaterialModule { }

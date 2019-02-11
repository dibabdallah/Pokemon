import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule , MatIconModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,

    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule, MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule, MatIconModule, MatInputModule
  ],
})
export class Material { }

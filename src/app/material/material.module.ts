import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
const Modules = [MatButtonModule,MatFormFieldModule, MatIconModule, MatInputModule];

@NgModule({
  imports: [Modules],
  exports: [Modules],
})
export class MaterialModule {}

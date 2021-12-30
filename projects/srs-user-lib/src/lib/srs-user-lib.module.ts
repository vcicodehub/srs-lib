import { NgModule } from '@angular/core';
import { SrsUserLibComponent } from './srs-user-lib.component';
import { SrsUserLibService } from './srs-user-lib.service';

@NgModule({
  declarations: [
    SrsUserLibComponent
  ],
  imports: [
  ],
  exports: [
    SrsUserLibComponent
  ],
  providers: [
    SrsUserLibService
  ]
})
export class SrsUserLibModule { }

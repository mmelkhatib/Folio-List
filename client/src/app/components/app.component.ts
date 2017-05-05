import { Component } from '@angular/core';
import { FolioService } from '../services/folio.service';

@Component({
  selector: 'my-app',
  template: `<folio-list></folio-list>`,
  providers: [FolioService]
})
export class AppComponent  { name = 'The Folio List'; }

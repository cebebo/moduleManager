import { Component, inject } from '@angular/core';
import { CreateNewComponent } from "./create-new/create-new.component";
import { SettingsService } from '../../settings.service';

@Component({
  selector: 'app-create-module',
  standalone: true,
  imports: [CreateNewComponent, CreateNewComponent],
  templateUrl: './create-module.component.html',
  styleUrl: './create-module.component.scss'
})
export class CreateModuleComponent {

new = inject(SettingsService);

createNewList(bol:boolean) {
  this.new.createNew = bol;  
}

}

import { Component } from '@angular/core';
import { CreateNewComponent } from "./create-new/create-new.component";

@Component({
  selector: 'app-create-module',
  standalone: true,
  imports: [CreateNewComponent, CreateNewComponent],
  templateUrl: './create-module.component.html',
  styleUrl: './create-module.component.scss'
})
export class CreateModuleComponent {

createNew = false;

}

import { Component, inject } from '@angular/core';
import { SettingsService } from '../../../settings.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-new',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './create-new.component.html',
  styleUrl: './create-new.component.scss'
})
export class CreateNewComponent {

  new = inject(SettingsService);

generateID() {
  this.new.createdID = this.createID();
  this.new.createID = true;
}

createID() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let code = "";
  for (let i = 0; i < 3; i++) {
    code += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  for (let i = 0; i < 2; i++) {
    code += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return code;
}

generateList() {
  
}

}

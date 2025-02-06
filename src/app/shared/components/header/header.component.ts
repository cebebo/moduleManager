import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateNewComponent } from "../../../components/create-module/create-new/create-new.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CreateNewComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

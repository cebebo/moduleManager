import { Component, inject } from '@angular/core';
import { SettingsService } from '../../../settings.service';

@Component({
  selector: 'app-add-modules',
  standalone: true,
  imports: [],
  templateUrl: './add-modules.component.html',
  styleUrl: './add-modules.component.scss'
})
export class AddModulesComponent {

data = inject(SettingsService);

}

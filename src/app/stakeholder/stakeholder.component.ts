import { Component } from '@angular/core';
import {
  faGlobe,
  faInfoCircle,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faLine } from '@fortawesome/free-brands-svg-icons';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-stakeholder',
  templateUrl: './stakeholder.component.html',
  styleUrls: ['./stakeholder.component.scss'],
})
export class StakeholderComponent {
 

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}

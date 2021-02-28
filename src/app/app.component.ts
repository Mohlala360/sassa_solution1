import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Application', url: '/folder/register/register', icon: 'document' },
    { title: 'Status', url: '/folder/Status/status', icon: 'heart' },
    { title: 'Appointments', url: '/folder/Appointment/appointments', icon: 'timer' },
    { title: 'Enquiries', url: '/folder/Enquiries/enguiries', icon: 'bulb' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

import { Component } from '@angular/core';
import { MailComponent } from "../mail/mail.component";

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [MailComponent],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent {

}

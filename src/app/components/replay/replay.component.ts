// replay.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-replay',
  standalone: true,
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class ReplayComponent {
  replyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.replyForm = this.fb.group({
      to: ['alice@example.com', [Validators.required, Validators.email]],
      cc: ['bob@example.com, charlie@example.com'],
      subject: ['Re: Meeting Schedule', Validators.required],
      reply: [
        `Hi Alice,\n\nThank you for your email. I am available for the meeting at the suggested time.\n\nBest regards,\nJohn`,
        Validators.required
      ]
    });
  }

  onSubmitReply() {
    if (this.replyForm.valid) {
      console.log('Reply sent with data:', this.replyForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onSubmitReplyAll() {
    if (this.replyForm.valid) {
      console.log('Reply All sent with data:', this.replyForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
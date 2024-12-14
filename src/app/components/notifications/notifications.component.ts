import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications = [
    {
      icon: 'https://storage.googleapis.com/a1aa/image/bFgR7ccLle2NI6eB3iDvBvc4fwVQH8uw5mxKKCJwJ2fZeSUfE.jpg',
      message: 'You have a new email from',
      user: 'Alice',
      time: '5 minutes ago',
    },
    {
      icon: 'https://storage.googleapis.com/a1aa/image/pomVqybbmrZXABTWE3AiSuAZ5WjBRuu3G4ArnOT7zMt4loeJA.jpg',
      message: 'Upcoming meeting with',
      user: 'Bob',
      time: '30 minutes ago',
    },
    {
      icon: 'https://storage.googleapis.com/a1aa/image/ZN9AfXaeaAmC2UBlifu9eHQiNXdffGMBKoDZWZGlOYsH5loeJA.jpg',
      message: 'New comment on your post from',
      user: 'Charlie',
      time: '1 hour ago',
    },
    {
      icon: 'https://storage.googleapis.com/a1aa/image/HFOIcQmKgBp3ER6YxzVriKLf0JoTEZDwijGt8ONcfRBlXi6TA.jpg',
      message: 'You have a new follower:',
      user: 'Dave',
      time: '2 hours ago',
    },
    {
      icon: 'https://storage.googleapis.com/a1aa/image/TeCfqKB4Vxn4AEgn6qfuDNt7E28cysdvb7YMFbeaEJcNeSUfE.jpg',
      message: 'System update available',
      user: '',
      time: '3 hours ago',
    },
  ];

  markAllAsRead() {
    console.log('All notifications marked as read.');
  }

  deleteNotification(index: number) {
    this.notifications.splice(index, 1);
    console.log('Notification deleted:', index);
  }
}
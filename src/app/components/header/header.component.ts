import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../services/profile-picture.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  profilePicture!: string;
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.profilePicture$.subscribe((pictureUrl) => {
      this.profilePicture = pictureUrl; // Update the profile picture in the header
    });
  }
}

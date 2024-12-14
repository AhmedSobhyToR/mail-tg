// profile.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile-picture.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileForm: FormGroup;
  profilePicture!: string;
  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePicture: 'https://storage.googleapis.com/a1aa/image/75ERZTVjeZ0ceU3nZTpileEmdwHe332yn642ywNZyMTaeRUfE.jpg',
  };

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    this.profileForm = this.fb.group({
      name: [this.user.name, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      profilePicture: [null]
    });
  }

  ngOnInit() {
    this.profileService.profilePicture$.subscribe((pictureUrl) => {
      this.profilePicture = pictureUrl;
    });
  }

  saveChanges() {
    if (this.profileForm.valid) {
      console.log('Updated Profile:', this.profileForm.value);
      this.user.name = this.profileForm.value.name;
      this.user.email = this.profileForm.value.email;
      // Assume profile picture upload handled externally
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const profilePictureUrl = reader.result as string;
        this.profileService.setProfilePicture(profilePictureUrl); // Update profile picture in the service
      };
      reader.readAsDataURL(file);
    }
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profilePictureSource = new BehaviorSubject<string>('https://storage.googleapis.com/a1aa/image/75ERZTVjeZ0ceU3nZTpileEmdwHe332yn642ywNZyMTaeRUfE.jpg');
  profilePicture$ = this.profilePictureSource.asObservable();

  setProfilePicture(pictureUrl: string) {
    this.profilePictureSource.next(pictureUrl);
  }
}

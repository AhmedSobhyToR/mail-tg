import { Routes } from '@angular/router';
import { InboxComponent } from './components/inbox/inbox.component';
import { SentComponent } from './components/sent/sent.component';
import { TrashComponent } from './components/trash/trash.component';
import { StarredComponent } from './components/starred/starred.component';
import { ReplayComponent } from './components/replay/replay.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [

    {path: 'inbox', component: InboxComponent},
    {path: 'starred', component: StarredComponent},
    {path: 'sent', component: SentComponent},
    {path: 'trash', component: TrashComponent},
    {path: 'replay', component: ReplayComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'profile', component: ProfileComponent},

    {path: '**', component: InboxComponent}


];

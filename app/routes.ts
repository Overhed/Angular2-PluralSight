import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventsListResolver,
} from './events/index';


export const appRoutes = [
    { 
        path: 'events', 
        component: EventsListComponent, 
        resolve: { events: EventsListResolver } 
    },
    { 
        path: 'events/new', 
        component: CreateEventComponent, 
        canDeactivate: ['canDeactivateCreateEvent'] 
    },
    { 
        path: 'events/:id', 
        component: EventDetailsComponent, 
        canActivate: [EventRouteActivator] 
    },    
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]
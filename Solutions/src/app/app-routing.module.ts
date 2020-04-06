import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { StudyComponent } from './study/study.component';
import { EventSolComponent } from './event-sol/event-sol.component';


const routes:Routes=[
    {
        path:'study', component: StudyComponent
    },
    {
        path: "event-sol",component: EventSolComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
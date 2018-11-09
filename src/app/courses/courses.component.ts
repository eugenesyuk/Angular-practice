import { Component } from '@angular/core';
import { CoursesServise } from '../services/courses.service';

@Component({
    selector: 'app-course',
    template: `
        <h2 class="mx-2 my-2">{{title}}</h2>
        <ul class="mx-2 my-2">
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})

export class CoursesComponent {
    title = 'List of courses';
    courses;

    constructor(service: CoursesServise) {
        this.courses = service.getCourses();
    }
}
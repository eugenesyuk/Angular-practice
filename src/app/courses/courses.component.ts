import { Component } from '@angular/core';
import { CoursesServise } from '../services/courses.service';

@Component({
    selector: 'app-course',
    template: `
        <h2>{{title}}</h2>
        <ul>
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
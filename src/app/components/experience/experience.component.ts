import { Component } from '@angular/core';
import { ExperienceDetail } from './experienceDetail';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experienceDetailsFrontend : ExperienceDetail[] = [
    {
      name : 'HTML',
      level: 'Intermediate'
    },
    {
      name : 'CSS',
      level: 'Intermediate'
    },
    {
      name : 'JavaScript',
      level: 'Intermediate'
    },
    {
      name : 'Angular',
      level: 'Intermediate'
    },
    {
      name : 'Angular Material',
      level: 'Beginner'
    }
  ]

  experienceDetailsBackend : ExperienceDetail[] = [
    {
      name : 'Java',
      level: 'Intermediate'
    },
    {
      name : 'Spring',
      level: 'Intermediate'
    },
    {
      name : 'Spring Boot',
      level: 'Intermediate'
    },
    {
      name : 'MicroServices',
      level: 'Beginner'
    },
    {
      name : 'JPA',
      level: 'Intermediate'
    },
    {
      name : 'Oracle',
      level: 'Intermediate'
    }
  ]

}

import { Component } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects : Project[] = [
    {
      name : 'E-Kart',
      description : [
        'E-Kart is a web application which primarily focuses on depicting the advantages of e-commerce over traditional shopping.',
        'Developed during Project Gladiator Phase of LBJ in LTIMindtree.',
        'Act as a team lead and handled daily scrum tasks.',
        'Worked on rest endpoints using Spring and static validation in Angular'
      ],
      tools:'Angular, Spring Boot, JPA, Maven',
      link: 'https://github.com/abhij33t-9120/ProjectGladiator'
    },
    {
      name : 'GCMS(Client Project)',
      description : [
        'GCMS is a Global Cash Management System used by other banking systems to create, process and send SWIFT messages to other systems mainly used for international transactions.',
        'Unit tested the methods using Mockito and Junit5',
        'Created an automation using FAST2.0 framework to validate fields in the pipeline.',
        'Worked with the architect team to fix vulnerable dependencies.',
        'Received appreciation from client for single-handedly migrating API Gateway Microservice from Zuul to Spring Cloud',
        'Worked using Spring WebFlux and understand the concepts of reactive programming.'
      ],
      tools: 'Angular, Spring Boot, Maven, Oracle, Jira, Bitbucket'
    },
    {
      name : 'My Portfolio',
      description:[
        'Standalone project of my portfolio using Angular.',
        'A simple yet dynamically ajusted for responsiveness in tablet and mobile devices.',
        'Depicted usages of various directives like ngIf, ngFor',
        'Depicted static Validation of forms in Angular',
        'Use of complex components like modals'
      ],
      tools: 'Angular, Node, EmailJs'
    }
  ]
}

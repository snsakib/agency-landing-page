import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {
  portfolios = [
    {
      category: 'Categoría',
      imgSrc: 'assets/images/portafolio/case-1.png',
      imgAlt: '#',
      title: 'Nombre del caso de éxito 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper libero et tempus bibendum.'
    },
    {
      category: 'Categoría',
      imgSrc: 'assets/images/portafolio/case-2.png',
      imgAlt: '#',
      title: 'Nombre del caso de éxito 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper libero et tempus bibendum.'
    },
    {
      category: 'Categoría',
      imgSrc: 'assets/images/portafolio/case-3.png',
      imgAlt: '#',
      title: 'Nombre del caso de éxito 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper libero et tempus bibendum.'
    },
    {
      category: 'Categoría',
      imgSrc: 'assets/images/portafolio/case-4.png',
      imgAlt: '#',
      title: 'Nombre del caso de éxito 4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper libero et tempus bibendum.'
    },
    {
      category: 'Categoría',
      imgSrc: 'assets/images/portafolio/case-5.png',
      imgAlt: '#',
      title: 'Nombre del caso de éxito 5',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper libero et tempus bibendum.'
    },
    {
      category: 'Categoría',
      imgSrc: 'assets/images/portafolio/case-6.png',
      imgAlt: '#',
      title: 'Nombre del caso de éxito 6',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper libero et tempus bibendum.'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

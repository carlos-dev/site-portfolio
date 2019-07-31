import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import $ from 'jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
    // ctx = document.getElementById('myChart');
    // ctx2 = this.ctx.getContext('2d');
    // ctx3 = $('#myChart');
    // ctx4 = 'myChart';

  constructor() { }

  ngOnInit() {
    this.graphic();
  }

  graphic() {
    let ctx = document.getElementById('skills-graphic');
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.animation.duration = 3000;

    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'Sass', 'Javascript', 'Jquery', 'Angular', 'Typescript', 'React', 'React Native'],
            datasets: [{
                label: 'Nível',
                data: [90, 85, 60, 80, 80, 50, 45, 40, 30],
                backgroundColor: [
                    'rgba(228, 77, 38, 0.5)',
                    'rgba(80, 173, 234, 0.5)',
                    'rgba(205, 103, 153, 0.5)',
                    'rgba(247, 223, 30, 0.5)',
                    'rgba(29, 117, 167, 0.5)',
                    'rgba(176, 45, 48, 0.5)',
                    'rgba(0, 119, 198, 0.5)',
                    'rgba(94, 212, 244, 0.5)',
                    'rgba(200, 209, 218, 0.5)'
                ],
                borderColor: [
                  'rgba(228, 77, 38, 1)',
                  'rgba(80, 173, 234, 1)',
                  'rgba(205, 103, 153, 1)',
                  'rgba(247, 223, 30, 1)',
                  'rgba(29, 117, 167, 1)',
                  'rgba(176, 45, 48, 1)',
                  'rgba(0, 119, 198, 1)',
                  'rgba(94, 212, 244, 1)',
                  'rgba(200, 209, 218, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            
        }
    });
  }

}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-estatistica',
  templateUrl: 'estatistica.html',
})
export class EstatisticaPage {

  @ViewChild('chartPieCanvas') chartPieCanvas;
  @ViewChild('chartBarSexo') chartBarSexo;
  @ViewChild('chartDoughnutSexo') chartDoughnutSexo;
  @ViewChild('chartPieIdade') chartPieIdade;
  

  pieChart: any;
  barSexoChart: any;
  doughnutSexoTotal: any;
  pieIdade: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,) {

      this.presentLoadingCustom();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstatisticaPage');
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'carregando',
      duration: 3000
    });
    
    loading.onDidDismiss(() => {
      this.showPie();
      this.showBarSexo();
      this.showDoughnutTotal();
      this.showPieIdade();
    });
    loading.present();
  }

  showPie(){
    this.pieChart = new Chart(this.chartPieCanvas.nativeElement, {
			type: 'pie',
			data: {
				datasets: [{
					data: [2,4,6,8,10
					],
					backgroundColor: [
            'rgba(156, 195, 20, 1.0)',
            'rgba(176, 71, 33, 1.0)',
            'rgba(182, 46, 235, 1.0)',
            'rgba(47, 198, 67, 1.0)',
            'rgba(81, 46, 34, 1.0)'
            //'rgba(255, 159, 64, 0.2)'
        ],
					label: 'Dataset 1'
				}],
				labels: [
					'Depressão',
					'Ansiedade',
					'TDAH',
					'Disturbios Alimentares',
					'TOC'
				]
			},
			options: {
				responsive: true
			}
		});
  }

  showBarSexo(){
    var MONTHS = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
		var horizontalBarChartData = {
			labels: ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho'],
			datasets: [{
				label: 'Homem',
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				data: [10, 20, 30, 40, 50, 60, 70
				]
			}, {
				label: 'Mulher',
				backgroundColor: 'rgba(255, 0, 127, 1.0)',
				borderColor: 'rgba(255, 0, 127, 1.2)',
				data: [15, 25, 35, 45, 55, 65, 75
				]
			}]
		};
		this.barSexoChart = new Chart(this.chartBarSexo.nativeElement, {
				type: 'horizontalBar',
				data: horizontalBarChartData,
				options: {
					// Elements options apply to all of the options unless overridden in a dataset
					// In this case, we are setting the border of each horizontal bar to be 2px wide
					elements: {
						rectangle: {
							borderWidth: 2,
						}
					},
					responsive: true,
					legend: {
						position: 'right',
					},
					title: {
						display: true,
						text: 'Quantidades por mês de pacientes por genero'
					}
				}
			});
    };
    
    showDoughnutTotal(){
      this.doughnutSexoTotal = new Chart(this.chartDoughnutSexo.nativeElement, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [68, 37
            ],
            backgroundColor: [
              'rgba(41, 83, 188, 1.0)',
              'rgba(210, 105, 208, 1.0)'
            ],
            label: 'Janeiro'
          }],
          labels: [
            '1º consulta',
            'em tratamento'
          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Pacientes em:'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      });
    }

    showPieIdade(){
      this.pieIdade = new Chart(this.chartPieIdade.nativeElement, {
        type: 'pie',
        data: {
          datasets: [{
            data: [ 4, 6, 8, 10, 12, 11, 14
            ],
            backgroundColor: [
              'rgba(156, 195, 20, 1.0)',
              'rgba(176, 71, 33, 1.0)',
              'rgba(182, 46, 235, 1.0)',
              'rgba(47, 198, 67, 1.0)',
              'rgba(81, 46, 34, 1.0)',
              'rgba(164, 240, 124, 1.0)',
              'rgba(216, 66, 16, 1.0)'
          ],
            label: 'Dataset 1'
          }],
          labels: [
            '9-17 anos',
            '18-25 anos',
            '26-30 anos',
            '31-40 anos',
            '41-50 anos',
            '51-60 anos',
            'acima dos 61'
          ]
        },
        options: {
          responsive: true
        }
      });
    }
}

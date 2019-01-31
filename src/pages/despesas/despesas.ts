import { Component, ViewChild } from '@angular/core';

import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html',
})
export class DespesasPage {

  @ViewChild('chartPieFaturamento') chartPieFaturamento;
  @ViewChild('chartBarLucro') chartBarLucro;
  @ViewChild('chartDoughnutLucroMes') chartDoughnutLucroMes;
  @ViewChild('chartLineLucro') chartLineLucro;
  @ViewChild('lineDespesasMateriais') lineDespesasMateriais;

  pieChart: any;
  barLucroChart: any;
  doughnuLucroMes: any;
  lineChartLucro: any;
  lineChartDespesasMateriais: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {

      this.presentLoadingCustom();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErpPage');
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'carregando',
      duration: 3000
    });
    
    loading.onDidDismiss(() => {
      this.showPie();
      this.showBarLucro();
      this.showDoughnutLucroMes();
      this.showLineLucro();
      this.showLineDespesasMateriais();
    });
    loading.present();
  }

  showPie(){
    this.pieChart = new Chart(this.chartPieFaturamento.nativeElement, {
			type: 'pie',
			data: {
				datasets: [{
					data: [8,4,6,8,4,5,3
					],
					backgroundColor: [
            'rgba(156, 195, 20, 1.0)',
            'rgba(176, 71, 33, 1.0)',
            'rgba(182, 46, 235, 1.0)',
            'rgba(47, 198, 67, 1.0)',
            'rgba(81, 46, 34, 1.0)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 25, 0, 0.1)'
        ],
					label: 'Dataset 1'
				}],
				labels: [
					'energia',
					'agua',
					'aluguel',
					'consuta',
          'cozinha',
          'limpeza',
          'RH'
				]
			},
			options: {
				responsive: true
			}
		});
  }

  showBarLucro(){
    var MONTHS = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
		var horizontalBarChartData = {
			labels: ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho'],
			datasets: [{
				label: 'Predias',
				backgroundColor: 'rgba(182, 46, 235, 1.0)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				data: [10, 20, 30, 40, 50, 60, 70
				]
			}, {
				label: 'Materiais',
				backgroundColor: 'rgba(231, 83, 50, 1.0)',
				borderColor: 'rgba(231, 83, 50, 1.0)',
				data: [15, 25, 35, 45, 55, 65, 75
				]
			}]
		};
		this.barLucroChart = new Chart(this.chartBarLucro.nativeElement, {
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
						text: 'Predias x Materiais '
					}
				}
			});
    };

    showDoughnutLucroMes(){
      this.doughnuLucroMes = new Chart(this.chartDoughnutLucroMes.nativeElement, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [68, 37, 27
            ],
            backgroundColor: [
              'rgba(182, 46, 235, 1.0)',
              'rgba(231, 83, 50, 1.0)',
              'rgba(255, 25, 0, 0.1)'
            ],
            label: 'Lucro x Despesa x RH'
          }],
          labels: [
            'Prediais',
            'Materiais',
            'RH'
          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: '2019'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      });
    }

  //lineChart
  showLineLucro(){
    this.lineChartLucro = new Chart(this.chartLineLucro.nativeElement, {
 
      type: 'line',
      data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
          //labels: this.datas,
          datasets: [
              {
                  label: "energia",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255,99,132,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  //data:this.arrayRaiva,
                  data: [3500, 4333, 3000, 5000, 4500, 5000, 7000],
                  spanGaps: false,
              },
              {
                label: "agua",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(35,132,122,2)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  //data: this.arrayTristeza,
                  data: [1500, 1333, 2000, 2000, 2500, 3000, 2000],
                  spanGaps: false,
              },
              {
                label: "aluguel",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(255, 206, 86, 0.2)",
                  borderColor: "rgba(255, 206, 86, 1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(35,132,122,2)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [1500, 1333, 2000, 2000, 2500, 3000, 2000],
                  spanGaps: false,
              }
          ]
      }

  });

  }

  showLineDespesasMateriais(){
    this.lineChartDespesasMateriais = new Chart(this.lineDespesasMateriais.nativeElement, {
 
      type: 'line',
      data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
          //labels: this.datas,
          datasets: [
              {
                  label: "consulta",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255,99,132,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  //data:this.arrayRaiva,
                  data: [3500, 4333, 3000, 5000, 4500, 5000, 7000],
                  spanGaps: false,
              },
              {
                label: "cozinha",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(35,132,122,2)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  //data: this.arrayTristeza,
                  data: [1500, 1333, 2000, 2000, 2500, 3000, 2000],
                  spanGaps: false,
              },
              {
                label: "limpeza",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(255, 206, 86, 0.2)",
                  borderColor: "rgba(255, 206, 86, 1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(35,132,122,2)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [1500, 1333, 2000, 2000, 2500, 3000, 2000],
                  spanGaps: false,
              }
          ]
      }

  });

  }

}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Chart } from 'chart.js';



@IonicPage()
@Component({
  selector: 'page-erp',
  templateUrl: 'erp.html',
})
export class ErpPage {
  @ViewChild('chartLinePacientes') chartLinePacientes;
  @ViewChild('chartPieFaturamento') chartPieFaturamento;
  @ViewChild('chartBarLucro') chartBarLucro;
  @ViewChild('chartDoughnutLucroMes') chartDoughnutLucroMes;
  //@ViewChild('chartLineLucro') chartLineLucro;
  @ViewChild('chartLineFatura') chartLineFatura;

  pieChart: any;
  barLucroChart: any;
  doughnuLucroMes: any;
  lineChartLucro: any;
  lineChartPacientes: any;
  lineChartFatura: any;

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
      this.showLinePacientes();
      this.showPie();
      this.showBarLucro();
      this.showDoughnutLucroMes();
      //this.showLineLucro();
      //this.showLine();
    });
    loading.present();
  }

  // showLine() {
		
	// 	this.lineChartFatura = new Chart(this.chartLineFatura.nativeElement, {
  //     type: 'line',
	// 		data: {
	// 			labels: ['29/01', '30/01', '31/01', '01/02', '02/02', '03/02', '04/02'],
	// 			datasets: [{
	// 				label: 'CHRT - Chart.js Corporation',
	// 				backgroundColor: 'rgba(182, 46, 235, 1.0)',
	// 				borderColor: 'rgba(182, 46, 235, 1.0)',
	// 				data: [1500, 1750, 2000, 1450, 1100, 1000, 1580],
	// 				type: 'line',
	// 				pointRadius: 0,
	// 				fill: false,
	// 				lineTension: 0,
	// 				borderWidth: 2
	// 			}]
  //     },
  //     options: {
	// 			scales: {
	// 				xAxes: [{
	// 					type: 'time',
	// 					distribution: 'series',
	// 					ticks: {
	// 						source: 'labels'
	// 					}
	// 				}],
	// 				yAxes: [{
	// 					scaleLabel: {
	// 						display: true,
	// 						labelString: 'Closing price ($)'
	// 					}
	// 				}]
	// 			}
	// 		}
  //   });
		
  // }

  showPie(){
    this.pieChart = new Chart(this.chartPieFaturamento.nativeElement, {
			type: 'pie',
			data: {
				datasets: [{
					data: [8,4,6,8,4
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
					'Planos',
					'Dinheiro',
					'Credito',
					'Debito',
					'Cheque'
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
				label: 'Receitas',
				backgroundColor: 'rgba(182, 46, 235, 1.0)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1,
				data: [1000, 2000, 3000, 4000, 5000, 6000, 7000
				]
			}, {
				label: 'Despesas',
				backgroundColor: 'rgba(231, 83, 50, 1.0)',
				borderColor: 'rgba(231, 83, 50, 1.0)',
				data: [150, 250, 305, 450, 550, 650, 750
				]
			}]
		};
		this.barLucroChart = new Chart(this.chartBarLucro.nativeElement, {
				type: 'horizontalBar',
				data: horizontalBarChartData,
				options: {
					// Elements options apply to all of the options unless overridden in a dataset
          // In this case, we are setting the border of each horizontal bar to be 2px wide
          scales: {
            xAxes: [{
              ticks: {
                userCallback: function(tick) {
                  return 'R$' +  tick.toString() + ',00'
                }
              }
            }]
          },
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
						text: 'Quantidades de receitas x despesas'
					}
				}
			});
    };

    showDoughnutLucroMes(){
      this.doughnuLucroMes = new Chart(this.chartDoughnutLucroMes.nativeElement, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [68, 37, 21
            ],
            backgroundColor: [
              'rgba(182, 46, 235, 1.0)',
              'rgba(231, 83, 50, 1.0)',
              'rgba(0, 0, 0, 1.0)'
            ],
            label: 'Lucro x Despesa x Tributo'
          }],
          labels: [
            'Lucro',
            'Despesas',
            'tributos'
          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Janeiro'
          },
          animation: {
            //animateScale: true,
            animateRotate: true
          }
        }
      });
    }

  //lineChart
  // showLineLucro(){
  //   this.lineChartLucro = new Chart(this.chartLineLucro.nativeElement, {
 
  //     type: 'line',
  //     data: {
  //         labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  //         //labels: this.datas,
  //         datasets: [
  //             {
  //                 label: "Lucro",
  //                 fill: false,
  //                 lineTension: 0.1,
  //                 backgroundColor: "rgba(255, 99, 132, 0.2)",
  //                 borderColor: "rgba(255,99,132,1)",
  //                 borderCapStyle: 'butt',
  //                 borderDash: [],
  //                 borderDashOffset: 0.0,
  //                 borderJoinStyle: 'miter',
  //                 pointBorderColor: "rgba(75,192,192,1)",
  //                 pointBackgroundColor: "#fff",
  //                 pointBorderWidth: 1,
  //                 pointHoverRadius: 5,
  //                 pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //                 pointHoverBorderColor: "rgba(220,220,220,1)",
  //                 pointHoverBorderWidth: 2,
  //                 pointRadius: 1,
  //                 pointHitRadius: 10,
  //                 //data:this.arrayRaiva,
  //                 data: [3500, 4333, 3000, 5000, 4500, 5000, 7000],
  //                 spanGaps: false,
  //             },
  //             {
  //               label: "Despesas",
  //                 fill: false,
  //                 lineTension: 0.1,
  //                 backgroundColor: "rgba(75,192,192,0.4)",
  //                 borderColor: "rgba(75,192,192,1)",
  //                 borderCapStyle: 'butt',
  //                 borderDash: [],
  //                 borderDashOffset: 0.0,
  //                 borderJoinStyle: 'miter',
  //                 pointBorderColor: "rgba(75,192,192,1)",
  //                 pointBackgroundColor: "#fff",
  //                 pointBorderWidth: 1,
  //                 pointHoverRadius: 5,
  //                 pointHoverBackgroundColor: "rgba(35,132,122,2)",
  //                 pointHoverBorderColor: "rgba(220,220,220,1)",
  //                 pointHoverBorderWidth: 2,
  //                 pointRadius: 1,
  //                 pointHitRadius: 10,
  //                 //data: this.arrayTristeza,
  //                 data: [1500, 1333, 2000, 2000, 2500, 3000, 2000],
  //                 spanGaps: false,
  //             }
  //         ]
  //     },

  //     options: {
	// 			scales: {
	// 				yAxes: [{
	// 					ticks: {
	// 						userCallback: function(tick) {
	// 							return 'R$' + tick.toString() + ',00';
	// 						}
	// 					},

	// 				}]
	// 			}
	// 		}

  // });

  // }

  //lineChart
  showLinePacientes(){
    this.lineChartPacientes = new Chart(this.chartLinePacientes.nativeElement, {
 
      type: 'line',
      data: {
          labels: ['29/01', '30/01', '31/01', '01/02', '02/02', '03/02', '04/02'],
          //labels: this.datas,
          datasets: [

              {
                  label: "Fatura",
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
          ]
      },
      options: {
				scales: {
					xAxes: [{
	
						ticks: {
							source: 'labels'
						}
					}],
					yAxes: [{
						ticks: {
							userCallback: function(tick) {
								return 'R$' + tick.toString() + ',00';
							}
						},

					}]
				}
			}

  });
}

}

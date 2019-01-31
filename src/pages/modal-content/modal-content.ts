import { QuadroClinicoPage } from './../quadro-clinico/quadro-clinico';
import { PatientsSevice } from '@services/patients/patients-service';
import { Chart } from 'chart.js';
import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { IonicPage, NavParams, Platform, ViewController, LoadingController, ActionSheetController, ModalController, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
// load math.js
import * as math from 'mathjs'
import { FormGroup } from '@angular/forms';

import { AlertController } from 'ionic-angular';
import { ModalEditPage } from '@pages/modal-edit/modal-edit';
import { ProntuarioPage } from '@pages/prontuario/prontuario';

//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@IonicPage()
@Component({
  selector: 'page-modal-content',
  templateUrl: 'modal-content.html',
})
export class ModalContentPage implements OnInit {
  
  @ViewChild('chartCanvas') chartCanvas;
  @ViewChild('chartBarCanvas') chartBarCanvas;
  @ViewChild('chartLineCanvas') chartLineCanvas;
  @ViewChild('chartPieCanvas') chartPieCanvas;

  form: FormGroup;
  
  character;
  chartVar: any;
  lineChart: any;
  pieChart: any;
  dopes: number = 50;
  nopes: number = 50;
  chartLabels: String = "setembro";
  patientKey: any;
  patient: any;
  ansiedade: any;
  tristeza: any;
  dor: any;
  raiva: any;
  datas: Observable<any>;
  arrayAnsiedade: any[];
  arrayTristeza: any[];
  arrayRaiva: any[];
  arrayDor: any[];
  name: any;
  animal: any;
  
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    private patientsSevice: PatientsSevice,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public navCrtl: NavController
    //public dialog: MatDialog
  ) {
    this.patientKey = this.params.get('key');
    console.log("patientsKey",this.patientKey);
    this.patient = this.patientsSevice.getFirebaseData(this.patientKey);
    console.log(this.patient);
    this.presentLoadingCustom();
    
    var characters = [
      {
        name: 'Ben',
        quote: 'Benjamin Button',
        image: 'assets/imgs/pacientes/avatar-ben.png',
        // items: [
        //   { title: 'key', note: this.patientKey },
        //   { title: 'Culture', note: 'River Folk' },
        //   { title: 'Alter Ego', note: 'Smeagol' }
        // ]
      },
      {
        name: 'Finn',
        quote: 'Finn Von Turing',
        image: 'assets/imgs/pacientes/avatar-finn.png',
        // items: [
        //   { title: 'Idade', note: '35 anos' },
        //   { title: 'Medicação', note: 'Bup, Rivotril, Carbolitium, place, meeds' },
        //   { title: 'Diagnostico', note: 'Ansiedade, Sindrome do Panico, Depressão, Fobias' }
        // ]
      },
      {
        name: 'Han Solo',
        quote: 'Depressao',
        image: 'assets/imgs/pacientes/avatar-han.png',
        items: [
          { title: 'idade', note: '60' },
          { title: 'profissao', note: 'aposentado' },
          { title: 'estado civil', note: 'solteiro' }
        ]
      },
      {
        name: 'Luke',
        quote: 'Complexo messianico',
        image: 'assets/imgs/pacientes/avatar-luke.png',
        items: [
          { title: 'idade', note: '27' },
          { title: 'profissao', note: 'jedi' },
          { title: 'estado civil', note: 'selibatario' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
    
  }
  ngOnInit() {
    //this.presentLoadingCustom();
    //this.showChart();
    
  }
  getIncomodo(){

  }

  openEdit(){
    this.navCrtl.push(QuadroClinicoPage)
  }


  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'carregando',
      duration: 3000
    });
    
    loading.onDidDismiss(() => {
      //console.log("Ansiedade", this.patient[1].Ansiedade);
      let l = parseInt(this.patient.length)-1 || 0;
      let ansiedade: number = 0;
      let tristeza: number = 0;
      let raiva: number = 0;
      let dor: number = 0;
      let data: any;
      let anArray:any=[];
      let totalAnsiedade, totalTristeza, totalRaiva, totalDor, arrayData;
      let arrAnsiedade: any=[];
      let arrTristeza: any=[];
      let arrRaiva: any=[];
      let arrDor: any=[];
      //this.ansiedade = parseInt(this.patient[1].Ansiedade + this.patient[2].Ansiedade) / l - 1;
      this.patient.forEach(element => {
         let a = parseInt(element.Ansiedade) || 0;
         let b = parseInt(element.Tristeza) || 0;
         let c = parseInt(element.Raiva) || 0;
         let d = parseInt(element.Dor) || 0;
         console.log("elements", a, b, c, d);
         
         if(element.Data != "" && element.Ansiedade != "" && element.Tristeza != ""
            && element.Raiva != "" && element.Dor != ""){
            anArray.push(element.Data);
            console.log("element.ANSIEDADE",element.Ansiedade);
            arrAnsiedade.push(element.Ansiedade);
            arrTristeza.push(element.Tristeza);
            arrRaiva.push(element.Raiva);
            arrDor.push(element.Dor);
         }
         //anArray.push({'value':element.Data});
         console.log(anArray);

         ansiedade += a;
         tristeza += b;
         raiva += c;
         dor += d;
         totalAnsiedade = ansiedade / l;
         totalTristeza = tristeza / l;
         totalRaiva = raiva / l;
         totalDor = dor / l;
      });
      
      this.ansiedade = math.round(totalAnsiedade);
      this.tristeza = math.round(totalTristeza);
      this.raiva = math.round(totalRaiva);
      this.dor = math.round(totalDor);

      this.arrayAnsiedade = arrAnsiedade;
      this.arrayTristeza = arrTristeza;
      this.arrayRaiva = arrRaiva;
      this.arrayDor = arrDor;

      this.datas = anArray;
      console.log(this.datas);
      
      this.showBarChart();
      this.showLineChart();
    });

    loading.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  openProntuario() {
    this.navCrtl.push(ProntuarioPage)
  }
  
  modalMeds(){
    console.log();
    let modal = this.modalCtrl.create(ModalEditPage, this.patient);
    modal.present();
  }

  openQuadroClinico(){
    this.navCrtl.push(QuadroClinicoPage, {key: this.patientKey})
  }

  modalEvolution(){}
  
  showChart() {
    this.chartVar = new Chart(this.chartCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [50, 50],
          backgroundColor: [
            'rgba(41, 255, 122, 1)',
            'rgba(255, 148, 12, 1)'
          ]
        }],
        labels: [
          'dope',
          'nope'
        ]
 
      },
 
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      }
 
    })
  }
  //barChart
  showBarChart() {
    this.chartVar = new Chart(this.chartBarCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Raiva", "Tristeza", "Ansiedade", "Dor" ],
        datasets: [
          {
            type:'line',
            label: 'Incomodo',
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            fill: false,
            data:[5, 4, 7, 4]
          },
          {
          label: 'Intensidade',
          data: [this.raiva, this.tristeza, this.ansiedade, this.dor],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
            //'rgba(153, 102, 255, 0.2)',
            //'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
          //'rgba(153, 102, 255, 1)',
          //'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        }]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
      }
 
    })
  }
  //lineChart
  showLineChart(){
    this.lineChart = new Chart(this.chartLineCanvas.nativeElement, {
 
      type: 'line',
      data: {
          //labels: ["January", "February", "March", "April", "May", "June", "July"],
          labels: this.datas,
          datasets: [
              {
                  label: "Raiva",
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
                  data:this.arrayRaiva,
                  spanGaps: false,
              },
              {
                label: "Tristeza",
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
                  data: this.arrayTristeza,
                  spanGaps: false,
              },
              {
                label: "Ansiedade",
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
                  data: this.arrayAnsiedade,
                  spanGaps: false,
              }
          ]
      }

  });

  }

  showPie(){
    this.pieChart = new Chart(this.chartPieCanvas.nativeElement, {
			type: 'pie',
			data: {
				datasets: [{
					data: [2,4,6,8,10
					],
					backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
            //'rgba(255, 159, 64, 0.2)'
        ],
					label: 'Dataset 1'
				}],
				labels: [
					'Red',
					'Orange',
					'Yellow',
					'Green',
					'Blue'
				]
			},
			options: {
				responsive: true
			}
		});
  }
  
}



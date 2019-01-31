import { PatientsSevice } from './../../services/patients/patients-service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-quadro-clinico',
  templateUrl: 'quadro-clinico.html',
})
export class QuadroClinicoPage implements OnInit {
  panelOpenState = false;
  step = 0;
  form: FormGroup;
  diagnostico: string;
  medicacao: string;
  evolucao: string;
  qClinico: any;
  patientKey: any;
  PATH: any;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private patientService: PatientsSevice,
    private toast: ToastController,
    ) {
      this.patientKey = this.navParams.get('key');
      this.qClinico = this.navParams.data.qClinico || {};

      console.log("patientKey", this.patientKey)
  }

  ngOnInit() {
    this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuadroClinicoPage');
  }

  createForm(){
    this.form = this.formBuilder.group({
      //key: [this.sintomas.key],
      diagnostico: [this.qClinico.diagnostico],
      medicacao: [this.qClinico.medicacao],
      evolucao: [this.qClinico.evolucao]
      
      //cliente:[this.cliente[0].key],
      //nome:[this.cliente[0].contact.nome]
      
    })
    
  }

  onSubmit() {
    if (this.form.valid) {
      this.patientService.save(this.form.value, {key:this.patientKey})
        .then(() => {
          this.toast.create({ message: 'Sintomas enviado com sucesso.', duration: 3000 }).present();
          //this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao enviar sintomas.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

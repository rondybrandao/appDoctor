import { AngularFireList, AngularFireDatabase, AngularFireObject, snapshotChanges } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import moment from 'moment';

@Injectable()
export class PatientsSevice {
    private PATH = 'pacientes/';
    patientsRef: AngularFireList<any> = null;
    patients: any;
    toDaySend: any;
    toDay: any;

    constructor(
        private db: AngularFireDatabase
    ){
        this.patientsRef = db.list(this.PATH);
        console.log("patientsRef", this.patientsRef);
        moment.locale('pt-BR');
        //this.toDay = moment().format('L');
        this.toDay = moment().format('YYYY/MMM');
        this.toDaySend = moment().format('D/MM');
        console.log("todaySend",this.toDaySend);
    }

    

    getPatientsList(): AngularFireList<any> {
        return this.patientsRef;
    }

    getPatient(key: string): AngularFireObject<any> {
        console.log("patients-service:", key)
        
        return this.db.object(this.PATH + key);
    }

    getFirebaseData(key: string){
        let charites = [{Data : '', Key : '', Ansiedade : '', Dor : '', Tristeza : '', Raiva: ''}];
        this.db.database.ref(this.PATH + key + "/sintomas/2018/set").on("value", (snapshot) => {
            snapshot.forEach((snap) => {
                //console.log("snap",snap);
                charites.push({
                Data: snap.val().data,
                Key: snap.key,
                Ansiedade: snap.val().ansiedade_nivel,
                Dor: snap.val().dor_intensidade,
                Tristeza: snap.val().tristeza_intensidade,
                Raiva: snap.val().raiva_nivel
                });
            return false;
          });
        });
        return charites;
    }

    save(patient:any, key:any){
        console.log(key.key);
        return new Promise((resolve, reject) => {
            if(patient.key) {
                this.db.list(this.PATH)
                    .update(patient.key, {diagnostico: patient.diagnostico})
                    .then(() => resolve())
                    .catch((e) => reject(e));
            } else {
                this.db.list(this.PATH + key.key + "/quadroClinico/" + this.toDay)
                    .push({
                        data:this.toDaySend,
                        diagnostico: patient.diagnostico,
                        medicacao: patient.medicacao,
                        evolucao: patient.evolucao
                    })
                    .then(() => resolve());
            }
        })
    }

}
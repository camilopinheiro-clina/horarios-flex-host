import { Component, OnInit } from '@angular/core';

export class Horario {
  idHorarioAtendimento?: any;
  idEstabelecimento?: any;
  diaSemana?: any;
  excecao?: any;
  horarioInicial?: any;
  horarioFinal?: any;
  status?: boolean;
}

export class DiaSemana {
  ativo?: boolean;
  value: any;
  label: any;
  horarios?: Array<Horario>;
}

export enum DiaSemanaEnum {
  DOMINGO = "Domingo",
  SEGUNDA_FEIRA = "Segunda-feira",
  TERCA_FEIRA = "Terça-feira",
  QUARTA_FEIRA = "Quarta-feira",
  QUINTA_FEIRA = "Quinta-feira",
  SEXTA_FEIRA = "Sexta-feira",
  SABADO = "Sabado",
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  sugestoesHorarios = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30"];
  horariosAtuais?= [];
  diasSemana: Array<DiaSemana>;


  constructor() {
    this.diasSemana = new Array<DiaSemana>();
    Object.keys(DiaSemanaEnum).map((value: any) => this.diasSemana.push({ value: value, label: DiaSemanaEnum[value], horarios: [] }));
  }

  ngOnInit(): void {
  }

  addCampoHorario(dia: any, excecao?) {
    dia.horarios = [...dia?.horarios, { horarioInicial: null, excecao: excecao, horarioFinal: null, diaSemana: dia.value }];
  }

  removerCampoHorario(dia: any, horario: any) {
    dia.horarios = dia.horarios?.filter((elem: any) => elem != horario);
  }

  alternarEstadoDia(dia: any) {
    let diaIndex = this.diasSemana.findIndex(diaTemp => dia.value == diaTemp.value);
    if (dia.ativo) {
      this.diasSemana[diaIndex].horarios = new Array<Horario>();
      this.diasSemana[diaIndex]?.horarios?.push({
        idHorarioAtendimento: 0,
        horarioFinal: null,
        horarioInicial: null,
        diaSemana: dia.value,
        idEstabelecimento: 1,
        status: true
      })
    } else {
      this.diasSemana[diaIndex].horarios = new Array<Horario>();
    }
  }
  definirHorarioComercial() {
    this.diasSemana.filter(a => a.value != "DOMINGO" && a.value != "SABADO").map(a => {
      a.horarios = [{
        horarioInicial: '08:00',
        diaSemana: a.value,
        horarioFinal: '12:00',
      }, {
        horarioInicial: '13:00',
        diaSemana: a.value,
        horarioFinal: '18:00',
      }];
      a.ativo = true;
      return a;
    })

    this.diasSemana.filter(a => a.value == "DOMINGO" || a.value == "SABADO").map(a => {
      a.ativo = false;
      return a;
    })
  }

}

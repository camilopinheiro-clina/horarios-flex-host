import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  locale = 'pt';
  bsInlineRangeValue: Date[];
  minDate = new Date();

  sugestoesHorarios: any = [{ hora: "08:00" }, { hora: "08:30" }, { hora: "09:00" }, { hora: "09:30", locked: true, }, { hora: "10:00", locked: true, }, { hora: "10:30", locked: true, }, { hora: "11:00" }, { hora: "11:30" }, { hora: "12:00" }, { hora: "12:30" }, { hora: "13:00" }, { hora: "13:30" }, { hora: "14:00" }, { hora: "14:30" }, { hora: "15:00" }, { hora: "15:30" }, { hora: "16:00" }, { hora: "16:30" }, { hora: "17:00" }, { hora: "17:30" }, { hora: "18:00" }, { hora: "18:30" }, { hora: "19:00" }, { hora: "19:30" }, { hora: "20:00" }, { hora: "20:30" }, { hora: "21:00" }, { hora: "21:30" }, { hora: "22:00" }, { hora: "22:30" }, { hora: "23:00" }, { hora: "23:30" }, { hora: "00:00" }, { hora: "00:30" }, { hora: "01:00" }, { hora: "01:30" }, { hora: "02:00" }, { hora: "02:30" }, { hora: "03:00" }, { hora: "03:30" }, { hora: "04:00" }, { hora: "04:30" }, { hora: "05:00" }, { hora: "05:30" }, { hora: "06:00" }, { hora: "06:30" }, { hora: "07:00" }];

  dataSelecionada;


  colorTheme = 'theme-blue';

  bsConfig?: Partial<BsDatepickerConfig> = { showWeekNumbers: false, containerClass: this.colorTheme };


  constructor(private localeService: BsLocaleService) {
    this.localeService.use(this.locale);
  }

  ngOnInit(): void {
  }

  selecionarData(data) {
    this.dataSelecionada = data;
    console.log(data);
  }

}


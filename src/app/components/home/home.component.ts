import { Component, OnInit } from '@angular/core';

import { getWeek, isToday, getDay, isWeekend, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weekDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  monthDays = [];
  constructor() { }

  ngOnInit() {
    console.log(getWeek(new Date()));
    this.getMonthDays();
    console.log(isFriday(new Date()));
  }

  getMonthDays() {
    const date = new Date();
    const month = date.getMonth();

    date.setDate(1);
    while (date.getMonth() === month) {
      const day = date.getDate();
      const year = date.getFullYear();

      const dates = day.toString().padStart(2, '0') + '-' + (month + 1).toString().padStart(2, '0') + '-' + year;
      const weekday = getDay(new Date(year, month, day));
      const dayObj = {
        date: dates,
        dayName: this.weekDays[weekday],
        day,
        month,
        year
      };
      this.monthDays.push(dayObj);
      date.setDate(date.getDate() + 1);
    }

    // var today = new Date(); // current date
    // var end = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); // end date of month
    // var result = [];

    // for (let i = 1; i <= end; i++) {
    //   result.push(today.getFullYear() + '-' + ((today.getMonth() + 1) < 10 ? '0' + today.getMonth() + 1 : today.getMonth()) + '-' + (i < 10 ? '0' + i : i))
    // }

    // console.log(result)
  }

  isWeekend(year, month, day) {
    console.log(year,month,day)
    return isWeekend(new Date(year, month, day));
  }

}

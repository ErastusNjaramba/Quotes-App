import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(value - todayWithNoTime)
    const secondsInADay= 86400;

    var dateDifferenceSeconds=dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >= 0 && value < todayWithNoTime){
        return dateCounter;
    }else{
        return 0;
    }
  }

}

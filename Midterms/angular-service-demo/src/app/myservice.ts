import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  showTodayDate() {
    let nDate = new Date();
    return nDate
  }
  serviceproperty = 'My Service Component';
}

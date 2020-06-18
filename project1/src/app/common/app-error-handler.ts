import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {

  handleError(error) {
    alert('Unexpected Error');
    console.log(error);
  }

}

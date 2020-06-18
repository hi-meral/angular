import { Validators, AbstractControl, ValidationErrors } from "@angular/forms";
import { Promise } from 'q';

export class UsernameValidator {

  static CanNotContainSpace(control: AbstractControl): ValidationErrors | null {

    if ((control.value).indexOf(' ') >= 0) {
      return { CanNotContainSpace: true }
    }
  }

  static ShouldBeUnique(control: AbstractControl): Promise< ValidationErrors | null > {

    return Promise((resolve, reject) => {

      setTimeout(() => {
        
        if (control.value === 'Angular')
          resolve({ ShouldBeUnique: true });
        else 
          resolve(null);
        
      }, 12000);
    });
  }

}

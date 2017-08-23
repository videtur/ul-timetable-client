import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

const studentIdPattern: RegExp = /^\d{7,8}$/;

@Directive({
  selector: '[appStudentIdValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: StudentIdValidatorDirective, multi: true}]
})
export class StudentIdValidatorDirective implements Validator {

  validate(control: AbstractControl): {[key: string]: any} {
    return studentIdValidator()(control);
  }

}
export function studentIdValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const valid = studentIdPattern.test(control.value);
    return valid ? null : {'studentId': {value: control.value}};
  };
}

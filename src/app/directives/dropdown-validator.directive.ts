import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[dropdown-validator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DropdownValidatorDirective,
      multi: true,
    },
  ],
})
export class DropdownValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value?.id === -1) {
      return {
        required: true,
      };
    }
    return null;
  }
}

import { AbstractControl } from '@angular/forms';

export class ValidationService {
     
    static getValidatorErrorMessage(code: string) {
        let config = {
            'required': 'Required',
            'invalidImage': 'Invalid image. Image must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    }
     
    static imageValidator(control: AbstractControl) {
        // {6,100}           - Assert image is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidImage': true };
        }
    }
}
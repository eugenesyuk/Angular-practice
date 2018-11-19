import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static passwordsMatch(control: FormGroup): ValidationErrors | null {
        const password = control.get('newPassword').value;
        const confirmation = control.get('newPasswordConfirmation').value;
        return password === confirmation ? null : { dontMatch: true };
    }

    static passwordIsValid(control: AbstractControl): Promise<ValidationErrors | null> {
        console.log(control);

        return new Promise((resolve, reason) => {
            setTimeout(() => {
                control.value !== 'GeNa1993na' ? resolve({ passwordIncorrect: true }) : resolve( null );
            }, 200);
        });
    }
}

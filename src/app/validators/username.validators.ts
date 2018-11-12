import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static containSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).includes(' ')) {
            return { containSpace: true };
        } else {
            return null;
        }
    }

    static isUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise( (resolve, reason) => {
            setTimeout( () => {
                if(control.value === 'eugene') {
                    resolve({ isNotUnique: true, providedValue: control.value });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
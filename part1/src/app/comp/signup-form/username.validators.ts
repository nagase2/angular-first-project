import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * this is custom valdator class..
 * 何も継承しなくてもいいのか？
 */
export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }
}
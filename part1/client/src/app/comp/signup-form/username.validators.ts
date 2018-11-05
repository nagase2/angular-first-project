import { AbstractControl, ValidationErrors, AsyncValidatorFn, AsyncValidator } from '@angular/forms';
import { Observable } from 'rxjs';

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
    static cannotContainAAA(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf('AAA') >= 0) {
            return { cannotContainAAA: true };
        }
        return null;
    }

    /**
     * 非同期バリデーションサンプル
     * @param control 
     */
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'naga') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}

export class UniqueUserValidator implements AsyncValidator {
    validate(c: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
        throw new Error("Method not implemented.");
    }    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }


}

import { AbstractControl } from "@angular/forms";

export const whitespaceValidator = (control: AbstractControl): {[key:string]:any} | null => {
    const trimedValue = control.value.trim();
    return (trimedValue.length == 0)? {'white-space': {value: "no white spaces"}} : null;
}

import { AbstractControl } from "@angular/forms";

export const whitespaceValidator = (control: AbstractControl): { [key: string]: any } | null => {
    return (control.value.trim().length === 0) ? { 'white-space': { value: "no white spaces" } } : null;
}

export const startsWithwhitespaceValidator = (control: AbstractControl): { [key: string]: any } | null => {
    return (control.value.charAt(0) === ' ') ? { 'starts-with-white-space': { value: "can't starts white spaces" } } : null;
}

export const endsWithwhitespaceValidator = (control: AbstractControl): { [key: string]: any } | null => {
    return (control.value.charAt(control.value.length - 1) === ' ') ? { 'ends-with-white-space': { value: "can't ends white spaces" } } : null;
}
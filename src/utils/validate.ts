export type ValidationFunction = (value: string) => boolean;

export interface ValidationObject {
    [key: string]: ValidationFunction;
}

export class FormValidator {
    private errors: string[] = [];
    private fields: (HTMLInputElement | HTMLTextAreaElement)[];
    private readonly validations: ValidationObject;

    constructor(form: HTMLFormElement, validations: ValidationObject) {
        this.fields = Array.from(
            form.querySelectorAll("input, textarea")
        ) as (HTMLInputElement | HTMLTextAreaElement)[];

        this.validations = validations;

        this.fields.forEach((field) => {
            field.addEventListener("focus", () => this.hideError(field));
            field.addEventListener("blur", () => this.validateField(field));
        });

        form.addEventListener("submit", (event) => this.validateForm(event));
    }

    private validateField(field: HTMLInputElement | HTMLTextAreaElement) {
        const value = field.value.trim();
        const validation = this.validations[field.name];
        if (validation && !validation(value)) {
            this.showError(field, "Ошибка валидации");
        } else {
            this.hideError(field);
        }
    }

    private validateForm(event: Event) {
        this.errors = [];
        this.fields.forEach((field) => this.validateField(field));
        if (this.errors.length > 0) {
            event.preventDefault();
        }
    }

    private showError(field: HTMLInputElement | HTMLTextAreaElement, error: string) {
        const errorElem = field.nextElementSibling as HTMLElement;
        errorElem.innerText = error;
        errorElem.style.display = "block";
        errorElem.style.color = "red";
        errorElem.style.fontSize = "small";
    }

    private hideError(field: HTMLInputElement | HTMLTextAreaElement) {
        const errorElem = field.nextElementSibling as HTMLElement;
        errorElem.innerText = "";
        errorElem.style.display = "none";
    }
}

// Использование
// const form = document.querySelector("form") as HTMLFormElement;
// const validations: ValidationObject = {
//     first_name: (value: string) => /^[a-zA-Zа-яА-Я]+(?:-[a-zA-Zа-яА-Я]+)*$/.test(value),
//     second_name: (value: string) => /^[a-zA-Zа-яА-Я]+(?:-[a-zA-Zа-яА-Я]+)*$/.test(value),
//     login: (value: string) => /^[a-zA-Z][a-zA-Z0-9-_]{2,19}$/.test(value),
//     email: (value: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
//     password: (value: string) => /^(?=.*\d)(?=.*[A-Z]).{8,40}$/.test(value),
//     phone: (value: string) => /^\+?\d{10,15}$/.test(value),
//     message: (value: string) => value.trim() !== "",
// };
//
// const validator = new FormValidator(form, validations);

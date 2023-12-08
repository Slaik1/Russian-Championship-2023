import {RuleObject} from "antd/lib/form";

import {getConfirmPasswordValidator, ageValidator, loginValidator, emailValidator, passwordValidator} from "./validators";

export const DEBOUNCE_DELAY = 500; // milliseconds

export const AGE_RULES: RuleObject[] = [
    {
        required: true,
        validator: ageValidator
    }
];

export const LOGIN_RULES: RuleObject[] = [
    {
        required: true,
        validator: loginValidator
    }
];

export const EMAIL_RULES: RuleObject[] = [
    {
        required: true,
        validator: emailValidator
    }
];

export const PASSWORD_RULES: RuleObject[] = [
    {
        required: true,
        validator: passwordValidator,
    }
];

export const getConfirmPasswordRules = (password: string): RuleObject[] => [
    {
        required: true,
        validator: getConfirmPasswordValidator(password),
    }
];
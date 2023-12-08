import {RuleObject} from "antd/lib/form";

import {getConfirmPasswordValidator, loginValidator, passwordValidator} from "./validators";

export const DEBOUNCE_DELAY = 500; // milliseconds

export const LOGIN_RULES: RuleObject[] = [
    {
        required: true,
        validator: loginValidator
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
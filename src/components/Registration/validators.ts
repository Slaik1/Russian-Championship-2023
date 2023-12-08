import {RuleObject} from "antd/lib/form";



const rulesRegex = {
    latinLetters: /^[\x00-\x7F]*$/,// eslint-disable-line no-control-regex
};

const checkOccupied = async (login: string) => {
    try {
        //return await api.user.isLoginOccupied(login);
    } catch (e: any) {
        console.error("checkOccupied", e.message);

        return false;
    }
};

export const loginValidator = async (_: RuleObject, value: string) => {
    if (!value) throw new Error('Логин обязателен');

    if (value.length < 4) throw new Error('Минимальная длина логина 4 символа');

    if (value.length > 50) throw new Error('Максимальная длина логина 50 символов');

    if (!rulesRegex.latinLetters.test(value)) throw new Error('Используйте только латинские буквы');

    const isOccupied = await checkOccupied(value);

    if (isOccupied) throw new Error('Логин занят');
};

export const passwordValidator = async (_: RuleObject, value: string) => {
    if (!value) throw new Error('Пароль обязателен');

    if (value.length < 8) throw new Error('Минимальная длина пароля 8 символов');

    if (value.length > 50) throw new Error('Максимальная длина пароля 50 символов');

    if (!rulesRegex.latinLetters.test(value)) throw new Error('Используйте только латинские буквы');
};

export const getConfirmPasswordValidator = (password: string,) => async (_: RuleObject, confirmPassword: string) => {
    if (!confirmPassword) throw new Error('Повторите пароль');

    if (password !== confirmPassword) throw new Error('Пароли не совпадают');
};
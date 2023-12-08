import {RuleObject} from "antd/lib/form";

const rulesRegex = {
    numbers: /^[0-9]*$/,// eslint-disable-line no-control-regex
    latinLetters: /^[\x00-\x7F]*$/,// eslint-disable-line no-control-regex
    emails: /^[A-ZА-Я0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,// eslint-disable-line no-control-regex
};

const checkOccupied = async (login: string) => {
    try {
        //return await api.user.isLoginOccupied(login);
    } catch (e: any) {
        console.error("checkOccupied", e.message);

        return false;
    }
};

export const ageValidator = async (_: RuleObject, value: string) => {
    if (!value) throw new Error('Возраст обязателен');

    if (parseInt(value) < 6) throw new Error('Для детей младше 6 лет обучающих программ нет');

    if (!rulesRegex.numbers.test(value)) throw new Error('Используйте только цифры');
};

export const loginValidator = async (_: RuleObject, value: string) => {
    if (!value) throw new Error('Логин обязателен');

    if (value.length < 4) throw new Error('Минимальная длина логина 4 символа');

    if (value.length > 50) throw new Error('Максимальная длина логина 50 символов');

    if (!rulesRegex.latinLetters.test(value)) throw new Error('Используйте только латинские буквы');

    const isOccupied = await checkOccupied(value);

    if (isOccupied) throw new Error('Логин занят');
};

export const emailValidator = async (_: RuleObject, value: string) => {
    if (!value) throw new Error('Почта обязателена');

    if (value.length < 4) throw new Error('Минимальная длина почты 4 символа');

    if (value.length > 50) throw new Error('Максимальная длина почты 50 символов');

    if (!rulesRegex.latinLetters.test(value)) throw new Error('Используйте только латинские буквы');

    if (!rulesRegex.emails.test(value)) throw new Error('Используйте верный формат почты');

    const isOccupied = await checkOccupied(value);

    if (isOccupied) throw new Error('Почта занята');
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
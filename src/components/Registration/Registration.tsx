import {Button, Form, Input, notification} from "antd";
import React, {FC, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";


import {debounce} from "../../helpers/debounce";

import {DEBOUNCE_DELAY, AGE_RULES, LOGIN_RULES, EMAIL_RULES, PASSWORD_RULES, getConfirmPasswordRules} from "./constants";

import styles from './Registration.module.scss';

const Registration: FC = () => {

    //const {signin, checkAuth} = useAuth();
    const navigate = useNavigate();
    const [age, setAge] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormLoading, setIsFormLoading] = useState(false);

    const handleRegister = async () => {
        try {
            setIsFormLoading(true);

            //await api.user.registration(login, password);

            //await signin(login, password);

            //await checkAuth();

            navigate("/");

            notification.success({
                message: "Вы успешно зарегистринованны"
            })

        } catch (e) {
            notification.error({
                message: "Произошла ошибка"
            })
        } finally {
            setIsFormLoading(false);
        }
    }

    const ageHandler = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
    }, DEBOUNCE_DELAY)

    const loginHandler = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    }, DEBOUNCE_DELAY)

    const emailHandler = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, DEBOUNCE_DELAY)

    const passwordHandler = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, DEBOUNCE_DELAY)

    return (
        <div className={styles.registration}>
            <Form
                className={styles.form}
                autoComplete="off"
                layout="vertical"
                onFinish={handleRegister}
            >
                <h2 className={styles.title}>Регистрация</h2>

                <Form.Item
                    required={false}
                    name="age"
                    rules={AGE_RULES}
                    hasFeedback={true}
                    validateDebounce={DEBOUNCE_DELAY}
                >
                    <Input
                        autoFocus={true}
                        placeholder="Возраст"
                        onChange={(event) => ageHandler(event)}
                    />
                </Form.Item>

                <Form.Item
                    required={false}
                    name="login"
                    rules={LOGIN_RULES}
                    hasFeedback={true}
                    validateDebounce={DEBOUNCE_DELAY}
                >
                    <Input
                        placeholder="Логин"
                        onChange={(event) => loginHandler(event)}
                    />
                </Form.Item>

                <Form.Item
                    required={false}
                    name="email"
                    rules={EMAIL_RULES}
                    hasFeedback={true}
                    validateDebounce={DEBOUNCE_DELAY}
                >
                    <Input
                        placeholder="Почта"
                        onChange={(event) => emailHandler(event)}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    required={false}
                    rules={PASSWORD_RULES}
                    hasFeedback
                    validateDebounce={DEBOUNCE_DELAY}
                >
                    <Input.Password
                        placeholder="Пароль"
                        onChange={(event) => passwordHandler(event)}
                    />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    required={false}
                    dependencies={['password']}
                    rules={getConfirmPasswordRules(password)}
                    hasFeedback
                    validateDebounce={DEBOUNCE_DELAY}
                >
                    <Input.Password
                        placeholder="Повторите пароль"
                    />
                </Form.Item>

                <Form.Item className={styles.buttonWrapper}>
                    <Button className={styles.btn} type="primary" htmlType="submit" loading={isFormLoading}>
                        Зарегистрироваться
                    </Button>
                </Form.Item>

                <Link className={styles.registerLink} to='/login'>
                    Войти
                </Link>
            </Form>
        </div>
    );
};

export default Registration;
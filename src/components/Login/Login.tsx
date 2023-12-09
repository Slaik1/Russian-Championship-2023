import { Button, Form, Input, notification } from 'antd';
import React, { FC, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import styles from "./Login.module.scss"
import AuthService from "../../api/AuthService";
import {userStore} from "../../stores/userStore/userStore";
import {observer} from "mobx-react-lite";
import {AGE_RULES, DEBOUNCE_DELAY} from "../Registration/constants";

const Login= () => {

    const [email, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isNotValid, setIsNotValid] = useState(false);
    const [isAuthPending, setIsAuthPending] = useState(false);
    const navigate = useNavigate()
    const authService = new AuthService()

    const handleFormChange = (e: any) => {
        const {type, value} = e.target;

        setIsNotValid(false);

        switch (type) {
            case "text":
                setLogin(value)
                break
            case "password":
                setPassword(value)
                break
        }
    }

    const handleLogin = async () => {
        try {
            const res = await authService.login(email, password)

            console.log(res)
            userStore.setToken(res.tokens.access)
            userStore.setIsToken(true)
            navigate("/");
        } catch (e){
            setIsNotValid(true)
        }

    }

    const helpDiv = (): JSX.Element => {
        return (
            <div className={styles.helpDiv}>
                Неверное имя пользователя или пароль
            </div>
        )
    }

    return (
        <div className={styles.login}>
            <Form
                className={styles.form}
                onFinish={handleLogin}
                layout="vertical"
                onChange={(event) => handleFormChange(event)}
                disabled={isAuthPending}
            >
                <h2 className={styles.title}>Вход в аккаунт</h2>

                <Form.Item
                    name="email"
                    help={isNotValid && helpDiv()}
                >
                    <Input
                        className={styles.loginFirstInput}
                        autoFocus={true}
                        placeholder="Электронная почта"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    help={isNotValid && helpDiv()}
                >
                    <Input.Password
                        placeholder="Пароль"
                    />
                </Form.Item>

                <Form.Item className={styles.buttonWrapper}>
                    <Button className={styles.btn} type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>

                <Link className={styles.registerLink} to='/registration'>
                    Создать аккаунт
                </Link>
            </Form>
        </div>
    )
}

export default observer(Login)
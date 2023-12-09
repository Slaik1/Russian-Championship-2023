import { Button, Form, Input, notification } from 'antd';
import { FC, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useCookies } from 'react-cookie';



import styles from "./Login.module.scss"
import AuthService from "../../api/AuthService";
import {userStore} from "../../stores/userStore/userStore";
import {observer} from "mobx-react-lite";

const Login= () => {

    const [email, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isNotValid, setIsNotValid] = useState(false);
    const [isAuthPending, setIsAuthPending] = useState(false);
    const [cookies, setCookie] = useCookies(['user']);
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
                autoComplete="off"
                layout="vertical"
                onChange={(event) => handleFormChange(event)}
                disabled={isAuthPending}
            >
                <h2 className={styles.title}>Авторизация</h2>

                <Form.Item
                    name="email"
                    help={isNotValid && helpDiv()}
                >
                    <Input
                        autoFocus={true}
                        placeholder="Почта"
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
                    Зарегистрироваться
                </Link>
            </Form>
        </div>
    )
}

export default observer(Login)
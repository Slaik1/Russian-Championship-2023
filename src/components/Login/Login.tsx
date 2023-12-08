import { Button, Form, Input, notification } from 'antd';
import { FC, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

//import useAuth from '../../hooks/useAuth';



import styles from "./Login.module.scss"
import AuthService from "../../api/AuthService";

const Login: FC = () => {
    //const {checkAuth, signin} = useAuth();

    const [login, setLogin] = useState('');
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
            setIsAuthPending(true)

            //await signin(login, password)

            //await checkAuth();

            const res = await authService.login(login, password)

            console.log(res)
            notification.success({
                message: "Вы успешно вошли в аккаунт"
            });

            setIsAuthPending(false);
            setIsNotValid(false);

            navigate('/')

        } catch (e) {
            setIsNotValid(true)
        } finally {
            setIsAuthPending(false)
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
                    name="login"
                    label="Логин"
                    help={isNotValid && helpDiv()}
                >
                    <Input
                        autoFocus={true}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    help={isNotValid && helpDiv()}
                >
                    <Input.Password/>
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

export default Login
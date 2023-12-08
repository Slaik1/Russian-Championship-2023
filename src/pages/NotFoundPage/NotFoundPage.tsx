import {Button} from "antd";
import React from 'react';
import {useNavigate} from "react-router-dom";

import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.about}>Страница не найдена или была удалена</p>
            <Button type='primary' onClick={() => navigate('/')}>
                Главная
            </Button>
        </div>
    );
};

export default NotFoundPage;
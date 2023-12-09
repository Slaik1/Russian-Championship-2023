import { Button, Form, Input, notification } from 'antd';
import React, { FC, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from './Statistics.module.scss'

const Statistics: FC = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.statistics}>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src="https://i.ibb.co/gtYCYL9/image.png" alt="image"/>
                </div>
                <div className={styles.buttonWrapper}>
                    <div className={styles.slogan}>
                        Будущее безопасности начинается<br/>
                        сегодня - курсы по кибербезопасности<br/>
                        для успешного завтра.<br/>
                    </div>
                    <Button className={styles.btn} type="primary" onClick={() => navigate('/registration')}>
                        НАЧАТЬ
                    </Button>
                    <Button className={styles.btn} type="primary" onClick={() => navigate('/login')}>
                        У меня уже есть аккаунт!
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Statistics
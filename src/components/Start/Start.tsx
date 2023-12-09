import { Button, Form, Input, notification } from 'antd';
import React, { FC, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from './Start.module.scss'

const Start: FC = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.start}>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src="https://i.ibb.co/2Wm1WDB/image.png" alt="image"/>
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
            <div className={styles.content}>
                <div className={styles.textWrapper}>
                    <div className={styles.title}>Безопасность прежде всего!</div>
                    <p>У нас вы можете пройти курсы по 4 направлениям!</p>
                    <p>Финансовые нарушения, защита персональных данных, защита личных цифровых ресурсов, правила работы
                        в сети интернет</p>
                </div>
                <div className={styles.image}>
                    <img src="https://i.ibb.co/qmNcKf5/image.png" alt="image"/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src="https://i.ibb.co/Rgdtgzx/image.png" alt="image"/>
                </div>
                <div className={styles.textWrapper}>
                    <div className={styles.title}>Не дай себя взломать</div>
                    <p>Безопасность в интернете доступна каждому.</p>
                    <p>Учись защищать своой цифровой след с нашими увлекательными и понятными курсами. </p>
                </div>
            </div>
        </div>
    )
}

export default Start
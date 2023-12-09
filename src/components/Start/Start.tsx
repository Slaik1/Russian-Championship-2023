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
            <div className={styles.content}>
                <div className={styles.textWrapper}>
                    <div className={styles.title}>Безопасность прежде всего!</div>
                    <p>У нас вы можете пройти курсы по 4 направлениям!</p>
                    <p>Финансовые нарушения, защита персональных данных, защита личных цифровых ресурсов, правила работы
                        в сети интернет</p>
                </div>
                <div className={styles.image}>
                    <img src="https://i.ibb.co/hcR5pVB/image.png" alt="image"/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src="https://i.ibb.co/cwfsXvM/image.png" alt="image"/>
                </div>
                <div className={styles.textWrapper}>
                    <div className={styles.title}>Не дай себя взломать</div>
                    <p>Безопасность в интернете доступна каждому.</p>
                    <p>Учись защищать своой цифровой след с нашими увлекательными и понятными курсами. </p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.textWrapper}>
                    <div className={styles.title}>Стимул к учебе</div>
                    <p>Игровой подход с интерактивными заданиями и напоминания от нашего талисмана - енота Джерри
                        помогут превратить обучение в привычку</p>
                </div>
                <div className={styles.image}>
                    <img src="https://i.ibb.co/88PzkPg/image.png" alt="image"/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src="https://i.ibb.co/CbT3qVS/image.png" alt="image"/>
                </div>
                <div className={styles.textWrapper}>
                    <div className={styles.title}>Система поощрений</div>
                    <p>Твой путь к безопасности в интернете становится ещё более выгодным и мотивирующим.</p>
                    <p>Получай цифровые бонусы за учебу с отличием</p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src="https://i.ibb.co/2FYp4zG/image.png" alt="image"/>
                </div>
                <div className={styles.buttonWrapper}>
                    <div className={styles.slogan}>
                        Начни увлекательное путешествие в мир кибербезопасности
                    </div>
                    <Button className={styles.btn} type="primary" onClick={() => navigate('/registration')}>
                        НАЧАТЬ
                    </Button>
                </div>
                <div className={styles.image}>
                    <img src="https://i.ibb.co/DtZtgrj/image.png" alt="image"/>
                </div>
            </div>
        </div>
    )
}

export default Start
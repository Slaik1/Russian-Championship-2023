import { Button, Form, Input, Progress, Space, notification } from 'antd';
import React, { FC, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from './Statistics.module.scss'

const Statistics: FC = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.statistics}>
            <div className={styles.progress}>
            <div className={styles.progress_item}>
                <div className={styles.progress1}>
                <Progress type="dashboard" percent={35} />
                </div>
                <div className={styles.progress_text}> 
                    Финансовые <br/>нарушения
                </div>
            </div>
            <div className={styles.progress_item}>
                <div className={styles.progress1}>
                <Progress type="dashboard" percent={0} />
                </div>
                <div className={styles.progress_text}> 
                    Защита <br/>персональных данных
                </div>
            </div>
            <div className={styles.progress_item}>
                <div className={styles.progress1}>
                <Progress type="dashboard" percent={75} />
                </div>
                <div className={styles.progress_text}> 
                    Защита личных <br/>цифровых ресурсов
                </div>
            </div>
            <div className={styles.progress_item}>
                <div className={styles.progress1}>
                <Progress type="dashboard" percent={100} />
                </div>
                <div className={styles.progress_text}> 
                    Правила работы <br/> в сети
                </div>
            </div>
            </div>
        <div className={styles.activity}>
            <div className={styles.act_text}>
            Моя активность
            </div>
            <div className={styles.main_act}>
                <img src="https://i.ibb.co/wSBbmYC/2023-12-09-163211586.png" alt="2023-12-09-163211586"/>
            </div>
        </div>
        </div>
        
    )
}

export default Statistics
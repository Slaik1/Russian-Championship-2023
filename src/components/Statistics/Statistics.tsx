import { Button, Form, Input, Progress, Space, notification } from 'antd';
import React, { FC, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from './Statistics.module.scss'

const Statistics: FC = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.statistics}>
            <div className={styles.left_panel}>
                <div className={styles.progress}>
                <div className={styles.progress_item}>
                    <div className={styles.progress1}>
                    <Progress type="dashboard" percent={0} />
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
                    <Progress type="dashboard" percent={0} />
                    </div>
                    <div className={styles.progress_text}> 
                        Защита личных <br/>цифровых ресурсов
                    </div>
                </div>
                <div className={styles.progress_item}>
                    <div className={styles.progress1}>
                    <Progress type="dashboard" percent={0} />
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
                        <img src="https://i.ibb.co/7vS6Zs5/2023-12-09-210134072.png" alt="2023-12-09-210134072"/>
                    </div>
                </div>
            </div>
            <div className={styles.right_panel}>
                <div className={styles.achieve}>
                    <div className={styles.ach_text}>
                        Витрина достижений 
                    </div>
                    <div className={styles.row_img}>
                    <img src="https://i.ibb.co/gt2695K/2023-12-09-203745042.png" alt="2023-12-09-203745042"/>
                    <img src="https://i.ibb.co/gt2695K/2023-12-09-203745042.png" alt="2023-12-09-203745042"/>
                    <img src="https://i.ibb.co/gt2695K/2023-12-09-203745042.png" alt="2023-12-09-203745042"/>
                    </div>
                    <div className={styles.row_img}>
                    <img src="https://i.ibb.co/gt2695K/2023-12-09-203745042.png" alt="2023-12-09-203745042"/>
                    <img src="https://i.ibb.co/gt2695K/2023-12-09-203745042.png" alt="2023-12-09-203745042"/>
                    <img src="https://i.ibb.co/gt2695K/2023-12-09-203745042.png" alt="2023-12-09-203745042"/>
                    </div>
                    <div className={styles.row_img}>
                    <img src="https://i.ibb.co/gt2695K/2023-12-09-203745042.png" alt="2023-12-09-203745042"/>
                    <img src="https://i.ibb.co/gt2695K/2023-12-09-203745042.png" alt="2023-12-09-203745042"/>
                    <img src="https://i.ibb.co/gt2695K/2023-12-09-203745042.png" alt="2023-12-09-203745042"/>
                    </div>
                    <div className={styles.row_img}>
                    <img src="https://i.ibb.co/gt2695K/2023-12-09-203745042.png" alt="2023-12-09-203745042"/>
                    <img src="https://i.ibb.co/gt2695K/2023-12-09-203745042.png" alt="2023-12-09-203745042"/>
                    <img src="https://i.ibb.co/gt2695K/2023-12-09-203745042.png" alt="2023-12-09-203745042"/>
                    </div>
                    

                    
                </div>
            </div>
        
        </div>
        
    )
}

export default Statistics
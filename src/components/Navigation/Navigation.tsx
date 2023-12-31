import React, {FC, useState} from 'react';
import {Modal} from 'antd';

import styles from './Navigation.module.scss'
import Settings from "../Settings/Settings";
import {Link, useNavigate} from "react-router-dom";

import {userStore} from "../../stores/userStore/userStore";
import {lessonStore} from "../../stores/lessonStore/lessonsSrote";
import {testStore} from "../../stores/testsStore/testStore";


const Navigation: FC = () => {
    const [isSettings, setIsSettings] = useState(false)
    const navigate = useNavigate();

    const logoutHandler = () => {
        userStore.setIsToken(false)
        userStore.setToken('')
        navigate('/')
    }

    const openCourseList = () => {
        lessonStore.setShowLesson(false)
        testStore.setIsTest(false)
    }

    return (
        <div className={styles.navigation}>
            <div className={styles.wrapper}>
                <img src="https://i.ibb.co/XzHDSTS/image.png" alt="image"/>
                <Link className={styles.logoLink} to='/' onClick={(prev) =>openCourseList()}>
                    кибертест
                </Link>
            </div>
            <div className={styles.wrapper}>
                <Link className={styles.settings} to='/statistics'>
                    Статистика
                </Link>
                <div className={styles.settings} onClick={(prev) => setIsSettings(true)}>
                    Настройки
                </div>
                <div className={styles.settings} onClick={(prev) => logoutHandler()}>
                    Выйти
                </div>
            </div>
            {
                isSettings &&
                <Modal
                    title="Настройки"
                    centered
                    open={isSettings}
                    onOk={() => setIsSettings(false)}
                    onCancel={() => setIsSettings(false)}
                >
                    <Settings/>
                </Modal>
            }
        </div>
    )
}

export default Navigation
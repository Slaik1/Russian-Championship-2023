import React, {FC, useState} from 'react';
import {Switch} from "antd";
import {userStore} from "../../stores/userStore/userStore";
import { observer } from 'mobx-react-lite';
import styles from "../Settings/Settings.module.scss";

const Settings:FC = () => {

    const clickHandler = (value:boolean) => {
        userStore.setIsChild(value)

        console.log(value)
    }

    return (
        <div className={styles.wrapper}>
            Режим ученика
            <Switch title='Режим ученика' defaultChecked onClick={(el) => clickHandler(el)}/>
        </div>
    );
};

export default observer(Settings);
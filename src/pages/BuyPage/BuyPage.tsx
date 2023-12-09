import React from 'react';
import styles from './BuyPage.module.scss'
import {BASE_URL} from "../../constants/global";

const BuyPage = () => {
    return (
        <div className={styles.wrapper}>
            <img src='/thanks.png' alt=""/>
            Спасибо за покупку
        </div>
    );
};

export default BuyPage;
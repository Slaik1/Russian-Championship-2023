import {Spin} from "antd";
import {observer} from "mobx-react-lite";
import {FC, useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";

import '../../accets/styles/index.scss';
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import 'antd/dist/reset.css';
import Navigation from "../Navigation/Navigation";
import Registration from "../Registration/Registration";

import styles from "./App.module.scss"
import AsidePanel from "../AsidePanel/AsidePanel";


const App: FC = () => {
    // const { isAuth, isAppReady } = rootStore.userStore;
    // const { initLoaders } = rootStore.filmsStore;
    const isAppReady = true
    const isAuth = true

    //useAuthorization(isAuth)

    useEffect(() => {
        if (!isAuth || !isAppReady) return;

    }, [isAuth, isAppReady])

    if (!isAppReady) return (
        <div>
            {/*<Background />*/}
            <div className={styles.spin_wrapper}>
                <Spin size='large'/>
            </div>
        </div>
    )

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={
                    <HomePage/>
                }
                />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default observer(App);

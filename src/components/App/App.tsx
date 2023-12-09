import {Spin} from "antd";
import {observer} from "mobx-react-lite";
import {FC, useEffect, useState} from "react";
import {Routes, Route, useNavigate} from "react-router-dom";

import '../../accets/styles/index.scss';
import AuthService from "../../api/AuthService";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import 'antd/dist/reset.css';

import {userStore} from "../../stores/userStore/userStore";
import styles from "./App.module.scss"
import StartPage from "../../pages/StartPage/StartPage";
import BuyPage from "../../pages/BuyPage/BuyPage";
import StatisticsPage from "../../pages/StatisticsPage/StatisticsPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";


const App: FC = () => {
    const [isAppReady, setIsAppReady] = useState(false)
    const authService = new AuthService()
    const navigate = useNavigate();

    const checkAuth = async () => {
        setIsAppReady(false)

        if (userStore.isToken){
            setIsAppReady(true)

            return
        }

        let isTokenExists

        try {
            const token = userStore.getToken()

            if (token) {
                isTokenExists = await authService.user(String(token))

                if (isTokenExists !== null)
                    userStore.setIsToken(true)

            } else {
                userStore.setIsToken(false)
            }
        } catch (e) {
            userStore.setIsToken(false)
            navigate("/");
        } finally {
            setIsAppReady(true)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [userStore.isToken])

    if (!isAppReady) return (
        <div>
            <div className={styles.spin_wrapper}>
                <Spin size='large'/>
            </div>
        </div>
    )

    if (!userStore.isToken) {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="*" element={<StartPage/>}/>
                </Routes>
            </div>
        );
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/welcome" element={<StartPage/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/buy" element={<BuyPage/>}/>
                <Route path="/statistics" element={<StatisticsPage/>}/>
                <Route path="*" element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default observer(App);

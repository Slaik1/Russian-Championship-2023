import {FC, useState} from 'react';
import {Modal} from 'antd';

import styles from './Navigation.module.scss'
import Settings from "../Settings/Settings";
import {Link} from "react-router-dom";

const Navigation: FC = () => {
    const [isSettings, setIsSettings] = useState(false)


    return (
        <div className={styles.navigation}>
            <Link to='/'>
                кибертест
            </Link>
            <div className={styles.settings} onClick={(prev) => setIsSettings(true)}>
                Настройки
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
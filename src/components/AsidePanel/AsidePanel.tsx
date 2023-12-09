import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { Menu, type MenuProps} from "antd";
import styles from './AsidePanel.module.scss'

type MenuItem = Required<MenuProps>['items'][number];

const AsidePanel = () => {

    function getItem(
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem('Курс ИБ', '1', <AppstoreOutlined />, [
            getItem('Тесты', '2', null, [getItem('Тест 1', '4'), getItem('Тест 2', '6')]),
            getItem('Уроки', '3', null, [getItem('Урок 1', '5'), getItem('Урок 2', '7')]),
        ]),

        getItem('Курс 2', '8', <AppstoreOutlined />, [
            getItem('Тесты', '9', null, [getItem('Тест 1', '11'), getItem('Тест 2', '13')]),
            getItem('Уроки', '10', null, [getItem('Урок 1', '12'), getItem('Урок 2', '14')]),
        ]),

        getItem('Курс 3', '15', <AppstoreOutlined />, [
            getItem('Тесты', '16', null, [getItem('Тест 1', '18'), getItem('Тест 2', '20')]),
            getItem('Уроки', '17', null, [getItem('Урок 1', '19'), getItem('Урок 2', '21')]),
        ]),
    ];

    return (
        <div className={styles.wrapper}>
                    <Menu
                        style={{height: '100%'}}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                        className={styles.menue}
                    />
        </div>
    );
};

export default AsidePanel;
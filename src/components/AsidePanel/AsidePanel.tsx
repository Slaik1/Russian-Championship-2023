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
        getItem('Курс 1', 'sub1', <AppstoreOutlined />, [
            getItem('Урок 1', '1'),
            getItem('Урок 2', '2'),
            getItem('Урок 3', '3'),
            getItem('Урок 4', '4'),
        ]),

        getItem('Курс 2', 'sub2', <AppstoreOutlined />, [
            getItem('Урок 5', '5'),
            getItem('Урок 6', '6'),
            getItem('Подурок', 'sub3', null, [getItem('Урок', '7'), getItem('Option 8', '8')]),
        ]),

        getItem('Курс 3', 'sub4', <AppstoreOutlined />, [
            getItem('Урок 9', '9'),
            getItem('Урок 10', '10'),
            getItem('Урок 11', '11'),
            getItem('Урок 12', '12'),
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
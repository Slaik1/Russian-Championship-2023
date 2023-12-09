import React from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu, type MenuProps } from "antd";
import styles from './AsidePanel.module.scss';

type MenuItem = Required<MenuProps>['items'][number];

const AsidePanel = () => {
    const items: MenuItem[] = [
        {
            key: '1',
            icon: <AppstoreOutlined />,
            label: 'Курс ИБ',
            children: [
                { key: '2', label: 'Тесты', children: [{ key: '4', label: 'Тест 1' }, { key: '6', label: 'Тест 2' }] },
                { key: '3', label: 'Уроки', children: [{ key: '5', label: 'Урок 1' }, { key: '7', label: 'Урок 2' }] },
            ],
        },
        {
            key: '8',
            icon: <AppstoreOutlined />,
            label: 'Курс 2',
            children: [
                { key: '9', label: 'Тесты', children: [{ key: '11', label: 'Тест 1' }, { key: '13', label: 'Тест 2' }] },
                { key: '10', label: 'Уроки', children: [{ key: '12', label: 'Урок 1' }, { key: '14', label: 'Урок 2' }] },
            ],
        },
        {
            key: '15',
            icon: <AppstoreOutlined />,
            label: 'Курс 3',
            children: [
                { key: '16', label: 'Тесты', children: [{ key: '18', label: 'Тест 1' }, { key: '20', label: 'Тест 2' }] },
                { key: '17', label: 'Уроки', children: [{ key: '19', label: 'Урок 1' }, { key: '21', label: 'Урок 2' }] },
            ],
        },
    ];

    return (
        <div className={styles.wrapper}>
            <Menu
                style={{ height: '100%' }}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
                className={styles.menu}
            />
        </div>
    );
};

export default AsidePanel;

import React from 'react';
//eslint-disable-next-line
import type { CollapseProps } from 'antd';
//eslint-disable-next-line
import { Collapse } from 'antd';

import styles from './Test.module.scss'





const Test = () => {
    const items: CollapseProps['items'] = [
        {
          key: '1',
          label: 'Информационные системы, психологическое состояние пользователей',
          children: <p>Да</p>,
        },
        {
          key: '2',
          label: 'Компьютерные сети, базы данных',
          children: <p>Нет</p>,
        },
        {
          key: '3',
          label: 'Бизнес-ориентированные, коммерческие системы',
          children: <p>Нет</p>,
        },
        {
            key: '4',
            label: 'Бизнес-ориентированные, коммерческие системы',
            children: <p>Нет</p>,
          },
      ];


    return (
        <div className={styles.lesson}>
            <div className={styles.title}>Тест 1</div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>Основные объекты информационной безопасности:</div>

                    <Collapse items={items} defaultActiveKey={[]} />;
                    <div className={styles.buttonWrapper}>
                        {/* <Button className={styles.btn} type="primary" onClick={() => navigate('/registration')}>
                            Вернуться
                        </Button>
                        <Button className={styles.btn} type="primary" onClick={() => navigate('/registration')}>
                            Вперёд
                        </Button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
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
          label: 'КиберБезопасность2023',
          children: <p>Правильно! <br/>Этот пароль сочетает в себе буквы, цифры, и он довольно длинный, что делает его сложным для угадывания.</p>,
        },
        {
          key: '2',
          label: 'пароль',
          children: <p>Это слабый пароль. Так как используются только буквы</p>,
        },
        {
          key: '3',
          label: 'джерри1',
          children: <p>Это слабый пароль. Хороший паоль должен быть длиной хотябы 8 символов</p>,
        },
        {
            key: '4',
            label: '123456',
            children: <p>Это слабый пароль. Так как используются только цифры</p>,
          },
      ];


    return (
        <div className={styles.lesson}>
            <div className={styles.title}>Тест 1</div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>Какое слово считается хорошим паролем?</div>

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
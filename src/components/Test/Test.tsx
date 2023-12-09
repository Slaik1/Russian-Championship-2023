import React from 'react';
import styles from './Test.module.scss'

const Test = () => {
    return (
        <div className={styles.lesson}>
            <div className={styles.title}>Тест 1</div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>Основные объекты информационной безопасности:</div>

                    <div className={styles.questionsWrapper}>
                        <div>
                            <p>Информационные системы, психологическое состояние пользователей</p>
                        </div>
                        <div>
                            <p>Компьютерные сети, базы данных</p>
                        </div>
                    </div>  
                    <div className={styles.questionsWrapper}>
                        <div >
                            <p>Бизнес-ориентированные, коммерческие системы</p>
                        </div>
                        <div>
                            <p>Компьютерные сети, базы данных</p>
                        </div>
                    </div>
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
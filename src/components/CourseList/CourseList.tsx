import React from 'react';

import styles from "./CourseList.module.scss"
import {Card} from "antd";

const CourseList = () => {
    return (
        <div className={styles.wrapper}>
            <Card className={styles.card}
                  hoverable
                  cover={<img src="/img.png" alt="lflf"/>}
            >
                <Card.Meta title="Продвинутый тест по информационной безопасности" description="HTTP и HTTPS методы работы и разница между ними " />
            </Card>
            <Card className={styles.card}
                  hoverable
                  cover={<img src="/img.png" alt="lflf"/>}
            >
                <Card.Meta title="Продвинутый тест по информационной безопасности" description="HTTP и HTTPS методы работы и разница между ними " />
            </Card>
            <Card className={styles.card}
                  hoverable
                  cover={<img src="/img.png" alt="lflf"/>}
            >
                <Card.Meta title="Продвинутый тест по информационной безопасности" description="HTTP и HTTPS методы работы и разница между ними " />
            </Card>
            <Card className={styles.card}
                  hoverable
                  cover={<img src="/img.png" alt="lflf"/>}
            >
                <Card.Meta title="Продвинутый тест по информационной безопасности" description="HTTP и HTTPS методы работы и разница между ними " />
            </Card>
            <Card className={styles.card}
                  hoverable
                  cover={<img src="/img.png" alt="lflf"/>}
            >
                <Card.Meta title="Продвинутый тест по информационной безопасности" description="HTTP и HTTPS методы работы и разница между ними " />
            </Card>
        </div>
    );
};

export default CourseList;
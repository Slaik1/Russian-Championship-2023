import React from 'react';

import styles from "./CourseList.module.scss"
import {Card} from "antd";

const CourseList = () => {
    return (
        <div className={styles.wrapper}>
            <Card className={styles.card}
                  title='Информационная безопасность'
                  hoverable
                  cover={<img src="/img.png" alt="lflf"/>}
            >
                <Card.Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card className={styles.card}>Привет мирфвфывфывфывфывфывфывфыв</Card><Card className={styles.card}>Привет мирфвфывфывфывфывфывфывфыв</Card><Card className={styles.card}>Привет мирфвфывфывфывфывфывфывфыв</Card><Card className={styles.card}>Привет мирфвфывфывфывфывфывфывфыв</Card><Card className={styles.card}>Привет мирфвфывфывфывфывфывфывфыв</Card><Card className={styles.card}>Привет мирфвфывфывфывфывфывфывфыв</Card><Card className={styles.card}>Привет мирфвфывфывфывфывфывфывфыв</Card><Card className={styles.card}>Привет мирфвфывфывфывфывфывфывфыв</Card>
        </div>
    );
};

export default CourseList;
import {Button, Col, Divider, Form, Input, notification, Row} from 'antd';
import React, { FC, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from './Footer.module.scss'

const Footer: FC = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.footer}>
            <Row className={styles.table} gutter={[16, 8]}>
                <Col span={4}>
                    <div className={styles.title}>О нас</div>
                    <div><a href="" className={styles.link}>Курсы</a></div>
                </Col>
                <Col span={8}>
                    <div className={styles.title}>Условия и конфиденциальность</div>
                    <div><a href="" className={styles.link}>Политика</a></div>
                    <div><a href="" className={styles.link}>Правила сообщества</a></div>
                    <div><a href="" className={styles.link}>Условия</a></div>
                    <div><a href="" className={styles.link}>Конфиденциальность</a></div>
                </Col>
                <Col span={6}>
                    <div className={styles.title}>Помощь и поддержка</div>
                    <div><a href="" className={styles.link}>Справочный центр</a></div>
                    <div><a href="" className={styles.link}>Чат поддержки</a></div>
                </Col>
                <Col span={6}>
                    <div className={styles.title}>Мы в соцсетях</div>
                    <div><a href="" className={styles.link}>ВКонтакте</a></div>
                    <div><a href="" className={styles.link}>Telegram</a></div>
                    <div><a href="" className={styles.link}>Блог</a></div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
import React, {useEffect, useState} from 'react';
import {AppstoreOutlined} from '@ant-design/icons';
import {Menu, type MenuProps} from "antd";
import styles from './AsidePanel.module.scss';
import CourseService from "../../api/CourseService";
import {Link, useNavigate} from "react-router-dom";
import { lessonStore } from "../../stores/lessonStore/lessonsSrote";
import { testStore } from '../../stores/testsStore/testStore';

type MenuItem = Required<MenuProps>['items'][number];


const AsidePanel = () => {

    const [tests, setTests] = useState([])
    const navigate = useNavigate()
    const courseService = new CourseService()

    const getTests = async () => {
        const testsData = await courseService.getTests()

        setTests(testsData)

        console.log(testsData)
    }

    const openLesson = () => {
        testStore.setIsTest(false)
        lessonStore.setShowLesson(true)
    }

    const openTest = () => {
        lessonStore.setShowLesson(false)
        testStore.setIsTest(true)
    }

    useEffect( () => {
        getTests()

    }, []);




    const getCreateItems = ():any => {
        const arr:any[] = []

        let index = 0

        if (tests) {
            tests.map((el) => {
                    arr.push(
                        {
                            key: index,
                            icon: <AppstoreOutlined/>,
                            label: 'Курс ИБ',
                            children: [
                                {
                                    key: index + 1,
                                    label: 'Тесты',
                                    children: [{key: index + 2, label: 'Тест 1', onClick: openTest}, {key: '6', label: 'Тест 2', onClick: openTest}]
                                },
                                {
                                    key: index + 3,
                                    label: 'Уроки',
                                    children: [{key: index + 4, label: 'Урок 1', onClick: openLesson}, {key: index + 5, label: 'Урок 2', onClick: openLesson}]
                                },
                            ],
                        }
                    )
                    index += 6
                }
            )
        }

        return arr
    }

    return (
        <div className={styles.wrapper} >
            <Menu
                style={{height: '100%'}}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={getCreateItems()}
                className={styles.menu}
            >
            </Menu>
        </div>
    );
};

export default AsidePanel;

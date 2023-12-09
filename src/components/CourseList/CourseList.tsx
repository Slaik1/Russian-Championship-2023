import {Button, Card, Modal} from "antd";
import React, {useEffect, useState} from 'react';

import styles from "./CourseList.module.scss"
import CourseService from "../../api/CourseService";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../../constants/global";
import {userStore} from "../../stores/userStore/userStore";
import {observer} from "mobx-react-lite";

interface Course {
    title: string;
    about: string;
    image: string;
    price: number;
    themes:[];
}


const CourseList = () => {

    const [isModal, setIsModal] = useState(false)
    const [cursesData, setCursesData] = useState<Course[]>([])
    const [courseId, setCourseId] = useState(-1)
    const courseService = new CourseService()
    const navigate = useNavigate()

    const getCurses = async () => {
        const cursesList = await courseService.getAllCurses()

        setCursesData(cursesList)
        console.log(cursesList)
    }

    const buyHandler = () => {
        setIsModal(false)
        navigate('/buy')
    }

    const openModalHandler = (id: number) => {
        setIsModal(true)
        setCourseId(id)
    }

    const getButtons = () => {
        const arr =
            [
                <Button key="cansel" onClick={() => setIsModal(false)}>
                    Отмена
                </Button>,
                <Button key="submit" type="primary" onClick={buyHandler}>
                    Купить
                </Button>,
            ]

        if (Number(cursesData[courseId].price) === 0 || userStore.isChild)
            arr.splice(1,1)

        return arr
    }

    useEffect(() => {
        getCurses()
    }, []);


    // @ts-ignore
    return (
        <div className={styles.wrapper}>

            {
                cursesData.map((el: any, i) =>
                    <Card
                        key={i}
                        className={styles.card}
                        onClick={() => openModalHandler(i)}
                        hoverable
                        cover={<img src={BASE_URL + el.image} alt="lflf"/>}
                    >
                        <Card.Meta
                            title={el.title}
                            description={el.about}
                        />
                    </Card>
                )
            }
            {
                isModal &&
                <Modal
                    title={cursesData[courseId].title}
                    centered
                    open={isModal}
                    onOk={() => setIsModal(false)}
                    onCancel={() => setIsModal(false)}
                    footer={() => getButtons()}
                >
                    {
                        cursesData ?
                            <div className={styles.cardWrapper}>
                                <img src={BASE_URL + cursesData[courseId].image} alt=""/>
                                <p>{cursesData[courseId].about}</p>
                                <p>Темы курса</p>
                                {cursesData[courseId].themes.map((el, i) =>
                                    <p className={styles.themes} key={i}>{el}</p>
                                )}
                                {Number(cursesData[courseId].price) !== 0 &&
                                    <p>Цена: {cursesData[courseId].price} руб.</p>
                                }
                            </div>
                            :
                            ''
                    }
                </Modal>
            }
        </div>
    );
};

export default observer(CourseList);
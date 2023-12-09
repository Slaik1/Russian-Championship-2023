import {Button, Card, Modal} from "antd";
import React, {useEffect, useState} from 'react';

import styles from "./CourseList.module.scss"
import CourseService from "../../api/CourseService";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../../constants/global";


const CourseList = () => {

    const [isModal, setIsModal] = useState(false)
    const [isBuyModal, setBuyIsModal] = useState(false)
    const [cursesData, setCursesData] = useState([])
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

    useEffect(() => {
        getCurses()
    }, []);

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
                    title="Курс Этические взломчики"
                    centered
                    open={isModal}
                    onOk={() => setIsModal(false)}
                    onCancel={() => setIsModal(false)}
                    footer={[
                        <Button key="cansel" onClick={() => setIsModal(false)}>
                            Отмена
                        </Button>,
                        <Button key="submit" type="primary" onClick={buyHandler}>
                            Купить
                        </Button>,
                    ]}
                >

                </Modal>
            }
        </div>
    );
};

export default CourseList;
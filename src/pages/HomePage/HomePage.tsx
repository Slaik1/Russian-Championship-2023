import {FC} from 'react';

import styles from './HomePage.module.scss'

import AsidePanel from "../../components/AsidePanel/AsidePanel";
import {Layout} from "antd";
import Navigation from "../../components/Navigation/Navigation";
import {observer} from "mobx-react-lite";
import CourseList from "../../components/CourseList/CourseList";

import Lesson from "../../components/Lesson/Lesson";
import {lessonStore} from "../../stores/lessonStore/lessonsSrote";

const HomePage: FC = () => {

    return (
        <Layout>
            <Layout.Header style={{padding: '0'}}><Navigation/></Layout.Header>
            <Layout hasSider>
                <Layout.Sider><AsidePanel/></Layout.Sider>
                <Layout.Content>
                    <div className={styles.container}>
                        {
                            lessonStore.showLesson
                                ?
                                <Lesson/>
                                :
                                <CourseList/>
                        }
                    </div>
                </Layout.Content>
            </Layout>
        </Layout>
    )
}

export default observer(HomePage)
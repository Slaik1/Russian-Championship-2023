import { FC } from 'react';

import Statistics from "../../components/Statistics/Statistics";
import {Layout} from "antd";
import Navigation from "../../components/Navigation/Navigation";
import AsidePanel from "../../components/AsidePanel/AsidePanel";
import styles from "../StatisticsPage/StatisticsPage.module.scss";
import {curseStore} from "../../stores/lessonStore/lessonsSrote";
import Lesson from "../../components/Lesson/Lesson";
import CourseList from "../../components/CourseList/CourseList";

const StatisticsPage:FC = () => {
    return (
        <Layout>
            <Layout.Header style={{padding: '0'}}><Navigation/></Layout.Header>
            <Layout hasSider>
                <Layout.Sider><AsidePanel/></Layout.Sider>
                <Layout.Content>
                    <div className={styles.container}>
                        <Statistics/>
                    </div>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default StatisticsPage;
import { FC } from 'react';

import Lesson from "../../components/Lesson/Lesson";
import {Layout} from "antd";
import Navigation from "../../components/Navigation/Navigation";
import AsidePanel from "../../components/AsidePanel/AsidePanel";
import styles from "../LessonPage/LessonPage.module.scss";

const LessonPage:FC = () => {
    return (
        <Layout>
            <Layout.Header style={{padding: '0'}}><Navigation/></Layout.Header>
            <Layout hasSider>
                <Layout.Sider><AsidePanel/></Layout.Sider>
                <Layout.Content>
                    <div className={styles.container}>
                        <Lesson/>
                    </div>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default LessonPage;
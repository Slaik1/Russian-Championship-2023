import { FC } from 'react';

import  styles from './HomePage.module.scss'
import CourseList from "../../components/CourseList/CourseList";
import AsidePanel from "../../components/AsidePanel/AsidePanel";

const HomePage: FC = () => {
	return (
		<div className={styles.container}>
			<AsidePanel/>
			<CourseList/>
		</div>
	)
}

export default HomePage
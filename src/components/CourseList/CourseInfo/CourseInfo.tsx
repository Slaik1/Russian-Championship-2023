import React, {FC} from 'react';

import styles from './CourseInfo.module.scss'
interface CourseInfoProps  {
    title: string,
    about: string,
    price: number,
    image: string
}


const CourseInfo:FC<CourseInfoProps> = ({title, about, image, price}) => {

    return (
        <div className={styles.wrapper}>
            <img src={image} alt=""/>

            <p></p>
        </div>
    );
};

export default CourseInfo;
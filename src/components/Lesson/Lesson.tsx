import {Button} from 'antd';
import React, { FC } from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Lesson.module.scss'

const Lesson = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.lesson}>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.textWrapper}>
                        <div className={styles.title}>Безопасность прежде всего!</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, doloremque fugiat fugit
                            ipsam minus pariatur quae! Commodi dolorem doloribus error eveniet in maiores officiis.
                            Aliquam animi aperiam consectetur consequuntur dignissimos, distinctio dolor doloremque
                            eaque enim eos ipsum laboriosam libero magnam maiores, molestias optio perspiciatis quo
                            rerum tenetur ut. Cupiditate dolor hic magni veritatis? Cupiditate dolores doloribus eaque
                            exercitationem fugiat nobis nulla pariatur, possimus, recusandae reiciendis repudiandae sunt
                            tempora, voluptatem voluptatum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, accusantium ad aspernatur
                            assumenda aut dolorum, est eveniet facere hic illum magnam nihil officia qui vero. Aut dolor
                            doloremque doloribus, in itaque labore laudantium quasi qui quidem quis repellat unde? A
                            alias asperiores consequatur, corporis enim eveniet magnam maiores molestias, nostrum
                            praesentium provident repellat similique tenetur ullam voluptas voluptatibus, voluptatum.
                            Commodi deleniti eveniet exercitationem hic iste maxime nihil, perferendis porro, quaerat
                            quas repudiandae sint, tenetur veniam voluptas voluptatem? Accusantium cumque eius est
                            expedita quis repellat ut vero voluptates! Consequuntur dolores earum excepturi libero
                            maiores mollitia officiis quam recusandae repudiandae velit.</p>
                        <p>  </p>
                    </div>
                    <div className={styles.image}>
                        <img src="https://i.ibb.co/hcR5pVB/image.png" alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lesson;
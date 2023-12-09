import {Button} from 'antd';
import React, { FC } from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Lesson.module.scss'

const Lesson = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.lesson}>
            <div className={styles.title}>Лекция 1</div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.title}>Защита личных данных в сети интернет</div>
                    <p> 1. Что такое личные данные? </p>
                    <p> Личные данные – это информация о нас, которую мы не хотим делить со всеми. К ним относятся имя,
                        фамилия, адрес, номер телефона, пароли, дата рождения и другие сведения, которые могут
                        использоваться, чтобы нас идентифицировать.</p>
                    <p> 2. Почему личные данные важны?</p>
                    <p> Наши личные данные могут использоваться для создания нашего виртуального портрета. Если
                        злоумышленник узнает слишком много о нас, это может быть опасно. Например, они могут
                        использовать эти данные, чтобы вас обмануть или даже навредить.</p>
                    <p> 3. Как беречь свои личные данные в интернете?</p>
                    <p> Как беречь свои личные данные в интернете?
                        Не давайте данные незнакомым людям: Не разглашайте свои личные данные в чатах, играх или на сайтах. Злоумышленники могут выдаваться за друзей, но настоящие друзья не будут просить вас о таких данных.
                        Пользуйтесь надежными паролями: Создавайте сложные пароли, которые трудно угадать. Не используйте личные данные, такие как
                        Обратите внимание на настройки конфиденциальности: Многие приложения и сайты предлагают настройки конфиденциальности. Убедитесь, что вы настроили свои аккаунты так, чтобы только те, кого вы знаете, могли видеть вашу информацию.
                        Сообщайте взрослым: Если что-то кажется вам странным или неприятным в интернете, всегда говорите об этом взрослым, т
                        Защита личных данных – это как невидимый плащ, который помогает нам оставаться в безопасности в интернете. Помните, что ваши данные – это ваше личное сокровище, и берегите его как зеницу ока. И помните, всегда лучше поделиться своими волнениями с взрослыми, чем оставаться в одиночестве.</p>
                    <div className={styles.image}>
                        <img src="https://i.ibb.co/hcR5pVB/image.png" alt="image"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, accusantium ad aspernatur
                        assumenda aut dolorum, est eveniet facere hic illum magnam nihil officia qui vero. Aut dolor
                        doloremque doloribus, in itaque labore laudantium quasi qui quidem quis repellat unde? A
                        alias asperiores consequatur, corporis enim eveniet magnam maiores molestias, nostrum
                        praesentium provident repellat similique tenetur ullam voluptas voluptatibus, voluptatum.
                        Commodi deleniti eveniet exercitationem hic iste maxime nihil, perferendis porro, quaerat
                        quas repudiandae sint, tenetur veniam voluptas voluptatem? Accusantium cumque eius est
                        expedita quis repellat ut vero voluptates! Consequuntur dolores earum excepturi libero
                        maiores mollitia officiis quam recusandae repudiandae velit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ducimus enim explicabo
                        ipsum labore nemo quia quo ratione sequi tenetur.</p>

                </div>
            </div>
        </div>
    );
};

export default Lesson;
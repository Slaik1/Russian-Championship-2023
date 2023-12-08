import { FC } from 'react';
import { Link } from 'react-router-dom';


import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
				<div className={styles.content}>
					<Link to='/random'>
						Random
					</Link>
					<Link to='/sdasdas'>
					sdasdas
					</Link>
				</div>
		</div>
	)
}

export default Navigation
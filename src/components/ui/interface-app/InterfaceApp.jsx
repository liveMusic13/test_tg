import { useState } from 'react';
import styles from './InterfaceApp.module.scss';

const InterfaceApp = ({ isScrolling }) => {
	const [buttonTarget, setButtonTarget] = useState('Заказы');

	const onClick = button => {
		setButtonTarget(button);
	};

	return (
		<div
			className={`${styles.block__interface} ${
				isScrolling ? styles.hidden__interface : ''
			}`}
		>
			{/* <Link to={'/'}>
				<img src='/orders.svg' alt='orders' />
			</Link>
			<Link to={'/'}>
				<img src='/money.svg' alt='money' />
			</Link>
			<Link to={'/'}>
				<img src='/squer.svg' alt='squer' />
			</Link> */}
			<button
				className={styles.button}
				onClick={() => onClick('Заказы')}
				style={buttonTarget === 'Заказы' ? { color: '#2c2c2c' } : {}}
			>
				<img src='/orders.svg' alt='orders' />
				Заказы
			</button>
			<button
				className={styles.button}
				onClick={() => onClick('Деньги')}
				style={buttonTarget === 'Деньги' ? { color: '#2c2c2c' } : {}}
			>
				<img src='/money.svg' alt='money' />
				Деньги
			</button>
			<button
				className={styles.button}
				onClick={() => onClick('Ответственность')}
				style={buttonTarget === 'Ответственность' ? { color: '#2c2c2c' } : {}}
			>
				<img src='/squer.svg' alt='squer' />
				Ответственность
			</button>
		</div>
	);
};

export default InterfaceApp;

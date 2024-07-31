import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<button className={styles.button__back}>&lt; Назад</button>
			<div className={styles.block__title}>
				<h1>Title1</h1>
				<p>бот</p>
			</div>
			<button className={styles.button__settings}>
				<img src='/settings.svg' alt='settings' />
			</button>
		</header>
	);
};

export default Header;

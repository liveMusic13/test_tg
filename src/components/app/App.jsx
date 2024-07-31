import { useState } from 'react';
import Content from '../content/Content';
import Header from '../header/Header';
import InterfaceApp from '../ui/interface-app/InterfaceApp';
import styles from './App.module.scss';

const App = () => {
	const [isScrolling, setIsScrolling] = useState(false);

	return (
		<div className={styles.wrapper}>
			<Header />
			{/* <div className={styles.block__content}>
				<button
					className={`${styles.open__browser} ${
						isScrolling ? styles.hidden__browser : ''
					}`}
				>
					<img src='/chat.svg' alt='chat' />
				</button>
				<button className={styles.button__chat}>
					<img
						className={`${isScrolling ? styles.scroll__image : ''}`}
						src='/chat.svg'
						alt='chat'
					/>
					<span
						className={`${styles['chat-text']} ${
							isScrolling ? styles.hidden : ''
						}`}
					>
						Чат
					</span>
				</button>
				<h1 className={styles.title}>
					“Проектирование и авава ав ав конструирование систем безопастности
					частной сети”
				</h1>
				<div className={styles.block__buttons}>
					<button
						onClick={() => onClick('Моя задача')}
						className={`${buttonTarget === 'Моя задача' ? styles.active : ''}`}
					>
						Моя задача
					</button>
					<button
						onClick={() => onClick('Я отработал')}
						className={`${buttonTarget === 'Я отработал' ? styles.active : ''}`}
					>
						Я отработал
					</button>
				</div>
				<div className={styles.block__description}>
					<p className={styles.techno}>
						Нужно разработать систему безопасности частной сети ООО
						<span>"ТехноБезопасность".</span>
					</p>
					<p className={styles.goal}>
						Цель проекта —{' '}
						<span>
							обеспечить высокий уровень безопасности сети, минимизировать риски
							утечек данных и защитить информацию от несанкционированного
							доступа.
						</span>
					</p>
					<ul>
						<p>Основные задачи включают: </p>
						<li>Фудит текущей системы безопасности.</li>
						<li>
							Внедрение контроля доступа по MAC-адресам и двухфакторной
							аутентификации.
						</li>
						<li>Настройку фаерволов и систем предотвращения вторжений.</li>
					</ul>
					<ol>
						<li>
							Обеспечение мониторинга сетевой активности и шифрование данных.
						</li>
						<li>Обучение персонала основам информационной безопасности. </li>
					</ol>
					<p>
						Срок выполнения работ — <span>8 недель,</span> бюджет —{' '}
						<span>1,800,000 руб.</span>
					</p>
				</div>
				<div className={styles.blocks}>
					{arrayBlocks.map(block => (
						<div key={block} className={styles.block}></div>
					))}
				</div>
			</div> */}
			<Content isScrolling={isScrolling} setIsScrolling={setIsScrolling} />
			<InterfaceApp isScrolling={isScrolling} />
		</div>
	);
};

export default App;

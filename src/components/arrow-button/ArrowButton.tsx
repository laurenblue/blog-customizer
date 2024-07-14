import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

interface IArrowButton {
	showMenu: boolean;
	onClick: OnClick;
	arrowButtonRef?: React.RefObject<HTMLDivElement>;
}

export const ArrowButton = ({
	showMenu,
	onClick,
	arrowButtonRef,
}: IArrowButton) => {
	return (
		<div
			onClick={onClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			ref={arrowButtonRef}
			className={clsx({
				[styles.container]: true,
				[styles.container_open]: showMenu,
			})}>
			<img
				src={arrow}
				alt='стрелка'
				className={clsx({
					[styles.arrow]: true,
					[styles.arrow_open]: showMenu,
				})}
			/>
		</div>
	);
};

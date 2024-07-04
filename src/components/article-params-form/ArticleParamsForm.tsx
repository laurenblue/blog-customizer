import { Button } from 'components/button';
import clsx from 'clsx';
import { ReactNode, FormEvent } from 'react';
import styles from './ArticleParamsForm.module.scss';

interface IArticleParamsForm {
	showMenu: boolean;
	arrowButton: ReactNode;
	children: ReactNode;
	onReset: () => void;
	onApply: () => void;
}

export const ArticleParamsForm = (props: IArticleParamsForm) => {
	const { showMenu, arrowButton, onReset, onApply, children } = props;
	return (
		<>
			{arrowButton}
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: showMenu,
				})}>
				<form
					className={styles.form}
					onSubmit={(evt: FormEvent<HTMLFormElement>) => evt.preventDefault()}>
					{children}
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={onReset} />
						<Button title='Применить' type='submit' onClick={onApply} />
					</div>
				</form>
			</aside>
		</>
	);
};

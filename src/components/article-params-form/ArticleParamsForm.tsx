/*import { ArrowButton } from 'components/arrow-button';*/
import { Button } from 'components/button';
import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './ArticleParamsForm.module.scss';

interface IArticleParamsForm {
	showMenu: boolean;
	arrowButton: ReactNode;
}

export const ArticleParamsForm = ({
	showMenu,
	arrowButton,
}: IArticleParamsForm) => {
	return (
		<>
			{arrowButton}
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: showMenu,
				})}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};

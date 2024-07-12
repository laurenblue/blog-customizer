import styles from './App.module.scss';
import { defaultArticleState } from 'src/constants/articleProps';
import { CSSProperties, useState } from 'react';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';

export const App = () => {
	const [pageStyle, setPageStyle] = useState({
		fontFamilyOption: defaultArticleState.fontFamilyOption.value,
		fontSizeOption: defaultArticleState.fontSizeOption.value,
		fontColor: defaultArticleState.fontColor.value,
		contentWidth: defaultArticleState.contentWidth.value,
		backgroundColor: defaultArticleState.backgroundColor.value,
	});
	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': pageStyle.fontFamilyOption,
					'--font-size': pageStyle.fontSizeOption,
					'--font-color': pageStyle.fontColor,
					'--container-width': pageStyle.contentWidth,
					'--bg-color': pageStyle.backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm setPageStyle={setPageStyle} />
			<Article />
		</div>
	);
};

import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import clsx from 'clsx';
import './styles/index.scss';
import styles from './styles/index.module.scss';
import {
	FormTitles,
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from './constants/articleProps';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { ArrowButton } from './components/arrow-button';
import { Select } from './components/select';
import { Text } from './components/text';
import { RadioGroup } from './components/radio-group';
import { Separator } from './components/separator';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [pageStyle, setPageStyle] = useState({
		'--font-family': defaultArticleState.fontFamilyOption.value,
		'--font-size': defaultArticleState.fontSizeOption.value,
		'--font-color': defaultArticleState.fontColor.value,
		'--container-width': defaultArticleState.contentWidth.value,
		'--bg-color': defaultArticleState.backgroundColor.value,
	});

	const [state, setState] = useState({
		showMenu: false,
		fontFamily: defaultArticleState.fontFamilyOption,
		fontSize: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});

	const resetStyle = () => {
		setState({
			...state,
			fontFamily: defaultArticleState.fontFamilyOption,
			fontSize: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			contentWidth: defaultArticleState.contentWidth,
			backgroundColor: defaultArticleState.backgroundColor,
		});
		setPageStyle({
			'--font-family': defaultArticleState.fontFamilyOption.value,
			'--font-size': defaultArticleState.fontSizeOption.value,
			'--font-color': defaultArticleState.fontColor.value,
			'--container-width': defaultArticleState.contentWidth.value,
			'--bg-color': defaultArticleState.backgroundColor.value,
		});
	};

	const applyStyle = () => {
		setPageStyle({
			'--font-family': state.fontFamily.value,
			'--font-size': state.fontSize.value,
			'--font-color': state.fontColor.value,
			'--container-width': state.contentWidth.value,
			'--bg-color': state.backgroundColor.value,
		});
	};

	return (
		<div className={clsx(styles.main)} style={pageStyle as any}>
			<ArticleParamsForm
				showMenu={state.showMenu}
				arrowButton={
					<ArrowButton
						showMenu={state.showMenu}
						onClick={() =>
							setState((prevState) => ({
								...prevState,
								showMenu: !prevState.showMenu,
							}))
						}
					/>
				}
				onReset={resetStyle}
				onApply={applyStyle}>
				<Text as='h2' size={31} weight={800} uppercase>
					Задайте параметры
				</Text>
				<Select
					title={FormTitles.fontFamily}
					placeholder={FormTitles.fontFamily}
					options={fontFamilyOptions}
					selected={state.fontFamily}
					onChange={(option: OptionType) =>
						setState({ ...state, fontFamily: option })
					}
				/>
				<RadioGroup
					options={fontSizeOptions}
					selected={state.fontSize}
					name='fontSize'
					title={FormTitles.fontSize}
					onChange={(option: OptionType) =>
						setState({ ...state, fontSize: option })
					}
				/>
				<Select
					title={FormTitles.fontColor}
					placeholder={FormTitles.fontColor}
					options={fontColors}
					selected={state.fontColor}
					onChange={(option: OptionType) =>
						setState({ ...state, fontColor: option })
					}
				/>
				<Separator />
				<Select
					title={FormTitles.backgroundColor}
					placeholder={FormTitles.backgroundColor}
					options={backgroundColors}
					selected={state.backgroundColor}
					onChange={(option: OptionType) =>
						setState({ ...state, backgroundColor: option })
					}
				/>
				<Select
					title={FormTitles.contentWidth}
					placeholder={FormTitles.contentWidth}
					options={contentWidthArr}
					selected={state.contentWidth}
					onChange={(option: OptionType) =>
						setState({ ...state, contentWidth: option })
					}
				/>
			</ArticleParamsForm>
			<Article />
		</div>
	);
};

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

import { useEffect } from 'react';

interface IOutsideClickHook {
	showMenu: boolean;
	setshowMenu: (state: boolean) => void;
	asideRef: React.RefObject<HTMLElement>;
	arrowButtonRef: React.RefObject<HTMLElement>;
}

export function outsideClick({
	asideRef,
	arrowButtonRef,
	showMenu,
	setshowMenu,
}: IOutsideClickHook) {
	function handleClick(evt: MouseEvent) {
		const { target } = evt;
		if (
			target instanceof Node &&
			!asideRef.current?.contains(target) &&
			!arrowButtonRef.current?.contains(target)
		) {
			showMenu && setshowMenu(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, [showMenu]);
}

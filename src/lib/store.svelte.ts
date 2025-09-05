let open = $state(false);
let src = $state('');

export function getLightbox() {
	return {
		get open() {
			return open;
		},
		get src() {
			return src;
		},
		show(newSrc: string) {
			open = true;
			src = newSrc;
		},
		hide() {
			open = false;
			setTimeout(() => {
				src = '';
			}, 300);
		}
	};
}

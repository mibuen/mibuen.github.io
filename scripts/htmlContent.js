// content for main list
import { top, bottom, middleMfg, midItems } from './htmlElements.js';

const middleContent = (part) => {
	if (part.origen === 'manufactured') {
		return middleMfg(part);
	}
	if (part.origen === 'purchased') {
		return midItems(part);
	}
};

const liPurElem = (partData) => {
	const htmlContent = partData.map((part) => {
		const x = `<div class="card blue-grey white-text darken-1">
    ${top(part)}${middleContent(part)}${bottom(part)}
    </div>`;

		return x;
	});
	return htmlContent.join('');
};

export { liPurElem };

const classFour = `class="col s12 m4"`;
const classThree = `class="col s12 m3"`;
const threeCenter = `class="col s12 m3 center-align"`;
const threeRight = `class="col s12 m3 right-align"`;
const fourRight = `class="col s12 m4 right-align"`;
const fourCenter = `class="col s12 m4 center-align"`;

const top = (part) => `<div class="section row ">
<h6 class="col s12 m3">SKU: ${part.sku}</h6>
<h6 class="col s12 m6">Description: ${part.description}</h6>
<h6 class="col s12 m3">Origen: ${part.origen}</h6>
</div>`;

const bottom = (part) => {
	if (part.origen === 'purchased') {
		return `<div class="card-action row">
    <span ${classThree}>Category: ${part.category}</span>
    <span ${classThree}>Material: ${part.material}</span>
    <span ${threeRight}><a href="#">Spec.${part.specFile}</a></span>
    <span ${threeRight}><a class="modal-trigger" href="#detail">Detail</a></span>
    </div>`;
	}
	return `<div class="card-action row">
  <span ${classFour}>Type: ${part.type}</span>
  <span ${fourRight}> <a href="#">Drawing:${part.drawing}</a></span>
  <span ${fourRight}><a class="modal-trigger" href="#detail">Detail</a></span>
  </div>`;
};

const midItems = (part) => {
	const x =
		part.shape === 'rectangular'
			? `Width: ${part.widthIn}`
			: `Dia.: ${part.diameterIn}`;
	const thck = `<p ${threeCenter}>Thck.: ${part.thicknessIn}</p>`;
	const lg = `<p ${threeCenter}>Lenght: ${part.lengthIn}in</p>`;

	return `<div class="divider blue-grey lighten-2"></div>
  <div class="row">
    <h6 class="center-align">Dimensions</h6>
    <div>
    <p ${threeCenter}>${x}</p>${thck}${lg}
      <p class="col s12 m3 center-align">Weight: ${part.weightLbs}lbs</p>
    </div>
  </div>
    `;
};

const middleMfg = (part) => {
	const x =
		part.rawMaterial.shape === 'rectangular'
			? `Width: ${part.widthIn}`
			: `Dia.: ${part.rawMaterial.diameterIn}`;

	return ` <div class="divider grey lighten-1"></div>
    <div class="row">
      <h6 class="center-align">Dimensions</h6>
      <div>
        <p ${fourCenter}>${x}</p>
        <p ${fourCenter}>Thck: ${part.rawMaterial.thicknessIn}</p>
        <p ${fourCenter}>Cut Lenght:${part.lengthIn}</p>
        <p ${fourCenter}>Raw Mat Sku: ${part.rawMaterial.sku}</p>
        <p ${fourCenter}>Weight: ${part.blankWeightLbs}lbs</p>
        <p ${fourCenter}>Qty: ${part.rawMaterial.qty} ea</p>
      </div>
    </div>`;
};
export { top, bottom, middleMfg, midItems };

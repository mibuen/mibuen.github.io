'use strict';

const sideNav = () => {
  const options = {};
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems, options);
  return instances;
};
const modal = () => {
  const options = {};
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems, options);
  return instances;
};

export { sideNav, modal };

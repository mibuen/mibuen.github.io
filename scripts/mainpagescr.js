'use strict';
import { sideNav, modal } from './mainhelpers.js';
import { liPurElem} from './htmlContent.js';
import { fetchAllParts } from './fetchParts.js';

document.addEventListener('DOMContentLoaded', () => {
  sideNav();
  modal();
});

const allParts = document.querySelectorAll('.parts');
const logOut = document.querySelectorAll('.logout');
const ulPartsList = document.getElementById('maincontainer');


logOut.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('llave');
    window.location = 'index.html';
  });
});
// get parts main menu
allParts.forEach((ele) => {
  ele.addEventListener('click', async (e) => {
    e.preventDefault();
    const parts = await fetchAllParts();
    if(parts.statusCode === 401){
      ulPartsList.innerHTML = `<h5>${parts.message}, please login</h5>`;
     setTimeout(()=>{
      ulPartsList.innerHTML = '';
      window.location = 'index.html';
     },2000);
    return;
    }
    //console.log(parts)
    ulPartsList.innerHTML = liPurElem(parts);
    
  });
});

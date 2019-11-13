'use strict'; //use this for strong errors check

import actionPage from './modules/actionPage';
import addCart from './modules/addCart';
import filter from './modules/filter';
import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import togleCart from './modules/togleCart';
import togleCheckBox from './modules/togleCheckBox';

//async mean run me and than contiue, it must be declare when have data load in func before start work with data
(async function(){//structure whit auto load function
    const db = await getData();//await mean start me and wait me until i finish
    renderCards(db);
    renderCatalog();
    togleCheckBox();
    togleCart();
    addCart();
    actionPage();

}()); //cat balls function))

/*
getData().then((data) => {
    renderCards(data);
    renderCatalog();
    togleCheckBox();
    togleCart();
    addCart();
    actionPage();
});
    */

/*
how to run web pack:
1. check version: 'node -v' . if exist ok else install
2. check 'npm -v' if exist ok else install
3. 'sudo npm install -g jshint' (sudo on mac else without)
4. npm init -y
5. npm i webpack webpack-cli -D
6. sudo npm install -g npm
7. need to overide connection script.js to dist.main.js (new file)
8. 'npx webpack' to run code
9. all function in index.js put in src and one file for one function and write export default on each of them,
in index.js write 'import _name_function from '(directory('./modules/filter'))';'
if function called in more then one function need write - import _name_function from '(directory()./filter))'; - in each function where we call

*/


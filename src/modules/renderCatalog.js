import filter from './filter';

export default function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card');
    const catalogList = document.querySelector('.catalog-list');
    const catalogWrapper = document.querySelector('.catalog');
    const catalogBtn = document.querySelector('.catalog-button');
    const categories = new Set();
    const filterTitle = document.querySelector('.filter-title h5');//change filter title to chooser catalog

    cards.forEach((card) => {
        //console.dir(card.dataset.category);//like object
        categories.add(card.dataset.category);
    });

    categories.forEach((item) => {//categories in catalog button (3 categories)
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.appendChild(li);
    });

    const allLi = catalogList.querySelectorAll('li');//list of li in catalog button
    //const allLiOld = catalogList.getElementsByTagName('li');

    //console.log(allLi);
    //console.log(allLiOld);

    catalogBtn.addEventListener('click' , () => {
        if( catalogWrapper.style.display){
            catalogWrapper.style.display = '';
        } else {
            catalogWrapper.style.display = 'block';
        }

        if (event.target.tagName === 'LI') {
            /*
            cards.forEach((card) => {
                if (card.dataset.category === event.target.textContent) {
                    card.parentNode.style.display ='';
                } else {
                    card.parentNode.style.display = 'none';
                }
            });
            */
            allLi.forEach((elem) => {
                if(elem === event.target) {//check if presed on button we want - li in catalog
                    elem.classList.add('active');//add remove class active like flag if clicked we add class and that we know the class actived
                } else {
                    elem.classList.remove('active');//here we removing class flag
                }
            });
            filterTitle.textContent = event.target.textContent;//change filter title to choosen catalog
            filter();
        }
    });
// end catalog button
    //console.log(categories);
}
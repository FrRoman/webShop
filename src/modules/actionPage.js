import filter from './filter';

export default function actionPage() {
    const cards = document.querySelectorAll('.goods .card'), //all cards
        discountCheckbox = document.getElementById('discount-checkbox'), //box with sale
        goods = document.querySelector('.goods'), //cards
        min = document.getElementById('min'), //input min
        max = document.getElementById('max'), //input max
        search = document.querySelector('.search-wrapper_input'), //input search
        searchBtn = document.querySelector('.search-btn'); //btn search

    discountCheckbox.addEventListener('click', () => { //click on sales we write event to card show only with sale tag
        cards.forEach((card) => {
            if (discountCheckbox.checked) { //if checkbox is cheked than search cards with sale tag
                //console.log(new Boolean(card.querySelector('.card-sale')));//change type to boolean
                if (!card.querySelector('.card-sale')) { //if card not in sale than hide card from parrent
                    //card.parentNode.style.display ='none';//enable none
                    card.parentNode.remove(); //another way
                }
            } else {
                //card.parentNode.style.display ='';//when unchecked disable none
                goods.appendChild(card.parentNode); //another way
            }
        });
    });
    //price filter
    /*
        function filterPrice() {//not needed new func filter alterntive
            cards.forEach((card) => {
                const cardPrice = card.querySelector('.card-price');
                const price = parseFloat(cardPrice.textContent);//parse to float without 'p'
                //console.log(price);
                
                //console.log(min.value);
                //console.log(max.value);

                if ( (min.value && price <= min.value ) || ( max.value && price >= max.value )) {//check bigger than min or lower than max and man,max exist
                    card.parentNode.style.display = 'none';
                } else {
                    card.parentNode.style.display = '';
                }
            });
        }
    */

    //min.addEventListener('change' , filterPrice);//if function without () than he parsed when need else not parsed
    //max.addEventListener('change' , filterPrice);

    discountCheckbox.addEventListener('click', filter);
    min.addEventListener('change', filter); //if function without () than he parsed when need else not parsed
    max.addEventListener('change', filter);
    //end price filter

    //search
    searchBtn.addEventListener('click', () => { //click on search btn
        //const searchText = search.value;//get text from search bar
        //console.log('searchText: ', searchText);
        const searchText = new RegExp(search.value.trim(), 'i'); //convert to regular expresion and trim() - disable all after and before spaces.  falg 'i' disable register
        //console.log('searchText: ', searchText);
        cards.forEach((card) => {
            const title = card.querySelector('.card-title'); //get titles from cards to compare with searchText regular
            if (!searchText.test(title.textContent)) { //test check in reg if have this word if have return true
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
    });


    //end search
}
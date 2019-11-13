export default function addCart() {
    const cards = document.querySelectorAll('.goods .card'), //we can diclare wariable with ',' and not need to write any time the type
        //console.log(cards);
        cartWrapper = document.querySelector('.cart-wrapper'), //took all elements in trash - on start is empty
        cartEmpty = document.getElementById('cart-empty'), //in trash text that say the trash is empty
        countGoods = document.querySelector('.counter'); //update count of items in trash


    cards.forEach((card) => {
        const btn = card.querySelector('button');

        btn.addEventListener('click', () => {
            //console.log(card);
            const cardClone = card.cloneNode(true); //true - it clone with all context inside
            cartWrapper.appendChild(cardClone); //clone card to list
            showData();

            const removeBtn = cardClone.querySelector('.btn'); //from clone cart in wrapper 
            removeBtn.textContent = 'Remove from trash'; //chenge name of button clon cart in trash
            removeBtn.addEventListener('click', () => { //event on remove btn
                cardClone.remove(); //remove clone btn
                showData();
            });
        });
    });

    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card'), //all cards inside trash
            cardPrice = cartWrapper.querySelectorAll('.card-price'), //from all wrapper cart took price
            cardTotal = document.querySelector('.cart-total span'); //get total of all cart element
        countGoods.textContent = cardsCart.length;
        //console.log(cartWrapper);
        //console.log(cardPrice);
        let totalSum = 0; //sum all total items in wrapper
        cardPrice.forEach((elem) => { //
            //console.log(elem.textContent);
            //console.log(parseFloat(elem.textContent));
            totalSum += parseFloat(elem.textContent); //parseFloat ==> 1099.99$ to 1099.99 | parseInt ==> 1099.99 to 1099
            //console.log(total);
        });
        cardTotal.textContent = totalSum; //put total into span

        if (cardsCart.length !== 0) {
            cartEmpty.remove(); //remove messege trash empty

        } else {
            cartWrapper.appendChild(cartEmpty); //put messege empty in cart wrapper
        }
    }
}
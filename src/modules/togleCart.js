export default function togleCart() {

    const btnCart = document.getElementById('cart');
    const modelCart = document.querySelector('.cart');
    const closebtn = document.querySelector('.cart-close');
    //function() {} == () => {}
    btnCart.addEventListener('click', () => {
        modelCart.style.display = 'flex'; //for mid page window and verst
        //modelCart.style.backgroundColor = 'red';//if have style with two words like background-color in js you write backgroundColor
        //modelCart.style.cssText = 'display: flex; font-size: 30px;';//you can add style like in css file with cssText
        document.body.style.overflow = 'hidden'; //scroll off behind the trash
    });

    closebtn.addEventListener('click', () => {
        modelCart.style.display = 'none';
        document.body.style.overflow = ''; //scroll on
    });
}
export default function renderCards(data) {
    //console.log(data);
    const goodsWrapper = document.querySelector('.goods'); //took div with wrapper cards

    data.goods.forEach((good) => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4 col-xl-3'; //adding many classes and overide old | classList add only one class to exist(not overide)
        //${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''} ------short if(trinary)
        card.innerHTML = `
                <div class="card" data-category = "${good.category}">
                    ${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                    <div class="card-img-wrapper">
                        <span class="card-img-top"
                        
                            style="background-image: url('${good.img}')"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price" style = "${good.sale ? 'color: red' : ''}">${good.price} ₽</div>
                        <h5 class="card-title">${good.title}</h5>
                        <button class="btn btn-primary">В корзину</button>
                    </div>
                </div>
        `; //מרכאות הפוכות
        //for write code js in html ${____}
        goodsWrapper.appendChild(card);
    });
}
export default function togleCheckBox() {
    //type declaretion variable - var , let , const
    //var(like define) is have some problems and he old type , new and recommended is "let" or "const"

    //console.log(document);//put in console all tree of ouer document(html)
    //const checkbox = document.querySelector('#discount-checkbox');//one selector

    //let checkbox = document.getElementById('discount-checkbox');//alternative getting element by id
    //console.log(checkbox);//put checkbox tag in console
    /*
    checkbox.onchange = function() {//that method old and can't use two function on it becouse second overide firs
        console.log('test v on checkbox');
    };
    */
    /*
    checkbox.addEventListener('change' , function() {
        //console.log(this);
        //console.dir(this)//put this(checkbox) in console like object and can see all parameters(options) that it contain
        if (this.checked === true) {//=== - if it equal and same object type (recommended for use)
            //console.log('checked!');
            this.nextElementSibling.classList.add('checked');//add class to exist tag()html (not overide)
        } else {
            //console.log('unchecked');
            this.nextElementSibling.classList.remove('checked');//remove class from tag(html)
        }
    });
    */
    /*
    checkbox.addEventListener('change' , () => {//second method with arrow function. it have problem not existting ,this
        console.log('this');
    });
    */


    const checkbox = document.querySelectorAll('.filter-check_checkbox'); //for all checkboxes
    /*
    for ( let i = 0; i < checkbox.length; i++ ) {
        checkbox[i].addEventListener('change' , function() {
            if ( this.checked ) {
                this.nextElementSibling.classList.add('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    }*/
    //another way with forEach becouse use selector all
    //checkbox.forEach( () => {} ); //with row func
    checkbox.forEach(function (elem /*, i*/ ) {
        //console.log(elem);
        //console.log(i);
        elem.addEventListener('change', function () {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });

    });
}
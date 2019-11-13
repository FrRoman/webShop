export default function getData() { //work with json
    const goodsWrapper = document.querySelector('.goods'); //wrapper for out there error messege
    //console.log(fetch('../db/db.json'));
    //fetch('../db/db.json') //test end explain - https://jsonplaceholder.typicode.com/
    return fetch('../db/db.json')
        .then((response) => { // first then check data if it ok and second for work on data
            if (response.ok) { //check if data ok/success return true else false
                //console.log(response);
                return response.json(); //return type object to .then(data)
            } else {
                //throw new Error (response.status);//throw error. status is number error - 404,200
                throw new Error('The data not load succes, error: ' + response.status); //massage with error status
            }
        }) //.then(data => renderCards(data)) //show in console json style object
        .then((data) => {
            return data;
        })
        .catch(err => {
            console.warn(err);
            goodsWrapper.innerHTML = '<div style = " color:red; font-size: 30px; ">Ooops! some thing missing!</div>'; //put error for user
        });
}
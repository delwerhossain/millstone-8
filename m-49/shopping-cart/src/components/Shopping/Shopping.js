const addtoCard = (id) =>{
    let  shopArry = []
    let shopExst =localStorage.getItem('shopping')
    if (shopExst) {
        shopArry.push(id);
        console.log(shopArry);
    }
    else{
       localStorage.setItem('shopping' , shopArry)
       console.log('done set');
    }

}


export {addtoCard}
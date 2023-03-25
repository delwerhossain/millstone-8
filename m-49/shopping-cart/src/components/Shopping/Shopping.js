const addtoCard = (id) =>{
    let  shopArry = []
    id = 'product-' + id;
    let addcardCount = 0;
    let shopExst =localStorage.getItem(id)
    
    if (shopExst) {
        addcardCount ++;
        localStorage.setItem( id, addcardCount)
    }
    else{
       localStorage.setItem('shopping' , JSON.stringify(shopArry))
       console.log('done set');
    }


}


export {addtoCard}
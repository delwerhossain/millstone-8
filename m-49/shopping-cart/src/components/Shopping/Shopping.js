const addtoCard = (id) => {
  let shoppingCart;
  // get stored data from local storage

  let storedData = localStorage.getItem("shoppingCart");
  if (storedData) {
    shoppingCart = JSON.parse(storedData);
    // console.log(typeof convertData  , convertData);
  } else {
    shoppingCart = {};
  }

  // if the product exists in the localStorage the conunt ++ product
  const quantity = shoppingCart[id];
  if (quantity) {
    let newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  // localStorage.setItem(id, JSON.stringify(counter))
};

const removeCart = (id) => {
  const shoppingCart = localStorage.getItem("shoppingCart");
  if (shoppingCart) {
    let convertData = JSON.parse(shoppingCart);
    if (id in convertData) {
      delete convertData[id];
      localStorage.setItem("shoppingCart", JSON.stringify(convertData));
    } else {
      alert("Invalid shopping");
    }
  } else {
    alert("not added");
  }
};

const removeAll = () => {
  const storagedata = localStorage.getItem("shoppingCart");
  if (storagedata) {
    localStorage.removeItem("shoppingCart");
  } else {
    alert("no products found");
  }
};

const getTotal = () => {};

export { addtoCard, removeCart, getTotal, removeAll };

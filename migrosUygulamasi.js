class migrosUygulamsai{
  discountAverage = 20;
  constructor(firstName, lastName, isThereCard, products){
    this.firstName = firstName,
    this.lastName = lastName,
    this.isThereCard = isThereCard,
    this.products = products
  }

  calculate(){
    let amountToPaid = 0;
    if (this.checkTheProducts(this.products)) {
      // Cart is full
      this.products.forEach(element => {
        amountToPaid = (element.price * ((100-this.discountAverage)) / 100);
      });
    }else{
      alert('You must buy at least one product')
    }
    return amountToPaid;
  }
}

checkTheProducts(products)
{
  if(products !== null && products.length > 0) {
    return true;
  }
}



function welcome(isThereCard) {
  alert(`Migros'a hoşgeldiniz 
Money Kartiniz var mi ?
1-Evet
2-Hayir`)};




welcome();
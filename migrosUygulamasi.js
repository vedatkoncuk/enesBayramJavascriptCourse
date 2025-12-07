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
      if(this.isThereCard){
              // Cart is full
      this.products.forEach(element => {
      amountToPaid = (element.price * ((100-this.discountAverage)) / 100);
      });
        
      }else{
        this.products.forEach((element)=>{
          amountToPaid += element.price;
        })
      }
    }else{
      alert('You must buy at least one product')
    }
    return amountToPaid;
  }
}

checkTheProducts(products)
{ let result = false;
  if(products != null && products.length > 0) {
    return true;
  }else
  {
    result = false;
  }
  
}

/* setTimeout(() => {
  console.log('Sure doldu ve calisti')
}, 1000);

setTimeout(() => {
  
}, 500); */


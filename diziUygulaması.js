let products = [{
  name : 'Stanley Quencher Pipetli Termos Bardak, Pembe Kuvars (Rose Quartz), 1.18 Litre',
  stars :{
    rating : 4.5,
    count : 10.369
  },
  price : 1500
},{
  name : 'Bekle Beni',
  stars : {
    rating : 4,
    count : 242
  },
  price : 18941
}];

let chooseProduct = prompt('choose a product :');

products.forEach((element) =>{
  console.log(element);
});
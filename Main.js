/* let message = `Migros'a hoşgeldiniz 
Money Kartiniz var mi ?
1-Evet
2-Hayir`;

const products = [
  {
    productName: 'Süt',
    price: 15
  },
  {
    productName:'Bebek Bezi',
    price: 100
  },
  {
    productName: 'kusbaşi',
    price: 220
  }
]

let result = confirm(message);
let amountToPaid;

if(result){
  let name = prompt('Adinizi Giriniz:');
  let surName = prompt('Soyisminizi Giriniz');

  const customer = new Musteri(name, surName, result, products);
  amountToPaid = customer.calculate();

  alert(
    `
    Müşteri Bilgileri: ${name} ${surName}
    Ödenecek Tutar: ${amountToPaid}
    `
  );
} else{
  const customer = new Musteri(null,null,result,products);
  amountToPaid = customer.calculate();
  alert(`Ödenecek Tutar ${amountToPaid}`)
}
 */

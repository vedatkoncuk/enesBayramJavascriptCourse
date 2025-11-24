/* let products = [{
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
}); */

let book1 = {
  isim: 'Her seyi düşünme',
  yazar: 'Anne Bogel',
  fiyat: 25,
  raf: '1.5 RAF'
}

let book2 = {
  isim: 'Hicbir karsilaşma tesaduf degildir',
  yazar: 'Hakan Menguc',
  fiyat: 45,
  raf: '2.3 RAF'
}


let book3 = {
  isim: 'insan Neyle Yaşar',
  yazar: 'Tolstoy',
  fiyat: 34,
  raf: '3.4 RAF'
}


let book4 = {
  isim: 'Zafer Sizlanarak Kazanilmaz',
  yazar: 'Haluk Tatar',
  fiyat: 46,
  raf: '4.1 RAF'
}

let book5 = {
  isim: 'Her seyi düşünme',
  yazar: 'Jose Mauro de Vasconcelos',
  fiyat: 22,
  raf: '5.3 RAF'
}

let books = [book1, book2, book3, book4, book5];

let row11 = { cod: '1.1 ROW', goster: false }
let row12 = { cod: '1.2 ROW', goster: false }
let row13 = { cod: '1.3 ROW', goster: false }
let row14 = { cod: '1.4 ROW', goster: false }
let row15 = { cod: '1.5 ROW', goster: false }

let row21 = { cod: '1.1 ROW', goster: false }
let row22 = { cod: '1.2 ROW', goster: false }
let row23 = { cod: '1.3 ROW', goster: false }
let row24 = { cod: '1.4 ROW', goster: false }
let row25 = { cod: '1.5 ROW', goster: false }

let row31 = { cod: '1.1 ROW', goster: false }
let row32 = { cod: '1.2 ROW', goster: false }
let row33 = { cod: '1.3 ROW', goster: false }
let row34 = { cod: '1.4 ROW', goster: false }
let row35 = { cod: '1.5 ROW', goster: false }

let row41 = { cod: '1.1 ROW', goster: false }
let row42 = { cod: '1.2 ROW', goster: false }
let row43 = { cod: '1.3 ROW', goster: false }
let row44 = { cod: '1.4 ROW', goster: false }
let row45 = { cod: '1.5 ROW', goster: false }

let row51 = { cod: '1.1 ROW', goster: false }
let row52 = { cod: '1.2 ROW', goster: false }
let row53 = { cod: '1.3 ROW', goster: false }
let row54 = { cod: '1.4 ROW', goster: false }
let row55 = { cod: '1.5 ROW', goster: false }

let rows = [[row51, row52, row53, row54, row55],
            [row41, row42, row43, row44, row45],
            [row31, row32, row33, row34, row35],
            [row21, row22, row23, row24, row25],
            [row11, row12, row13, row14, row15]
];

function rowMade(){
  console.clear();
  let satir = '';
  for(let i = 0; i < rows.length; i++){
    for(let j = 0; j < 5; j++){
      satir += '|' + (rows[i][j].goster) + '|';
    }
    console.log(satir);
    satir = '';
  }     
}

            
       
/* function isimSoyisim(){
  console.log('Vedat Koncuk');
};

isimSoyisim();


function yazdir(isim, soyisim){
  console.log(`isim: ${isim} soyisim: ${soyisim}`);
};

yazdir('Vedat', 'Koncuk'); */

/* function cube(sayi) {
  console.log((sayi * sayi * sayi));
};

cube(5);
cube(16);
cube(3); */


function kontrolEt(yas) {
  if(yas < 18){
    console.log('Ehtilyet alamazsiniz');
    
    
  } else{
   console.log('Ehliyet alabilrsiniz');
  }
};

yas = prompt('Enter your age pleas:');

kontrolEt(yas);
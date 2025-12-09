/* const users = [
  {
    userId:5,
    post:`Vedat Koncuk`
  },
  {
    userId:5,
    post:`Vedat Koncuk`
  },
  {
    userId:6,
    post:`Cansu Kayik`
  },
  {
    userId:7,
    post:`Sevda Koncuk`
  }
]

alert('lütfen bulmak istediğiniz kullanicinin userId sini giriniz:');
let userId = prompt('userId giriniz:');

function userIdCheck(kullaniciId){
users.forEach(Element => {
  if(Element.userId == kullaniciId){
    console.log(`bulunmka istenen kullanici ${Element.post}`)
  }
});
}

userIdCheck(userId);

function prepareURL(url, id){
  if (id === null) {
    return url;
  }
  return `${url}?postId = ${id}`
}


function getComments(url, id){
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', () =>{
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log(xhr.responseText);
    }

  })
  xhr.open('GET',newURL);
  xhr.send();
}

getComments() */




// let check = true;

// function createPromise(){
//   return new Promise((resolve, reject) => {
//   if(check){
//     resolve(`it's working good!`);
//   }else{
//     reject(`it's have a problem!`);
//   }
//   })
// }

// createPromise()
// .then((response)=>{
//   console.log(response);
// })
// .catch((error) => {
//   console.log(error);
// })f
// .finally(()=> console.log(`it's able to work always`))



/* function readStudents(urll){
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    try {
      xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState === 4 && xhr.status === 200){
          resolve(JSON.parse(xhr.responseText));
        }
      })
    } catch (error) {
      console.log(`There is a problem in JSON`)
      reject(error);
    }
    xhr.open("GET", urll);
    xhr.send();
  })
}

readStudents('students.json')
.then((data) => console.log(data))
.catch((err) => console.log('There is a error', err)) */


/* function getUsers(url){
  return new Promise((resolve, reject) =>{
  const xhr = new XMLHttpRequest();
  try {
    xhr.addEventListener('readystatechange', ()=>{
      if(xhr.readyState === 4 && xhr.status === 200){
        resolve(JSON.parse(xhr.responseText));
      }
    })
  } catch (error) {
    console.log('There is a problem with JSON')
    reject(error);
  }
  xhr.open("GET",url);
  xhr.send();
  });
}

 

function getUserId(url){
  return new Promise((resolve, reject) =>{
  const xhr = new XMLHttpRequest();
  try {
    xhr.addEventListener('readystatechange', ()=>{
      if(xhr.readyState === 4 && xhr.status === 200){
        resolve(JSON.parse(xhr.responseText));
      }
    })
  } catch (error) {
    console.log('There is a problem with JSON')
    reject(error);
  }
  xhr.open("GET",url);
  xhr.send();
  });
}

getUsers("https://jsonplaceholder.typicode.com/users/3")
.then((data) =>{
  return getUserId(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
})
.then((res) => {
  console.log(res)
})
.catch((error) =>{
  console.log(error)
})
.finally(() => {
  
}) */



  function getData(url){
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
  }

  getData("https://jsonplaceholder.typicode.com/albums");

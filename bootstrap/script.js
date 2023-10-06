// let imageLink=["https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Alto-800/10327/1687348176706/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/10081/1683289602695/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/S-Presso/10348/Maruti-S-Presso-LXi/1687519307943/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/Bajaj/RE60/6895/1661762401874/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10743/1690192572470/front-left-side-47.jpg?tr=w-456","https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/XM/10570/1689672872537/front-left-side-47.jpg?tr=w-456"]
// let link="https://www.cardekho.com/bmw/xm";
// let container=document.getElementById("container")
  
// container.innerHTML=imageLink.map(function(el,i,arr){
//    return ` <div class="card" style="width: 18rem;">
//     <img src="${el}" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="${link}" class="btn btn-primary">Go somewhere</a>
//     </div>
//    </div>`

// })


let obj=[{
    img:"https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/XM/10570/1689672872537/front-left-side-47.jpg?tr=w-456",
    detials: " bmw  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, hic ut unde qui magnam molestiae deserunt id deleniti sed excepturi officia dolor. Distinctio quas voluptatibus enim, alias beatae debitis accusantium?",
   title:"rushibmw",
    link:"https://www.cardekho.com/bmw/xm"
},{
    img:"https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/Z4/10183/1685003672330/front-left-side-47.jpg?tr=w-456",
    detials: "  jagruti  bmw bmw  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, hic ut unde qui magnam molestiae deserunt id deleniti sed excepturi officia dolor. Distinctio quas voluptatibus enim, alias beatae debitis accusantium?",
    title:"jagriti bmw",
    link:"https://www.cardekho.com/bmw/z4"

},
{
    img:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner-Legender/10229/1686033870927/front-left-side-47.jpg?tr=w-456",
    detials: "  rutuja fortuner bmw  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, hic ut unde qui magnam molestiae deserunt id deleniti sed excepturi officia dolor. Distinctio quas voluptatibus enim, alias beatae debitis accusantium?",
    title:"rutuja bmw",
    link:"https://www.cardekho.com/toyota/fortuner-legender#leadForm"

},
{
    img:"https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/XM/10570/1689672872537/front-left-side-47.jpg?tr=w-456",
    detials: " bmw  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, hic ut unde qui magnam molestiae deserunt id deleniti sed excepturi officia dolor. Distinctio quas voluptatibus enim, alias beatae debitis accusantium?",
   title:"rushibmw",
    link:"https://www.cardekho.com/bmw/xm"
},{
    img:"https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/Z4/10183/1685003672330/front-left-side-47.jpg?tr=w-456",
    detials: "  jagruti  bmw bmw  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, hic ut unde qui magnam molestiae deserunt id deleniti sed excepturi officia dolor. Distinctio quas voluptatibus enim, alias beatae debitis accusantium?",
    title:"jagriti bmw",
    link:"https://www.cardekho.com/bmw/z4"

},
{
    img:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner-Legender/10229/1686033870927/front-left-side-47.jpg?tr=w-456",
    detials: "  rutuja fortuner bmw  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, hic ut unde qui magnam molestiae deserunt id deleniti sed excepturi officia dolor. Distinctio quas voluptatibus enim, alias beatae debitis accusantium?",
    title:"rutuja bmw",
    link:"https://www.cardekho.com/toyota/fortuner-legender#leadForm"

}]
let container=document.getElementById("container")
  
container.innerHTML=obj.map(function(el,i,arr){
   return ` <div class="card" style="width: 18rem;">
    <img src="${el.img}" alt="...">
    <div class="card-body">
      <h5 class="card-title">${el.title}</h5>
      <p class="card-text">${el.detials}</p>
      <a href="${el.link}" class="btn btn-primary">${el.title}</a>
    </div>
   </div>`

})


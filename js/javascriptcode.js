
import { Ui } from './ui-home.module.js'




let ui = new Ui()



// let navselector = document.querySelectorAll(".nav-link").forEach((element) => {element.addEventListener("click",
//   () => {
//      document .querySelector(".navbar-nav .active") .classList.remove("active");
//      element.classList.add("active");

//      this.getGames();

     
//    });
//  });
// }





// import { Viewgames } from "./gamescards.module.js";

// export class Ui {
//   constructor() {
//     let navselector = document
//       .querySelectorAll(".nav-link")
//       .forEach((element) => {
//         element.addEventListener("click", () => {
//           this.change(element);
//         });
//       });

//     this.gamescards = new Viewgames();
    
//   }

//   async change(element) {
//     document.querySelector(".navbar-nav .active").classList.remove("active");
//     element.classList.add("active");

//     let category = element.id;
//     let home = await this.getGames(category);
//     this.gamescards.display(home);
//   }

//   async getGames(category) {
//     const options = {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "b509d53664msh88be289c0276281p1a3f78jsn7ec7da71bf71",
//         "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//       },
//     };

//     const api = await fetch(
//       `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
//       options
//     );

//     const allgames = await api.json();

//     console.log(allgames);

//     return allgames;
//   }
// }











// ui home module 



// import { Viewgames } from "./gamescards.module.js";
// import { Gamesdetails } from "./gamesdetails.module.js";

// export class Ui {
//   constructor() {
//     let navselector = document
//       .querySelectorAll(".nav-link")
//       .forEach((element) => {
//         element.addEventListener("click", () => {
//           this.displayOnclick(element);
//           document
//             .querySelector(".navbar-nav .active")
//             .classList.remove("active");
//           element.classList.add("active");
//         });
//       });

//     this.details = new Gamesdetails();

//     this.gamescards = new Viewgames();

//     this.getGames("MMORPG");
//   }

//   async displayOnclick(element) {
//     let category = element.id;
//     let home = await this.getGames(category);
//     this.gamescards.display(home);
    
//     document.querySelectorAll(".card").forEach((cards) => {
//       cards.addEventListener("click", () => {
//         document.getElementById("homegamespage").classList.add("d-none");
//         document
//           .getElementById("gamedetailspage")
//           .classList.replace("d-none", "d-block");

//       });
//     });
//   }

//   async getGames(category) {
//     const options = {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "b509d53664msh88be289c0276281p1a3f78jsn7ec7da71bf71",
//         "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//       },
//     };

//     const api = await fetch(
//       `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
//       options
//     );

//     const allgames = await api.json();

//     this.gamescards.display(allgames);

//     document.querySelectorAll(".card").forEach((cards) => {
//       cards.addEventListener("click", () => {
//         document.getElementById("homegamespage").classList.add("d-none");
//         document
//           .getElementById("gamedetailspage")
//           .classList.replace("d-none", "d-block");

//       });
//     });

//     return allgames;
//   }
// }



// // gamescards.module 


// export class Viewgames {
//     constructor() {}
  
//     display(home) {
//       let box = "";
//       for (let i = 0; i < home.length; i++) {
//         box += ` <div class="col ">
//                               <div class="card border border-1 border-black border-opacity-25 rounded-3 h-100">
//                               <a href="#">
//                               <div class="p-3 imgblock imgoverlay">
//                                       <img class="overlay game-img border border-0 rounded-top-2 w-100"
//                                           src="${home[i].thumbnail}" class="card-img-top" alt="...">
//                                   </div>
//                                      <div class="card-body">
//                                       <div class="cardheader d-flex align-items-baseline justify-content-between">
//                                           <h5 class="game-title  card-title">${home[i].title}</h5>
//                                           <button class="p-1 btn text-white">Free</button>
//                                       </div>
//                                       <p class="mt-4 game-desc text-white-50 m-1 text-center card-text">
//                                           ${home[i].short_description}</p>
//                                   </div>
//                                   <div class="card-footer text-white d-flex justify-content-between">
//                                       <h4 class="game-badge-tag my-auto thebadge badge">${home[i].genre}</h4>
//                                       <h4 class="game-badge-platform my-auto thebadge badge">${home[i].platform}</h4>
//                                   </div>
//                                   </a>
//                               </div>
//                           </div>`;
//         document.getElementById("demo").innerHTML = box;
//       }
//     }
  
//     showDetails(home) {
//       let container = ` <div class="imgscontentsblock">
//                       <img class="" src="${home.thumbnail}" alt="game-image">
//                   </div>
//                   <div class="ms-4 d-flex para flex-column ms-3 align-items-md-start">
//                       <h2 class="gamename">${home.title}</h2>
//                       <ul class="list-unstyled">
//                           <li>Category: <span class="badge border border-0 bg-info text-black ">${home.genre}</span></li>
//                           <li>Platform: <span class="badge border border-0 bg-info text-black">${home.platform}</span></li>
//                           <li>Status: <span class="badge border border-0 bg-info text-black">${home.status}</span></li>
//                       </ul>
//                       <p class="thegamedesc w-100">
//                          ${home.description}
//                       </p>
//                      <a href="${home.game_url}"><button class=" btnfont btn btn-outline-warning">Show Game</button></a>
//                      </div>`;
//       document.getElementById("detailscontainer").innerHTML = container;
//     }
//   }
  




// // onegamepagedetailsapi.module 
// export class Gamesdetails {
//     constructor() {
//       document.getElementById("closebtn").addEventListener('click',()=>{
//         document.getElementById("homegamespage").classList.replace("d-none","d-block")
//         document.getElementById("gamedetailspage").classList.replace('d-block',"d-none")
//       })
      
//     }
  
//     async gameDetailsFun() {
//       const options2 = {
//         method: "GET",
//         headers: {
//           "x-rapidapi-key": "b509d53664msh88be289c0276281p1a3f78jsn7ec7da71bf71",
//           "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
//         },
//       };
  
//       let apidetails = await fetch(
//         "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452",
//         options2
//       );
  
//       let gamesdetailsresult = await apidetails.json();
//       console.log(gamesdetailsresult);
//     }
//   }
  
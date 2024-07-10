import { Viewgames } from "./DisplayOfGameCardsAndDetailsPage.module.js";


export class Gamesdetails {
  constructor(gameid) {
    document.getElementById("closebtn").addEventListener('click',()=>{
      document.getElementById("homegamespage").classList.replace("d-none","d-block")
      document.getElementById("gamedetailspage").classList.replace('d-block',"d-none")


    
    })

    this.loading = document.querySelector(".loading")
    this.gameDetailsFun(gameid)
  }

  async gameDetailsFun(gameid) {
    this.loading.classList.remove('d-none')


    const options2 = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b509d53664msh88be289c0276281p1a3f78jsn7ec7da71bf71",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let apidetails = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameid}`,
      options2
    );

    let gamesdetailsresult = await apidetails.json();

    this.loading.classList.add('d-none')
    console.log(gamesdetailsresult);

    new Viewgames().showDetails(gamesdetailsresult)
    
  }
}

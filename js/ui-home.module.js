import { Viewgames } from "./DisplayOfGameCardsAndDetailsPage.module.js";
import { Gamesdetails } from "./onegamepagedetailsAPI.module.js";

export class Ui {
  constructor() {
    let navselector = document
      .querySelectorAll(".nav-link")
      .forEach((element) => {
        element.addEventListener("click", () => {
          this.displayOnclick(element);
          document
            .querySelector(".navbar-nav .active")
            .classList.remove("active");
          element.classList.add("active");
        });
      });

    this.loading = document.querySelector(".loading")

    this.gamescards = new Viewgames();

    this.getGames("MMORPG");
  }

  async displayOnclick(element) {
    let category = element.id;
    let home = await this.getGames(category);
    this.gamescards.display(home);

    document.querySelectorAll(".card").forEach((cards) => {
      cards.addEventListener("click", () => {
        document.getElementById("homegamespage").classList.add("d-none");
        document
          .getElementById("gamedetailspage")
          .classList.replace("d-none", "d-block");

      });
    });
  }

  async getGames(category) {

    this.loading.classList.remove('d-none')
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b509d53664msh88be289c0276281p1a3f78jsn7ec7da71bf71",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );

    const allgames = await api.json();
    this.loading.classList.add('d-none')
    this.gamescards.display(allgames);

    document.querySelectorAll(".card").forEach((cards) => {
      cards.addEventListener("click", () => {
        document.getElementById("homegamespage").classList.add("d-none");
        document
          .getElementById("gamedetailspage")
          .classList.replace("d-none", "d-block");

          new Gamesdetails(cards.id)
          
      });
    });

    return allgames;
  }
}

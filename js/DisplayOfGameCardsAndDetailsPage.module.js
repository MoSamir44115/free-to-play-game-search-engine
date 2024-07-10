export class Viewgames {
  constructor() {
    
  }

  display(home) {
    let box = "";
    for (let i = 0; i < home.length; i++) {
      box += ` <div class="col ">
                            <div id="${home[i].id}" class="card border border-1 border-black border-opacity-25 rounded-3 h-100">
                            <a href="#">
                            <div class="p-3 imgblock imgoverlay">
                                    <img class="overlay game-img border border-0 rounded-top-2 w-100"
                                        src="${home[i].thumbnail}" class="card-img-top" alt="...">
                                </div>
                                   <div class="card-body">
                                    <div class="cardheader d-flex align-items-baseline justify-content-between">
                                        <h5 class="game-title  card-title">${home[i].title}</h5>
                                        <button class="p-1 btn text-white">Free</button>
                                    </div>
                                    <p class="mt-4 game-desc text-white-50 m-1 text-center card-text">
                                        ${home[i].short_description}</p>
                                </div>
                                <div class="card-footer text-white d-flex justify-content-between">
                                    <h4 class="game-badge-tag my-auto thebadge badge">${home[i].genre}</h4>
                                    <h4 class="game-badge-platform my-auto thebadge badge">${home[i].platform}</h4>
                                </div>
                                </a>
                            </div>
                        </div>`;
      document.getElementById("demo").innerHTML = box;
    }
  }

  showDetails(home) {
    let container = ` <div class="imgscontentsblock">
                    <img class="" src="${home.thumbnail}" alt="game-image">
                </div>
                <div class="ms-4 d-flex para flex-column ms-3 align-items-md-start">
                    <h2 class="gamename">${home.title}</h2>
                    <ul class="list-unstyled">
                        <li>Category: <span class="badge border border-0 bg-info text-black ">${home.genre}</span></li>
                        <li>Platform: <span class="badge border border-0 bg-info text-black">${home.platform}</span></li>
                        <li>Status: <span class="badge border border-0 bg-info text-black">${home.status}</span></li>
                    </ul>
                    <p class="thegamedesc w-100">
                       ${home.description}
                    </p>
                   <a href="${home.game_url}"><button class=" btnfont btn btn-outline-warning">Show Game</button></a>
                   </div>`;
    document.getElementById("detailscontainer").innerHTML = container;

    
  }
}

//= require vue.min
//= require vuetify.min
//= require fetch
window.core = new Vue({
  el: "#rubyclicker",
  data: {
    idPlayer: -1,
    pseudo: "",
    time: 0,
    selectedMode: 0,
    click: 1,
    rubyClick: 0,
    ruby: 0,
    manufacturedRuby: 0,
    CpS: 0,
    buildingsOwned: 0,
    components: {
      bonus: [
        /* { id: 0, icon: "star", related: 0, title: "First day", subtitle: "", description: "Welcome gift.", cost: -1, active: true, buy: true },
        { id: 1, icon: "mouse-pointer", related: 0, title: "Reinforced index finder", subtitle: "[upgrade]", description: "The mouse and cursors are <strong>twice</strong> as efficient.", cost: 100, active: false, buy: false },
        { id: 2, icon: "mouse-pointer", related: 0, title: "Carpal tunnel prevention cream", subtitle: "[upgrade]", description: "The mouse and cursors are <strong>twice</strong> as efficient.", cost: 500, active: false, buy: false },
        { id: 3, icon: "diamond", related: 1, title: "Forwards for jeweler", subtitle: "[upgrade]", description: "Jewelers are <strong>twice</strong> as efficient.", cost: 1000, active: false, buy: false },
        { id: 4, icon: "diamond", related: 1, title: "Steel-plated rolling pins", subtitle: "[upgrade]", description: "Jewelers are <strong>twice</strong> as efficient.", cost: 5000, active: false, buy: false },
        { id: 5, icon: "mouse-pointer", related: 0, title: "Ambidextrous", subtitle: "[upgrade]", description: "The mouse and cursors are <strong>twice</strong> as efficient.", cost: 10000, active: false, buy: false },
        { id: 6, icon: "magnet", related: 2, title: "Cheap hoes", subtitle: "[upgrade]", description: "Mines are <strong>twice</strong> as efficient.", cost: 11000, active: false, buy: false },
        { id: 7, icon: "diamond", related: 1, title: "Lubricated dentures", subtitle: "[upgrade]", description: "Jewelers are <strong>twice</strong> as efficient.", cost: 50000, active: false, buy: false },
        { id: 8, icon: "magnet", related: 2, title: "Fertilizer", subtitle: "[upgrade]", description: "Mines are <strong>twice</strong> as efficient.", cost: 55000, active: false, buy: false },
        { id: 9, icon: "industry", related: 3, title: "Sugar gas", subtitle: "[upgrade]", description: "Factories are <strong>twice</strong> as efficient.", cost: 120000, active: false, buy: false },
        { id: 10, icon: "magnet", related: 2, title: "Ruby trees", subtitle: "[upgrade]", description: "Mines are <strong>twice</strong> as efficient.", cost: 550000, active: false, buy: false },
        { id: 11, icon: "industry", related: 3, title: "Megadrill", subtitle: "[upgrade]", description: "Factories are <strong>twice</strong> as efficient.", cost: 600000, active: false, buy: false },
        { id: 12, icon: "money", related: 4, title: "Sturdier conveyor belts", subtitle: "[upgrade]", description: "Banks are <strong>twice</strong> as efficient.", cost: 1300000, active: false, buy: false },
        { id: 13, icon: "money", related: 4, title: "Child labor", subtitle: "[upgrade]", description: "Banks are <strong>twice</strong> as efficient.", cost: 6500000, active: false, buy: false },
        { id: 14, icon: "university", related: 5, title: "Taller tellers", subtitle: "[upgrade]", description: "Temples are <strong>twice</strong> as efficient.", cost: 14000000, active: false, buy: false },
        { id: 15, icon: "university", related: 5, title: "Scissor-resistant credit cards", subtitle: "[upgrade]", description: "Temples are <strong>twice</strong> as efficient.", cost: 70000000, active: false, buy: false },
        { id: 16, icon: "building-o", related: 6, title: "Golden idols", subtitle: "[upgrade]", description: "Wizard Towers are <strong>twice</strong> as efficient.", cost: 200000000, active: false, buy: false },
        { id: 17, icon: "building-o", related: 6, title: "Sacrifices", subtitle: "[upgrade]", description: "Wizard Towers are <strong>twice</strong> as efficient.", cost: 1000000000, active: false, buy: false } */
      ],
      buildings: [],
      tickers: []
    }
  },
  mounted: function() {
    let that = this;
    that.idPlayer = parseInt(window.location.pathname.split("/").filter((n) => {return n != "";}).pop());
    that.ruby = 0;
    that.manufacturedRuby = 0;

    // get all buildings
    if(isNaN(that.idPlayer)) return; // fix bug homepage

    fetch("/buildings", { method: "GET" }).then((response) => {
      response.json().then((buildings) => {
        buildings.forEach((building, index) => {
          that.components.buildings.push(
            {
              id: building.id,
              alternativeID: index,
              icon: building.icon,
              title: building.title,
              cost: building.base_cost,
              CpS: building.base_generation,
              counter: 0,
              active: false
            }
          );
        });
      });
    }, (err) => {
      console.error(err);
    });

    // get all boosts
    fetch("/boosts", { method: "GET" }).then((response) => {
      response.json().then((boosts) => {
        boosts.forEach((boost, index) => {
          that.components.bonus.push(
            {
              id: boost.id,
              icon: boost.icon,
              related: boost.related,
              title: boost.title,
              subtitle: boost.subtitle,
              description: boost.description,
              cost: boost.base_cost
            }
          );
        });
      });
    }, (err) => {
      console.error(err);
    });

    // get all tickers
    fetch("/tickers", { method: "GET" }).then((response) => {
      response.json().then((tickers) => {
        tickers.forEach((ticker) => {
          that.components.tickers.push(
            {
              cost: ticker.cost,
              description: ticker.text
            }
          );
        });
      });
    }, (err) => {
      console.error(err);
    });

    // get player (with buildings and boosts)
    fetch("/players/" + that.idPlayer + ".json", { method: "GET" }).then((players) => {
      players.json().then((player) => {
        console.log(player);
        that.pseudo = player.pseudo;
        that.rubyClick = player.clicks;
        that.ruby = player.ruby_count;

        // update buildings
        if(player.buildings && player.buildings.length) {
          player.buildings.forEach((building) => {
            let id = that.components.buildings.findIndex((pBuilding) => {
              return pBuilding.id == building.id;
            });

            if(id != -1) {
              that.addItem(that.components.buildings[id], true);
            }
          });
        }

        // update boosts
        if(player.boosts && player.boosts.length) {
          player.boosts.forEach((bonus) => {
            let id = that.components.buildings.findIndex((pBuilding) => {
              return bonus.related == pBuilding.alternativeID;
            });

            if(id != -1) {
              // that.components.bonus[id].buy = true;
              that.addBonus(that.components.bonus[
                that.components.bonus.findIndex(bonus => bonus.related == id)
              ], true);
            }
          });
        }
      });
    }, (err) => {
      console.error(err);
    });
  },
  methods: {
    cumulativePrice(base, counter) {
      return (base * (Math.pow(1.15, counter + 1) - 1)) / 0.15;
    },
    shortMoney(cost) {
      if(cost < 1000000) {
        return (Math.floor(cost * 100) / 100).toLocaleString();
      }

      let suffix = ["million", "billion", "trillion"];

      for(let i = 12; i >= 6; i -= 3) {
        if(cost / Math.pow(10, i) >= 1) {
          let p = cost / Math.pow(10, i);
          return p.toLocaleString({ maximumSignificantDigits: 2 }) + " " + suffix[Math.floor(i / 4) - 1];
        }
      }
    },
    createRuby() {
      let special = Math.random() <= 0.01;
      let ruby = document.createElement("div");
      ruby.classList.add("ruby");

      if(special) ruby.classList.add("special-heart");
      else ruby.classList.add("simple-heart");

      ruby.style.top = (event.clientY - 20) + "px";
      ruby.style.left = (event.clientX - 20) + "px";

      let valueContent = document.createElement("span");
      valueContent.textContent = "+" + this.shortMoney((special ? 777 * (this.click + this.CpS) : this.click)) + " rub" + ((special ? 777 * (this.click + this.CpS) : this.click) > 1 ? "ies" : "y");

      ruby.appendChild(valueContent);
      document.querySelector("body").appendChild(ruby);

      this.ruby += (special ? 777 * (this.click + this.CpS) : this.click);
      this.manufacturedRuby += (special ? 777 * (this.click + this.CpS) : this.click);
      this.rubyClick++;

      let forwards = setInterval(() => {
        ruby.style.top = (ruby.offsetTop - 3) + "px";
      }, 25);

      setTimeout(() => {
        clearInterval(forwards);
        ruby.parentNode.removeChild(ruby);
      }, 2000);
    },
    showItem(item) {
      if(this.ruby >= item.cost && !item.active) {
        item.active = true;
      }
    },
    addItem(item, init = false) {
      if(this.ruby >= this.cumulativePrice(item.cost, item.counter)) {
        this.ruby -= this.cumulativePrice(item.cost, item.counter);
        this.CpS += item.CpS;
        this.buildingsOwned++;
        item.counter += 1;

        if(!init) {
          updateBuilding(item.id);
        }
      }
    },
    showBonus(item) {
      if(this.ruby >= item.cost && !item.active) {
        item.active = true;
      }
    },
    addBonus(item, init = false) {
      let that = this;

      if(this.ruby >= item.cost) {
        this.components.buildings.filter((element) => {
          return element.alternativeID == item.related;
        }).forEach((offer) => {
          offer.CpS *= 2;
        });

        this.ruby -= item.cost;
        item.buy = true;

        if(!init) {
          updateBonus(item.id);
        }
      }
    }
  }
});

setInterval(() => {
  core.time++;

  core.ruby += core.CpS;
  core.manufacturedRuby += core.CpS;

  if(core.time && core.time % 10 === 0) {
    updatePlayer();
  }
}, 1000);

function updatePlayer() {
  fetch("/players/" + core.idPlayer + ".json?pseudo=" + core.pseudo + "&ruby_count=" + core.ruby + "&clicks=" + core.rubyClick, {
    method: "PUT",
  }).then((response) => {
    /* response.json().then((data) => {
      console.log(data);
    }); */
  }, (err) => {
    console.error(err);
  });
}

function updateBuilding(idBuilding) {
  fetch("/buildings/" + idBuilding + ".json?player_id=" + core.idPlayer, {
    method: "PUT",
  }).then((response) => {
    /* response.json().then((data) => {
      console.log(data);
    }); */
  }, (err) => {
    console.error(err);
  });
}

function updateBonus(idBonus) {
  fetch("/boosts/" + idBonus + ".json?player_id=" + core.idPlayer, {
    method: "PUT",
  }).then((response) => {
    /* response.json().then((data) => {
      console.log(data);
    }); */
  }, (err) => {
    console.error(err);
  });
}
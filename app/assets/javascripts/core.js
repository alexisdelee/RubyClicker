//= require vue.min
//= require vuetify.min
//= require fetch
window.core = new Vue({
  el: "#rubyclicker",
  data: {
    idPlayer: -1,
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
        { icon: "star", related: 0, title: "First day", subtitle: "", description: "Welcome gift.", cost: -1, active: true, buy: true },
        { icon: "mouse-pointer", related: 0, title: "Reinforced index finder", subtitle: "[upgrade]", description: "The mouse and cursors are <strong>twice</strong> as efficient.", cost: 100, active: false, buy: false },
        { icon: "mouse-pointer", related: 0, title: "Carpal tunnel prevention cream", subtitle: "[upgrade]", description: "The mouse and cursors are <strong>twice</strong> as efficient.", cost: 500, active: false, buy: false },
        { icon: "diamond", related: 1, title: "Forwards for jeweler", subtitle: "[upgrade]", description: "Jewelers are <strong>twice</strong> as efficient.", cost: 1000, active: false, buy: false },
        { icon: "diamond", related: 1, title: "Steel-plated rolling pins", subtitle: "[upgrade]", description: "Jewelers are <strong>twice</strong> as efficient.", cost: 5000, active: false, buy: false },
        { icon: "mouse-pointer", related: 0, title: "Ambidextrous", subtitle: "[upgrade]", description: "The mouse and cursors are <strong>twice</strong> as efficient.", cost: 10000, active: false, buy: false },
        { icon: "magnet", related: 2, title: "Cheap hoes", subtitle: "[upgrade]", description: "Mines are <strong>twice</strong> as efficient.", cost: 11000, active: false, buy: false },
        { icon: "diamond", related: 1, title: "Lubricated dentures", subtitle: "[upgrade]", description: "Jewelers are <strong>twice</strong> as efficient.", cost: 50000, active: false, buy: false },
        { icon: "magnet", related: 2, title: "Fertilizer", subtitle: "[upgrade]", description: "Mines are <strong>twice</strong> as efficient.", cost: 55000, active: false, buy: false },
        { icon: "industry", related: 3, title: "Sugar gas", subtitle: "[upgrade]", description: "Factories are <strong>twice</strong> as efficient.", cost: 120000, active: false, buy: false },
        { icon: "magnet", related: 2, title: "Ruby trees", subtitle: "[upgrade]", description: "Mines are <strong>twice</strong> as efficient.", cost: 550000, active: false, buy: false },
        { icon: "industry", related: 3, title: "Megadrill", subtitle: "[upgrade]", description: "Factories are <strong>twice</strong> as efficient.", cost: 600000, active: false, buy: false },
        { icon: "money", related: 4, title: "Sturdier conveyor belts", subtitle: "[upgrade]", description: "Banks are <strong>twice</strong> as efficient.", cost: 1300000, active: false, buy: false },
        { icon: "money", related: 4, title: "Child labor", subtitle: "[upgrade]", description: "Banks are <strong>twice</strong> as efficient.", cost: 6500000, active: false, buy: false },
        { icon: "university", related: 5, title: "Taller tellers", subtitle: "[upgrade]", description: "Temples are <strong>twice</strong> as efficient.", cost: 14000000, active: false, buy: false },
        { icon: "university", related: 5, title: "Scissor-resistant credit cards", subtitle: "[upgrade]", description: "Temples are <strong>twice</strong> as efficient.", cost: 70000000, active: false, buy: false },
        { icon: "building-o", related: 6, title: "Golden idols", subtitle: "[upgrade]", description: "Wizard Towers are <strong>twice</strong> as efficient.", cost: 200000000, active: false, buy: false },
        { icon: "building-o", related: 6, title: "Sacrifices", subtitle: "[upgrade]", description: "Wizard Towers are <strong>twice</strong> as efficient.", cost: 1000000000, active: false, buy: false }
      ],
      buildings: [
        { id: 0, icon: "mouse-pointer", title: "Cursor", cost: 18, CpS: 0.1, counter: 0, active: false },
        { id: 1, icon: "diamond", title: "Jeweler", cost: 100, CpS: 1, counter: 0, active: false },
        { id: 2, icon: "magnet", title: "Mine", cost: 1100, CpS: 8, counter: 0, active: false },
        { id: 3, icon: "industry", title: "Factory", cost: 12000, CpS: 47, counter: 0, active: false },
        { id: 4, icon: "money", title: "Bank", cost: 130000, CpS: 260, counter: 0, active: false },
        { id: 5, icon: "university", title: "Temple", cost: 1400000, CpS: 1400, counter: 0, active: false },
        { id: 6, icon: "building-o", title: "Wizard Tower", cost: 20000000, CpS: 7800, counter: 0, active: false },
        { id: 7, icon: "ship", title: "Shipment", cost: 330000000, CpS: 44000, counter: 0, active: false },
        { id: 8, icon: "flask", title: "Alchemy Lab", cost: 5100000000, CpS: 260000, counter: 0, active: false },
        { id: 9, icon: "magic", title: "Portal", cost: 75000000000, CpS: 1600000, counter: 0, active: false },
        { id: 10, icon: "clock-o", title: "Time Machine", cost: 1000000000000, CpS: 10000000, counter: 0, active: false },
        { id: 11, icon: "free-code-camp", title: "Antimatter Condenser", cost: 14000000000000, CpS: 65000000, counter: 0, active: false }
      ],
      tickers: [
        { cost: 0, description: "You feel like making rubies. But nobody wants to buy your rubies." },
        { cost: 5, description: "Your first creation goes in the trash. The neighborhood raccoon barely touches it." },
        { cost: 50, description: "Your family accepts to buy some of your rubies." },
        { cost: 100, description: "Your rubies are popular in the neighborhood." },
        { cost: 500, description: "People are starting to talk about your rubies." },
        { cost: 1000, description: "Your rubies are talked about for miles around." },
        { cost: 5000, description: "Your rubies are renowned in the whole town!" },
        { cost: 10000, description: "Your rubies bring all the boys to the yard." },
        { cost: 50000, description: "Your rubies now have their own website!" },
        { cost: 100000, description: "Your rubies are worth a lot of money." },
        { cost: 500000, description: "Your rubies sell very well in distant countries." },
        { cost: 1000000, description: "People come from very far away to buy your rubies." },
        { cost: 5000000, description: "Kings and queens from all over the world are enjoying your rubies." },
        { cost: 10000000, description: "There are now museums dedicated to your rubies." },
        { cost: 500000000, description: "A national day has been created in honor of your rubies." },
        { cost: 1000000000, description: "Your rubies have been named a part of the world wonders." },
        { cost: 50000000000, description: "History books now include a whole chapter about your rubies." },
        { cost: 100000000000, description: "Your rubies have been placed under government surveillance." },
        { cost: 5000000000000, description: "The whole planet is enjoying your rubies!" },
        { cost: 10000000000000, description: "Strange creatures from neighboring planets wish to buy your rubies." },
        { cost: 50000000000000, description: "Elder gods from the whole cosmos have awoken to see your rubies." },
        { cost: 100000000000000, description: "Beings from other dimensions lapse into existence juste to see your cookies." },
        { cost: 500000000000000, description: "Your rubies have achieved sentience." },
        { cost: 1000000000000000, description: "The universe has now turned into ruby glitter, to the molecular level." },
        { cost: 5000000000000000, description: "Your rubies are rewriting the fundamental laws of the universe." },
        { cost: 10000000000000000, description: "It's time to stop playing." }
      ]
    }
  },
  mounted: function() {
    this.idPlayer = parseInt(window.location.pathname.split("/").filter((n) => {return n != "";}).pop());

    /* fetch("/game/" + this.idPlayer + ".json", { method: "GET" }).then((response) => {
      console.log(response);
    }, (err) => {
      console.error(err);
    }); */
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
    addItem(item) {
      if(this.ruby >= this.cumulativePrice(item.cost, item.counter)) {
        this.ruby -= this.cumulativePrice(item.cost, item.counter);
        this.CpS += item.CpS;
        this.buildingsOwned++;
        item.counter += 1;
      }
    },
    showBonus(item) {
      if(this.ruby >= item.cost && !item.active) {
        item.active = true;
      }
    },
    addBonus(item) {
      let that = this;

      if(this.ruby >= item.cost) {
        this.components.buildings.filter((element) => {
          return element.id == item.related;
        }).forEach((offer) => {
          offer.CpS *= 2;
        });

        this.ruby -= item.cost;
        item.buy = true;
      }
    }
  }
});

setInterval(() => {
  core.time++;

  core.ruby += core.CpS;
  core.manufacturedRuby += core.CpS;

  if(core.time % 10 === 0) {
    // updatePlayer();
  }
}, 1000);

// debug
function updatePlayer() {
  let player = {
    idPlayer: core.idPlayer,
    click: core.click,
    rubyClick: core.rubyClick,
    ruby: core.ruby,
    manufacturedRuby: core.manufacturedRuby,
    CpS: core.CpS,
    buildingsOwned: core.buildingsOwned
  };

  console.log(player);
}
// debug
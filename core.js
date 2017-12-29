window.core = new Vue({
  el: "#foxi",
  data: {
    selectedMode: 0,
    click: 1,
    ruby: 0,
    CpS: 0,
    components: {
      bonus: [
        { icon: "star", related: 0, title: "First day", subtitle: "", description: "Welcome gift", cost: -1, active: true, buy: true },
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
      ]
    }
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
      let special = Math.random() <= 0.025;
      let ruby = document.createElement("div");
      ruby.classList.add("ruby");

      if(special) ruby.classList.add("special-heart");
      else ruby.classList.add("simple-heart");

      ruby.style.top = (event.clientY - 20) + "px";
      ruby.style.left = (event.clientX - 20) + "px";

      let valueContent = document.createElement("span");
      valueContent.textContent = "+" + this.shortMoney((special ? 7777 * (this.click + this.CpS) : this.click)) + " rub" + ((special ? 7777 * (this.click + this.CpS) : this.click) > 1 ? "ies" : "y");

      ruby.appendChild(valueContent);
      document.querySelector("body").appendChild(ruby);

      this.ruby += (special ? 7777 * (this.click + this.CpS) : this.click);

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
  core.ruby += core.CpS;
}, 1000);
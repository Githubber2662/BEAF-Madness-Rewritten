let big = MetaNum.pow(2, 1024);
let last = performance.now();
let deltatime;
let tickspeed = new MetaNum(1);
let fghDisplay = "";
let Game {
    constructor() {
        this.points = new MetaNum(1);
        this.currency = new MetaNum(1);
        this.multiplier = new MetaNum(10);
        this.dimensions = [[[new MetaNum(1), new MetaNum(1), new MetaNum(0)]]];
        this.layers = [new MetaNum(1)];
        this.omegatower = 0;
        this.upgrades = [];
        this.achievements = [];
        this.initializeUpgrades();
        this.initializeChallenges();
        this.initializeAchievements();
    initializeUpgrades() {
        this.upgrades = [
        ];
    };
    initializeAchievements() {
  this.achievements = [
        {
            id: "0",
            title: "You gotta start somewhere",
            description: "Start",
            unlocked: false,
            check: Game.points.gt(1),
            secret: false
        },
        {
            id: "1",
            title: "Monologue",
            description: "Get 10 points",
            unlocked: false,
            check: Game.points.gte(10),
            secret: false
        },
          {
            id: "2",
            title: "Dialogue",
            description: "Get 1e10 points",
            unlocked: false,
            check: Game.points.gte(1e10),
            secret: false
          },
        {
            id: "3",
            title: "Googol",
            description: "Get 1e100 points",
            unlocked: false,
            check: Game.points.gte("E100"),
            secret: false
          },
           {
            id: "4",
            title: "Trialogue",
            description: "Get ee10 points",
            unlocked: false,
            check: Game.points.gte("EE10"),
            secret: false
          },
        {
            id: "5",
            title: "Googolplex",
            description: "Get e1e100 points",
            unlocked: false,
            check: Game.points.gte("EE100"),
            secret: false
          },

        ];
    }
    }
}
function showAchivement(title, description, secret) {
  const container = document.getElementById('achievement-container');

  // 1. Create the pop-up element
  const toast = document.createElement('div');
  toast.className = 'achievement-toast';

  // 2. Insert internal HTML structures
  toast.innerHTML = `
    <div class="achievement-icon">🏆</div>
    <div class="achievement-text">
      <span class="achievement-banner">Achievement Gotten!</span>
      <span class="achievement-title">${title}</span>
    </div>
  `;

  // 3. Append to screen container
  container.appendChild(toast);

  // 4. Play an achievement chime sound
  // Replace URL with your own local .mp3 if needed
  const audio = new Audio('https://mixkit.co');
  audio.volume = 0.5;
  audio.play().catch(err => console.log("Audio playback blocked until user interacts with the page."));

  // 5. Trigger slide-in animation via a tiny timeout
  setTimeout(() => {
    toast.classList.add('show');
  }, 50);

  // 6. Slide out after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    
    // 7. Completely remove element from DOM once slide-out ends
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}


var j = 0;
function checkAchievements() {
    for(j = 0; j < Game.achievements.length; j++) {
        if(Game.achievements[j].check && !Game.achievements[j].unlocked) {
            Game.achievements[j].unlocked = true;
            showAchievement(Game.achievements[j].title, Game.achievements[j].description, Game.achievements[j].secret);
        }
    }
}
function increaseRank(level, amount) {
    for(j = 0; j < Math.min(Game.layers.length, level); j++) {
        Game.layers[j] = new MetaNum(0);
    }
    if(level > Game.layers.length) {
        Game.layers.push(new MetaNum(amount));
    }
    else {
        Game.layers[level-1] = Game.layers[level-1].add(amount);
    }
}
function gameLoop() {
    deltatime = performance.now() - last;
    if(Game.layers.length <= 1) {
        for(j = dimensions.length - 1; j >= 0; j--) {
            if(j > 0) {
                Game.dimensions[j-1] = Game.dimensions[j-1].arrow(Game.layers[0])(Game.dimensions[j].arrow(Game.layers[0])(tickspeed.mul(deltatime)));
            }
            else {
                Game.multiplier = Game.multiplier.arrow(Game.layers[0])(Game.dimensions[0].arrow(Game.layers[0])(tickspeed.mul(deltatime)));
            }       
        Game.currency = Game.currency.mul(multiplier);
        if() 


            





    

        }
    }
    else {
           
    }
}

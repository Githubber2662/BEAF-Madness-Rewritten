let big = MetaNum.pow(2, 1024);
class Game {
    constructor() {
        this.points = new MetaNum(1);
        this.currency = new MetaNum(1);
        this.multiplier = new MetaNum(10);
        this.dimensions = [[[new MetaNum(1), new MetaNum(1), new MetaNum(0)]]];
        this.layers = [new MetaNum(1)];
        this.upgrades = {};
        this.challenges = {};
        this.achievements = [];
        this.initializeUpgrades();
        this.initializeChallenges();
        this.initializeAchievements();
    initializeUpgrades() {
        this.upgrades = {
        };
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
          }
        ];
    }
    }
}
function showAchievement(title, description, secret=false) {
  const container = document.getElementById('achievement-container');

  // 1. Create the card element
  const card = document.createElement('div');
  card.className = 'achievement-card';

  // 2. Populate structure with safe text insertion
  card.innerHTML = `
    <h4 class="achievement-title">${title}</h4>
    <p class="achievement-desc">${description}</p>
  `;

  // 3. Inject it into the screen container
  container.appendChild(card);

  // 4. Set a timer to start the fade-out animation (e.g., after 4 seconds)
  setTimeout(() => {
    card.classList.add('fade-out');
    
    // 5. Physically remove the node from the DOM once fade-out completes (0.5s duration)
    card.addEventListener('animationend', (e) => {
      if (e.animationName === 'fadeOut') {
        card.remove();
      }
    });
  }, 4000);
}

var j = 0;
function checkAchievements() {
    for(j = 0; j < Game.achievements.length; j++) {
        if(Game.achievements[j].check && !Game.achievements[j].unlocked) {
            Game.achievements[j].unlocked = true;
            if(Game.achievements[j].secret) {
               
            }
            else {

            }

        }
    }
}
// `🏆 Achievement Unlocked: ${achievement.title}!`

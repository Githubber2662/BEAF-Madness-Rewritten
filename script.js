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
var j = 0;
function checkAchievements() {
    for(j = 0; j < Game.achievements.length; j++) {
        if(Game.achievements[j].check && !Game.achievements[j].unlocked) {
            if(Game.achievements[j].secret) {
                
            }
        }
    }
}
// `🏆 Achievement Unlocked: ${achievement.title}!`

class Game {
    constructor() {
        this.points = new MetaNum(1);
        this.multiplier = new MetaNum(1);
        this.dimensions = [[[new MetaNum(1), new MetaNum(1), new MetaNum(0)]]];
        this.layers = [new MetaNum(1)];
        this.upgrades = {};
        this.challenges = {};
        this.initializeUpgrades();
        this.initializeChallenges();
        this.initializeAchievements();
    initializeUpgrades() {
        this.upgrades = {
        };
    };
    initializeAchievements() {
        this.achievements = {
            1: {
                id: 1,
                name: "You gotta start somewhere",
                description: "Buy a dimension",
                unlocked: false,
                can: Game.points.gt(1),
            },
            2: {
                id: 2,
                name: "Monologue",
                description: "Get 10 points",
                unlocked: false,
                can: Game.points.gte(10)
                
            }
            }
        }
    };
};
}

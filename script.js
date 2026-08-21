let big = MetaNum.pow(2, 1024);
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
                can: Game.points.gt(1)
            },
            2: {
                id: 2,
                name: "Monologue",
                description: "Get 10 points",
                unlocked: false,
                can: Game.points.gte(10)
            },
            3: {
                id: 3,
                name: "Dialogue",
                description: "Get 1e10 points",
                unlocked: false,
                can: Game.points.gte(10000000000)
            },
            4: {
                id: 4,
                name: "Googol",
                description: "Get 1e100 points",
                unlocked: false,
                can: Game.points.gte("E100")
            },
            5: {
                id: 5,
                name: "Big",
                description: "Get 2^1024 points",
                unlocked: false,
                can: Game.points.gte(big);
            },
            6: {
                id: 6,
                name: "Trialogue",
                description: "Get e1e10 points",
                unlocked: false,
                can: Game.points.gte("EE10")
            },
            7: {
                id: 7,
                name: "Googolplex",
                description: "Get e1e100 points",
                unlocked: false,
                can: Game.points.gte("EE100")
            },
            8: {
                id: 8,
                name: "Break_infinity",
                description: "Get 10^(2^1024) points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).pow(big))
            },
            9: {
                id: 9,
                name: "Pentalogue",
                description: "Get eee1e10 points",
                unlocked: false,
                can: Game.points.gte("F5")
            },
            10: {
                id: 10,
                name: "Decker",
                description: "Get 10^^10 points",
                unlocked: false,
                can: Game.points.gte("F10")
            },
            11: {
                id: 11,
                name: "Giggol",
                description: "Get 10^^100 points",
                unlocked: false,
                can: Game.points.gte("F100")
            },
            12: {
                id: 12,
                name: "Tritri",
                description: "Get 3^^^3 points",
                unlocked: false,
                can: Game.points.gte(MetaNum.TRITRI)
            },
            13: {
                id: 13,
                name: "Googolstack",
                description: "Get 10^^1e100 points",
                unlocked: false,
                can: Game.points.gte("FE100")
            },
            14: {
                id: 14,
                name: "Break_eternity",
                description: "Get 10^^2^1024 points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).tetr(big))
            },
            15: {
                id: 15,
                name: "Tria-taxis",
                description: "Get 10^^10^^10 points",
                unlocked: false,
                can: Game.points.gte("FF10")
            },
            16: {
                id: 16,
                name: "Giggolplex",
                description: "Get 10^^10^^100 points",
                unlocked: false,
                can: Game.points.gte("FF100")
            },
            17: {
                id: 17,
                name: "Deka-taxis",
                description: "Get 10^^^10 points",
                unlocked: false,
                can: Game.points.gte("FFFFFFFFF10")                
            },
            18: {
                id: 18,
                name: "Break_quantum",
                description: "Get 10^^^2^1024 points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).arrow(3)(new MetaNum(10).pow(1024)))       
            },
            19: {
                id: 19,
                name: "Break_reality",
                description: "Get 10^^^^2^1024 points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).arrow(4)(new MetaNum(10).pow(1024)))
            },
            20: {
                id: 20,
                name: "Tridecal",
                description: "Get 10{10}10 points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).arrow(10)(10))
            },
            21: {
                id: 21,
                name: "Boogol",
                description: "Get 10{100}10 points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).arrow(100)(10))
            },
            22: {
                id: 22,
                name: "OmegaNum",
                description: "Get 10{2^1024}10 points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).arrow(new MetaNum(2).pow(1024))(10))      
            },
            23: {
                id: 23,
                name: "Graham\'s Number",
                description: "Get [Graham\'s Number] points",
                unlocked: false,
                can: Game.points.gte(MetaNum.GRAHAMS_NUMBER)      
            },
            24: {
                id: 24,
                name: "ExpantaNum",
                description: "Get {10, 2^1024, 1, 2} points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(2)      
            },
            }
        }
    };
};
}

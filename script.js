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
                secret: false
            },
            2: {
                id: 2,
                name: "Monologue",
                description: "Get 10 points",
                unlocked: false,
                can: Game.points.gte(10),
                secret: false
            },
            3: {
                id: 3,
                name: "Dialogue",
                description: "Get 1e10 points",
                unlocked: false,
                can: Game.points.gte(10000000000),
                secret: false
            },
            4: {
                id: 4,
                name: "Googol",
                description: "Get 1e100 points",
                unlocked: false,
                can: Game.points.gte("E100"),
                secret: false
            },
            5: {
                id: 5,
                name: "Big",
                description: "Get 2^1024 points",
                unlocked: false,
                can: Game.points.gte(big),
                secret: false
            },
            6: {
                id: 6,
                name: "Trialogue",
                description: "Get e1e10 points",
                unlocked: false,
                can: Game.points.gte("EE10"),
                secret: false
            },
            7: {
                id: 7,
                name: "Googolplex",
                description: "Get e1e100 points",
                unlocked: false,
                can: Game.points.gte("EE100"),
                secret: false
            },
            8: {
                id: 8,
                name: "Break_infinity",
                description: "Get 10^(2^1024) points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).pow(big)),
                secret: false
            },
            9: {
                id: 9,
                name: "Pentalogue",
                description: "Get eee1e10 points",
                unlocked: false,
                can: Game.points.gte("F5"),
                secret: false
            },
            10: {
                id: 10,
                name: "Decker",
                description: "Get 10^^10 points",
                unlocked: false,
                can: Game.points.gte("F10"),
                secret: false
            },
            11: {
                id: 11,
                name: "Giggol",
                description: "Get 10^^100 points",
                unlocked: false,
                can: Game.points.gte("F100"),
                secret: false
            },
            12: {
                id: 12,
                name: "Tritri",
                description: "Get 3^^^3 points",
                unlocked: false,
                can: Game.points.gte(MetaNum.TRITRI),
                secret: false
            },
            13: {
                id: 13,
                name: "Googolstack",
                description: "Get 10^^1e100 points",
                unlocked: false,
                can: Game.points.gte("FE100"),
                secret: false
            },
            14: {
                id: 14,
                name: "Break_eternity",
                description: "Get 10^^2^1024 points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).tetr(big)),
                secret: false
            },
            15: {
                id: 15,
                name: "Tria-taxis",
                description: "Get 10^^10^^10 points",
                unlocked: false,
                can: Game.points.gte("FF10"),
                secret: false
            },
            16: {
                id: 16,
                name: "Giggolplex",
                description: "Get 10^^10^^100 points",
                unlocked: false,
                can: Game.points.gte("FF100"),
                secret: false
            },
            17: {
                id: 17,
                name: "Deka-taxis",
                description: "Get 10^^^10 points",
                unlocked: false,
                can: Game.points.gte("FFFFFFFFF10"),
                secret: false
            },
            18: {
                id: 18,
                name: "Break_quantum",
                description: "Get 10^^^2^1024 points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).arrow(3)(big)),
                secret: false
            },
            19: {
                id: 19,
                name: "Break_reality",
                description: "Get 10^^^^2^1024 points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).arrow(4)(big)),
                secret: false
            },
            20: {
                id: 20,
                name: "Tridecal",
                description: "Get 10{10}10 points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).arrow(10)(10)),
                secret: false
            },
            21: {
                id: 21,
                name: "Boogol",
                description: "Get 10{100}10 points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).arrow(100)(10)),
                secret: false
            },
            22: {
                id: 22,
                name: "OmegaNum",
                description: "Get 10{2^1024}10 points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).arrow(big)(10)),
                secret: false
            },
            23: {
                id: 23,
                name: "Graham\'s Number",
                description: "Get [Graham\'s Number] points",
                unlocked: false,
                can: Game.points.gte(MetaNum.GRAHAMS_NUMBER),
                secret: false
            },
            24: {
                id: 24,
                name: "ExpantaNum",
                description: "Get {10, 2^1024, 1, 2} points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).BEAF(big)(2)(2)),
                secret: false
            },
            25: {
                id: 25,
                name: "MultiExpantaNum",
                description: "Get {10, 2^1024, 2, 2} points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).BEAF(big)(3)(2)),
                secret: false
            },
            26: {
                id: 26,
                name: "ExplodaNum",
                description: "Get {10, 2^1024, 1, 3} points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).BEAF(big)(2)(3)),
                secret: false
            },
            27: {
                id: 27,
                name: "MegotaNum",
                description: "Get {10, 2^1024, 1, 1, 2} points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).BEAF(big)(2)(1)(2)),
                secret: false
            },
            28: {
                id: 28,
                name: "PowiainaNum",
                description: "Get {10, 2^1024, 1, 1, 1, 2} points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).BEAF(big)(2)(1)(1)(2)),
                secret: false
            },
            29: {
                id: 29,
                name: "GodgahNum",
                description: "Get {10, 2^1024 (1) 2} points",
                unlocked: false,
                can: Game.points.gte(new MetaNum(10).iterate(big)),
                secret: false
            },
            30: {
                id: 30,
                name: "Speeed",
                description: "Layer Up",
                unlocked: false,
                can: Game.layers[0].gt(1),
                secret: false
            },
            31: {
                id: 31,
                name: "Meta",
                description: "Tier Up",
                unlocked: false,
                can: Game.layers.length > 1,
                secret: false
            },
            }
        }
    };
};
}

class Game {
    constructor() {
        this.points = new MetaNum(1);
        this.dimensions = [[new MetaNum(1), new MetaNum(1), new MetaNum(0)]];
        this.upgrades = {};
        this.challenges = {};
        this.initializeUpgrades();
        this.initializeChallenges();
    initializeUpgrades() {
    this.upgrades = {
      superdimension: {
        id: 'superdimension',
        name: "Superdimension",
        description: "All dimensions are more powerful",
        boost: new MetaNum(2),
        baseCost: new MetaNum("F100"),
        cost: [new MetaNum(2), "mult-superlog"],
        owned: new MetaNum(0),
        type: 'power'
      },
      fastPacing: {
        id: 'fastPacing',
        name: "Fast Pacing",
        description: "×1.5 passive multiplier",
        multiplier: new MetaNum(1.5),
        baseCost: new MetaNum(100),
        cost: new MetaNum(100),
        owned: new MetaNum(0),
        type: 'passive'
      },
      exponentialGrowth: {
        id: 'exponentialGrowth',
        name: "Exponential Growth",
        description: "passive multiplier^1.2",
        multiplier: new MetaNum(1.2),
        baseCost: new MetaNum(1000),
        cost: new MetaNum(1000),
        owned: new MetaNum(0),
        type: 'passive',
        isExponential: true
      }
    };
    };
};

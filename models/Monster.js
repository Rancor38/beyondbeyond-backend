const mongoose = require('mongoose')

const MonsterSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: String,
    size: String,
    type: String,
    alignment: String,
    ac: String,
    hp: String,
    speed: String,
    burrowSpeed: String,
    climbSpeed: String,
    flySpeed: String,
    swimSpeed: String,
    str: String,
    dex: String,
    con: String,
    int: String,
    wis: String,
    cha: String,
    savingThrows: String,
    skills: String,
    resistances: String,
    damageImmunities: String,
    conditionImmunities: String,
    vulnerabilities: String,
    senses: String,
    languages: String,
    cr: String,
    proficiencyBonus: String,
    abilityOne: String,
    abilityTwo: String,
    abilityThree: String,
    abilityFour: String,
    abilityFive: String,
    abilitySix: String,
    abilitySeven: String,
    abilityEight: String,
    abilityNine: String,
    abilityTen: String,
    actionOne: String,
    actionTwo: String,
    actionThree: String,
    actionFour: String,
    actionFive: String,
    actionSix: String,
    actionSeven: String,
    actionEight: String,
    actionNine: String,
    actionTen: String,
    bonusActionOne: String,
    bonusActionTwo: String,
    bonusActionThree: String,
    bonusActionFour: String,
    bonusActionFive: String,
    bonusActionSix: String,
    bonusActionSeven: String,
    bonusActionEight: String,
    bonusActionNine: String,
    bonusActionTen: String,
    reactionOne: String,
    reactionTwo: String,
    reactionThree: String,
    reactionFour: String,
    reactionFive: String,
    reactionSix: String,
    reactionSeven: String,
    reactionEight: String,
    reactionNine: String,
    reactionTen: String,
    legendaryActionOne: String,
    legendaryActionTwo: String,
    legendaryActionThree: String,
    legendaryActionFour: String,
    legendaryActionFive: String,
    legendaryActionSix: String,
    legendaryActionSeven: String,
    legendaryActionEight: String,
    legendaryActionNine: String,
    legendaryActionTen: String,
    lairActionOne: String,
    lairActionTwo: String,
    lairActionThree: String,
    lairActionFour: String,
    lairActionFive: String,
    lairActionSix: String,
    lairActionSeven: String,
    lairActionEight: String,
    lairActionNine: String,
    lairActionTen: String,
    mythicActionOne: String,
    mythicActionTwo: String,
    mythicActionThree: String,
    mythicActionFour: String,
    mythicActionFive: String,
    mythicActionSix: String,
    mythicActionSeven: String,
    mythicActionEight: String,
    mythicActionNine: String,
    mythicActionTen: String,
    regionalAbilityOne: String,
    regionalAbilityTwo: String,
    regionalAbilityThree: String,
    regionalAbilityFour: String,
    regionalAbilityFive: String,
    regionalAbilitySix: String,
    regionalAbilitySeven: String,
    regionalAbilityEight: String,
    regionalAbilityNine: String,
    regionalAbilityTen: String,
    description: String,
},  {timestamps: true})

const Monster = mongoose.model("Monster", MonsterSchema)

module.exports = Monster
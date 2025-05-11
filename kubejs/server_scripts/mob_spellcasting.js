EntityJSEvents.addGoalSelectors('minecraft:zombie', event => {
    event.arbitraryGoal(1, (e) => {
        return new WizardAttackGoal(e, 1, 60) // Parameters: entity, movement speed modifier, cast interval
            .setSpells(
                [Spell.of('traveloptics:annihilation')], // Attack
                [Spell.of('irons_spellbooks:slow')], // Defense
                [Spell.of('irons_spellbooks:blood_step')], // Movement
                [] // Support
            )
    })
})
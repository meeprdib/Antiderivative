ServerEvents.loaded(event => {
    event.server.gameRules.set("doTraderSpawning", false)
    event.server.gameRules.set("doInsomnia", false)
    event.server.gameRules.set("doPatrolSpawning", false)

    event.server.gameRules.set("keepInventory", true)
    event.server.gameRules.set("disableRaids", true)
    event.server.gameRules.set("playersSleepingPercentage", 50)
})
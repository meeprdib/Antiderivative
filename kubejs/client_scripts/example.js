BlockEvents.rightClicked((e) => {
    if (!e.level.isClientSide()) return
    if (e.item == 'sophisticatedbackpacks:iron_backpack') e.cancel()
})
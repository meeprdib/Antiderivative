// ServerEvents.recipes(event => {
//     event.custom({
//         type: 'hexerei:fluid_mixing',
//         input: {fluid: 'minecraft:water'},
//         ingredients: [
//             {item: 'atmospheric:blood_orange'},
//             {item: 'atmospheric:blood_orange'},
//             {item: 'atmospheric:blood_orange'},
//             {item: 'atmospheric:blood_orange'},
//             {item: 'atmospheric:blood_orange'},
//             {item: 'atmospheric:blood_orange'},
//             {item: 'atmospheric:blood_orange'},
//             {item: 'atmospheric:blood_orange'}
//         ],
//         output: {
//             fluid: 'hexerei:blood_fluid'
//         },
//         heatRequirement: 'heated'
//     })
// })

BlockEvents.placed('sophisticatedbackpacks:iron_backpack', event => {event.cancel()})
BlockEvents.rightClicked((e) => {
    if (!e.level.isClientSide()) return
    if (e.item == 'sophisticatedbackpacks:iron_backpack') e.cancel()
  })

// let cloud = EntityEvents.spawned()
// cloud.spawnAtLocation()

// BlockEvents.broken('alexscaves:radrock_uranium_ore', event => {
//     event.entity.spawnAtLocation()
// })
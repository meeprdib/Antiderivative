ServerEvents.tags('item', event => {
    event.removeAllTagsFrom('regions_unexplored:raw_redstone_block')
    event.add('ad:soulstone_ore', ['malum:deepslate_soulstone_ore', 'malum:soulstone_ore'])
    event.add('forge:ingots/bronze', 'scguns:treated_brass_ingot')
    event.add('forge:storage_blocks/bronze', 'scguns:treated_brass_block')
    event.add('c:hidden_from_recipe_viewers', 'ae2:facade')
})

ServerEvents.tags("block", (event) => {
  event.remove("minecraft:needs_stone_tool", [
    "crossroads:ore_tin",
    "crossroads:ore_tin_deep",
    "minecraft:iron_ore",
    "minecraft:deepslate_iron_ore",
    "alexscaves:galena_iron_ore",
    "minecraft:copper_ore",
    "minecraft:deepslate_copper_ore",
  ]);
  event.add('minecraft:base_stone_overworld', 'minecraft:grass_block')
});
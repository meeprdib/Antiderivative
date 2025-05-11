global.nukelist = [
  'minecraft:enchanted_book',
  "#quark:shards",
  "aether_redux:infused_veridium_dart_shooter",
  "aether_redux:veridium_dart_shooter",
  "aether_redux:veridium_dart",
  "aether:enchanted_dart_shooter",
  "aether:enchanted_dart",
  "aether:golden_dart_shooter",
  "aether:golden_dart",
  "aether:poison_dart_shooter",
  "aether:poison_dart",
  "botania:blood_pendant",
  "botania:brew_flask",
  "botania:brew_vial",
  "botania:brewery",
  "botania:crafty_crate",
  "botania:flask",
  "botania:floating_marimorphosis_chibi",
  "botania:floating_marimorphosis",
  "botania:floating_orechid_ignem",
  "botania:floating_orechid",
  "botania:marimorphosis_chibi",
  "botania:marimorphosis",
  "botania:orechid_ignem",
  "botania:orechid",
  "botania:vial",
  "crossroads:block_bronze",
  "crossroads:block_ruby",
  "crossroads:block_salt",
  "crossroads:brain_harvester",
  "crossroads:crystal_cooling_coil",
  "crossroads:detailed_auto_crafter",
  "crossroads:detailed_crafter",
  "crossroads:enviro_boots",
  "crossroads:fire_detector",
  "crossroads:gear_facade_cobble",
  "crossroads:gear_facade_glass",
  "crossroads:gem_ruby",
  "crossroads:ingot_bronze",
  "crossroads:lodestone_turbine",
  "crossroads:module_goggles",
  "crossroads:nitroglycerin",
  "crossroads:nugget_bronze",
  "crossroads:nugget_copper",
  "crossroads:ore_ruby",
  "crossroads:poison_vodka",
  "crossroads:propeller_pack",
  "crossroads:sigil_alchemy",
  "crossroads:sigil_technomancy",
  "crossroads:sigil_witchcraft",
  "crossroads:tesla_ray",
  "crossroads:toolbelt",
  "crossroads:vacuum",
  "crossroads:villager_brain",
  "crossroads:void_crystal",
  "crossroads:voltus_generator",
  "deep_aether:chaos_emerald",
  "essentials:auto_crafter",
  "essentials:bricks_bronze",
  "essentials:bricks_copshowium",
  "essentials:bricks_gold",
  "essentials:bricks_iron",
  "essentials:bricks_tin",
  "essentials:redstone_receiver",
  "essentials:redstone_transmitter",
  "quark:chorus_twist",
  "quark:chorus_weeds",
  "quark:lootr_ancient_chest",
  "quark:lootr_ancient_trapped_chest",
  "quark:matrix_enchanter",
  "quark:stone_brick_lamp",
  "quark:stone_lamp",
  "rubinated_nether:freezer",
  "rubinated_nether:rubination_altar",
  "rubinated_nether:runestone",
  "tconstruct:molten_steel_bucket",
  "tconstruct:steel_block",
  "tconstruct:steel_ingot",
  "tconstruct:steel_nugget",
  /^aether:locked_.+/,
  /^aether_redux:locked_.+/,
  /^aether:valkyrie_.+/,
  /^botania:.*pavement.*/,
  /^botania:.*quartz.*/,
  /^botania:.+?_double_flower/,
  /^botania:.+?_floating_flower/,
  /^botania:.+?_mushroom/,
  /^botania:.+?_mystical_flower/,
  /^botania:.+?_petal_block/,
  /^botania:.+?_petal/,
  /^botania:.+?_shiny_flower/,
  /^botania:azulejo_.+/,
  /^botania:chiseled_.+/,
  /^botania:corporea_.+/,
  /^botania:cosmetic.+/,
  /^botania:metamorphic_.+/,
  /^botania:pattern_.+/,
  /^botania:rune_.+/,
  /^deep_aether:locked_.+/,
  /^deep_aether:skyjade.+/,
  /^ecologics:azalea.+/,
  /^essentials:fertile_soil_.+/,
  /^quark:.+?_bookshelf/,
  /^quark:.+?_corundum/,
  /^quark:.+?_crystal_lamp/,
  /^quark:.+?_hedge/,
  /^quark:.+?_ladder/,
  /^quark:.+?_post/,
  /^quark:ancient_.+/,
  /^quark:azalea.+/,
  /^quark:jasper.+/,
  /^quark:myalite.+/,
  /^quark:shale.+/,
  /^traveloptics:augment.+/,
  /^excessive_building:.+?_vertical_stairs/,

];

ServerEvents.tags('item', event => {
   event.removeAllTagsFrom(global.nukelist)
   event.add('ad:nukelist', global.nukelist)
   event.add('c:hidden_from_recipe_viewers', global.nukelist)
})

ServerEvents.tags('block', event => {
    event.removeAllTagsFrom(global.nukelist)
  })

ServerEvents.tags('fluid', event => {
   event.removeAllTagsFrom(global.nukelist)
   event.add('ad:nukelist', global.nukelist)
   event.add('c:hidden_from_recipe_viewers', global.nukelist)
})

ServerEvents.recipes(event => {
   event.remove({ input: global.nukelist })
   event.remove({ output: global.nukelist })
})

LootJS.modifiers(event => {
    event
      .addLootTypeModifier(
         LootType.ENTITY,
         LootType.UNKNOWN,
         LootType.BLOCK,
         LootType.CHEST,
         LootType.FISHING,
         LootType.GIFT,
         LootType.ADVANCEMENT_ENTITY,
         LootType.ADVANCEMENT_REWARD,
         LootType.PIGLIN_BARTER,
      )
      .removeLoot(global.nukelist);
})
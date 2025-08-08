ServerEvents.recipes((event) => {
  let swap = (item1, item2) => {
    event.shapeless(item1, [item2]);
    event.shapeless(item2, [item1]);
  };

  let replaceitem = (toBeReplaced, replacingItem) => {
    event.replaceInput({ input: toBeReplaced }, toBeReplaced, replacingItem);
    global.nukelist.push(toBeReplaced);
  };

  function maceratorBuilder(recipeData) {
    let itemIns = [];
    for (let i = 0; i < 4; i++) {
      console.log(recipeData[i]);
      itemIns.push({ item: recipeData[i] });
    }
    console.log(Item.of(recipeData[4]).id);
    console.log(Item.of(recipeData[4]).count);
    event.custom({
      type: "scguns:macerating",
      processingTime: 200,
      ingredients: itemIns,
      result: {
        item: Item.of(recipeData[4]).id,
        count: Item.of(recipeData[4]).count,
      },
    });

    event.custom({
      type: "scguns:powered_macerating",
      processingTime: 100,
      energyUse: 1000,
      ingredients: itemIns,
      result: {
        item: Item.of(recipeData[4]).id,
        count: Item.of(recipeData[4]).count,
      },
    });
  }

  function alloying(recipeData) {
    maceratorBuilder(recipeData),
      event.smelting(recipeData[5], recipeData[4]).xp(2);
    // event.blasting(recipeData[5], recipeData[4]).xp(2)
  }

  // Refined Storage

  event.shaped("16x refinedstorage:cable", ["AAA", "BCB", "AAA"], {
    A: "#forge:ingots/tin",
    B: "#oreganized:crystal_glass",
    C: "#forge:dusts/redstone",
  });

  event.shaped("refinedstorage:external_storage", ["ABA", "CDC", "ABA"], {
    A: "#forge:nuggets/slimesteel",
    B: "#forge:ingots/tin",
    C: "#storagedrawers:drawers",
    D: "refinedstorage:cable",
  });

  event.shapeless("refinedstorage:importer", [
    "#forge:nuggets/slimesteel",
    "refinedstorage:cable",
    "minecraft:hopper",
  ]);

  swap("refinedstorage:exporter", "refinedstorage:importer");
  event.shaped("refinedstorage:4k_storage_block", ["ABA", "BCB", "ABA"], {
    A: "#forge:ingots/iron",
    B: "#forge:storage_blocks/copper",
    C: "refinedstorage:machine_casing",
  });

  event.shaped("refinedstorage:machine_casing", [" A ", "ABA", " A "], {
    A: "scguns:treated_iron_ingot",
    B: "#minecraft:stone_crafting_materials",
  });

  event.shaped("refinedstorage:wireless_transmitter", ["A", "B"], {
    A: "#crossroads:ingots/copshowium",
    B: "minecraft:redstone_torch",
  });

  event.shaped("refinedstorage:detector", [" A ", "BBB"], {
    A: "minecraft:redstone_torch",
    B: "#forge:ingots/iron",
  });

  swap("refinedstorage:network_receiver", "refinedstorage:network_transmitter");

  event.shaped("refinedstorage:network_transmitter", ["ABA", "BCB", "ABA"], {
    A: "#forge:ender_pearls",
    B: "#crossroads:ingots/copshowium",
    C: "refinedstorage:machine_casing",
  });

  replaceitem(
    "refinedstorage:quartz_enriched_iron",
    "scguns:treated_iron_ingot"
  );

  // Apotheosis

  // event.custom({
  //   type: "malum:spirit_infusion",
  //   extra_items: [
  //     {
  //       count: 1,
  //       tag: "forge:tools/hammer",
  //     },
  //     {
  //       count: 8,
  //       item: "minecraft:stone",
  //     },
  //   ],
  //   input: {
  //     count: 1,
  //     item: "minecraft:smithing_table",
  //   },
  //   output: {
  //     item: "apotheosis:simple_reforging_table",
  //   },
  //   spirits: [
  //     {
  //       type: "arcane",
  //       count: 16,
  //     },
  //     {
  //       type: "wicked",
  //       count: 8,
  //     },
  //     {
  //       type: "earthen",
  //       count: 32,
  //     },
  //   ],
  // });

  // event.custom({
  //   type: "malum:spirit_infusion",
  //   extra_items: [
  //     {
  //       count: 1,
  //       item: "cataclysm:infernal_forge",
  //     },
  //     {
  //       count: 5,
  //       item: "malum:malignant_pewter_ingot",
  //     },
  //     {
  //       count: 6,
  //       item: "oreganized:lead_ingot",
  //     },
  //     {
  //       count: 2,
  //       item: "scguns:scorched_ingot",
  //     },
  //   ],
  //   input: {
  //     count: 1,
  //     item: "apotheosis:simple_reforging_table",
  //   },
  //   output: {
  //     item: "apotheosis:reforging_table",
  //   },
  //   spirits: [
  //     {
  //       type: "arcane",
  //       count: 32,
  //     },
  //     {
  //       type: "wicked",
  //       count: 12,
  //     },
  //     {
  //       type: "eldritch",
  //       count: 32,
  //     },
  //   ],
  // });

  // event.custom({
  //   type: "malum:spirit_infusion",
  //   extra_items: [
  //     {
  //       count: 6,
  //       item: "crossroads:ingot_copshowium",
  //     },
  //   ],
  //   input: {
  //     count: 1,
  //     item: "minecraft:smithing_table",
  //   },
  //   output: {
  //     item: "apotheosis:augmenting_table",
  //   },
  //   spirits: [
  //     {
  //       type: "arcane",
  //       count: 32,
  //     },
  //     {
  //       type: "sacred",
  //       count: 12,
  //     },
  //     {
  //       type: "eldritch",
  //       count: 8,
  //     },
  //   ],
  // });

  // Scorched Guns

  event.shaped("scguns:macerator", ["A A", "BCB", "BDB"], {
    A: Item.of("crossroads:gear_base", '{material:"iron"}'),
    B: "#forge:ingots/iron",
    C: "minecraft:furnace",
    D: "minecraft:redstone_block",
  });

  // Alloying

  alloying([
    "malum:arcane_charcoal",
    "scguns:treated_iron_blend",
    "kubejs:netherite_blend",
    "kubejs:netherite_blend",
    "2x art_of_forging:resonant_alloy",
    "art_of_forging:forged_steel_ingot",
  ]);

  alloying([
    "oreganized:silver_ingot",
    "oreganized:silver_ingot",
    "malum:hallowed_gold_ingot",
    "malum:hallowed_gold_ingot",
    "3x kubejs:electrum_blend",
    "oreganized:electrum_ingot",
  ]);

  alloying([
    "scguns:vehement_coal",
    "malum:hallowed_gold_ingot",
    "minecraft:netherite_scrap",
    "minecraft:netherite_scrap",
    "kubejs:netherite_blend",
    "minecraft:netherite_ingot",
  ]);

  alloying([
    "art_of_forging:resonant_alloy",
    "art_of_forging:resonant_alloy",
    "minecraft:ender_pearl",
    "minecraft:ender_pearl",
    "kubejs:endsteel_blend",
    "art_of_forging:endsteel_ingot",
  ]);

  alloying([
    "minecraft:copper_ingot",
    "minecraft:copper_ingot",
    "crossroads:ingot_tin",
    'refinedstorage:silicon',
    "3x scguns:treated_brass_blend",
    "scguns:treated_brass_ingot",
  ]);

  // Crossroads

  event.shaped('crossroads:fluid_tank', ['AAA', 'A A', 'AAA'], {
    A: '#forge:ingots/bronze'
  })

  //Misc

  replaceitem("crossroads:ingot_bronze", "scguns:treated_brass_ingot");
  replaceitem("minecraft:ender_eye", "#forge:ender_pearls");

  event.shaped("minecraft:stonecutter", [" A ", "BBB"], {
    A: "#forge:ingots/iron",
    B: "#minecraft:stone_crafting_materials",
  });

  event.shaped("sawmill:sawmill", [" A ", "BBB"], {
    A: "#forge:ingots/iron",
    B: "#minecraft:planks",
  });

  event.shaped("minecraft:composter", ["A A", "A A", "ABA"], {
    A: "#minecraft:wooden_slabs",
    B: "#minecraft:planks",
  });

  event.shaped("minecraft:hopper", ["A A", "ABA", " A "], {
    A: "#forge:ingots/tin",
    B: "#forge:chests/wooden",
  });

  event.shaped("minecraft:minecart", ["A A", "AAA"], {
    A: "#forge:ingots/tin",
  });

  event.shaped("minecraft:grindstone", ["ABA", "C C"], {
    A: "#forge:rods/wooden",
    B: "#forge:stone",
    C: '#minecraft:planks'
  });
});

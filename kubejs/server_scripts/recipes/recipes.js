ServerEvents.recipes((event) => {
  let swap = (item1, item2) => {
    event.shapeless(item1, [item2]);
    event.shapeless(item2, [item1]);
  };

  let replaceitem = (toBeReplaced, replacingItem) => {
    event.replaceInput({ input: toBeReplaced }, toBeReplaced, replacingItem);
    global.nukelist.push(toBeReplaced);
  };

  function makeJsonIngredients(inputs) {
    let finalInputs = [];
    for (let input of inputs) {
      let ingredient = "";
      // get the ingredient which can only be read by converting the data to json

      // checking input.class checks if the input is an Ingredient stack idk how else to do it
      if (typeof input == "object" && input.class) {
        ingredient = input;
        // if the input is a string, it's likely just a item string e.g. '4x minecraft:dirt', convert it to an itemstack then ingredient
      } else if (typeof input == "string") {
        if (input.includes("#")) {
          ingredient = Ingredient.of(input);
        } else {
          ingredient = Ingredient.of(Item.of(input).id, Item.of(input).count);
        }
      } else {
        // if the input doesn't match either of the others it's probably already an item stack, convert it to an ingredient
        ingredient = Ingredient.of(input.id, input.count);
      }

      // converting the ingredient to json, then also parsing it because toJson() returns a java hashmap
      // which I couldn't figure out how to read or convert to js object
      let obj = JSON.parse(ingredient.toJson());

      // remove the ingredient part of the obj since recipes dont often use that
      obj = Object.assign(obj, obj.ingredient);
      delete obj.ingredient;

      finalInputs.push(obj);
    }
    return finalInputs;
  }

  function maceratorBuilder(output, inputs) {
    output = Item.of(output);
    event.custom({
      type: "scguns:macerating",
      processingTime: 200,
      ingredients: makeJsonIngredients(inputs),
      result: {
        item: output.id,
        count: output.count,
      },
    });

    event.custom({
      type: "scguns:powered_macerating",
      processingTime: 100,
      energyUse: 1000,
      ingredients: makeJsonIngredients(inputs),
      result: {
        item: output.id,
        count: output.count,
      },
    });
  }

  function alloying(smeltOutput, procOutput, inputs) {
    maceratorBuilder(procOutput, inputs);
    event
      .smelting(smeltOutput, procOutput)
      .xp(2)
      .id(`kubejs:alloysmelting/${smeltOutput.split(":")[1]}`);
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

  // Scorched Guns

  event.shaped("scguns:macerator", ["A A", "BCB", "BDB"], {
    A: Item.of("crossroads:gear_base", '{material:"iron"}'),
    B: "#forge:ingots/iron",
    C: "minecraft:furnace",
    D: "minecraft:redstone_block",
  });

  // event.shaped('scguns:powered_macerator', )

  // Alloying

  alloying("art_of_forging:forged_steel_ingot", "2x art_of_forging:resonant_alloy", [
      "malum:arcane_charcoal",
      "scguns:treated_iron_blend",
      "kubejs:netherite_blend",
      "kubejs:netherite_blend",
    ]);

  alloying("3x kubejs:electrum_blend", "oreganized:electrum_ingot", [
    "oreganized:silver_ingot",
    "oreganized:silver_ingot",
    "malum:hallowed_gold_ingot",
    "malum:hallowed_gold_ingot",
  ]);

  alloying("kubejs:endsteel_blend", "art_of_forging:endsteel_ingot", [
    "scguns:vehement_coal",
    "malum:hallowed_gold_ingot",
    "minecraft:netherite_scrap",
    "minecraft:netherite_scrap",
  ]);

  alloying("3x scguns:treated_brass_blend", "scguns:treated_brass_ingot", [
    "minecraft:copper_ingot",
    "minecraft:copper_ingot",
    "crossroads:ingot_tin",
    "refinedstorage:silicon",
  ]);

  // Crossroads

  event.shaped("crossroads:fluid_tank", ["AAA", "A A", "AAA"], {
    A: "#forge:ingots/bronze",
  });

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
    C: "#minecraft:planks",
  });
});

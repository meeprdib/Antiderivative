let swap = (item1, item2) => {
  event.shapeless(item1, [item2]);
  event.shapeless(item2, [item1]);
};

let replaceitem = (toBeReplaced, replacingItem) => {
  event.replaceInput({ input: toBeReplaced }, toBeReplaced, replacingItem);
  global.nukelist.push(toBeReplaced);
};

ServerEvents.recipes((event) => {
  // Vanilla
  event.shaped("minecraft:hopper", ["A A", "ABA", " A "], {
    A: "#forge:ingots/tin",
    B: "#forge:chests/wooden",
  });
  event.shaped("minecraft:minecart", ["A A", "AAA"], {
    A: "#forge:ingots/tin",
  });

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
  replaceitem(['refinedstorage:quartz_enriched_iron', 'scguns:treated_iron_ingot'])
});

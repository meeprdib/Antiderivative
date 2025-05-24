ServerEvents.recipes((event) => {
  event.shaped("minecraft:hopper", ["A A", "ABA", " A "], {
    A: "#forge:ingots/tin",
    B: "#forge:chests/wooden",
  });
  event.shaped("minecraft:minecart", ["A A", "AAA"], {
    A: "#forge:ingots/tin",
  });
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
  event.shapeless("refinedstorage:exporter", ["refinedstorage:importer"]);
});

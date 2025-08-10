ServerEvents.recipes((event) => {
  const removedTypes = [
    "aether:repairing",
    "botania:orechid",
    "botania:orechid_ignem",
    "botania:marimorphosis",
    "crossroads:alchemy",
    "botania:botanical_brewery"
  ];

  const removedIDs = [
    "art_of_forging:endsteel_ingot",
    "art_of_forging:forged_steel_from_blasting_alloy",
    "art_of_forging:resonant_alloy",
    "minecraft:grindstone",
    "minecraft:hopper",
    "minecraft:minecart",
    "minecraft:netherite_ingot",
    "oreganized:electrum_ingot",
    "refinedstorage:cable",
    "refinedstorage:exporter",
    "refinedstorage:external_storage",
    "refinedstorage:importer",
    "refinedstorage:network_receiver",
    "refinedstorage:network_transmitter",
    "refinedstorage:wireless_transmitter",
    "scguns:treated_iron/treated_iron_hopper",
    "scguns:macerator",
    "minecraft:stonecutter",
    "sawmill:sawmill",
    "minecraft:composter",
    "crossroads:base_materials/bronze_alloy_nugg",
    "scguns:treated_brass_ingot_from_smelting_treated_brass_blend",
    'crossroads:fluid_tank',
    "minecraft:rail",
    "minecraft:powered_rail",
    "minecraft:detector_rail",
    "minecraft:activator_rail",
    'littlelogistics:spring',
    'littlelogistics:tug_dock',
    'littlelogistics:barge_dock',
    'essentials:speed_hopper',
  ];
  const removedInputs = [];
  const removedOutputs = [];

  removedTypes.forEach((type) => event.remove({ type: type }));
  removedIDs.forEach((id) => event.remove({ id: id }));
  removedInputs.forEach((input) => event.remove({ input: input }));
  removedOutputs.forEach((output) => event.remove({ output: output }));
});

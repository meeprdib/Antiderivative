let raw_material_definition = (
  ore,
  raw,
  rawBlock,
  ingot,
  ingotBlock,
  nugget,
  fluidBucket,
  fluidFluid,
  dust
) => {};

raw_material_definition(
  "#forge:ores/gold",
  "minecraft:raw_gold",
  "minecraft:raw_gold_block",
  "minecraft:gold_ingot",
  "minecraft:gold_block",
  "minecraft:gold_nugget",
  "tconstruct:molten_gold_bucket",
  "tconstruct:molten_gold",
  "crossroads:dust_gold"
);

raw_material_definition(
  "#forge:ores/iron",
  "minecraft:raw_iron",
  "minecraft:raw_iron_block",
  "minecraft:iron_ingot",
  "minecraft:iron_block",
  "minecraft:iron_nugget",
  "tconstruct:molten_iron_bucket",
  "tconstruct:molten_iron",
  "crossroads:dust_iron"
);

raw_material_definition(
  "tconstruct:cobalt_ore",
  "tconstruct:raw_cobalt",
  "tconstruct:raw_cobalt_block",
  "tconstruct:cobalt_ingot",
  "tconstruct:cobalt_block",
  "tconstruct:cobalt_nugget",
  "tconstruct:molten_cobalt_bucket",
  "tconstruct:molten_cobalt",
  "kubejs:cobalt_dust"
);

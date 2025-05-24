// Bulk generates recipes for materials

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
  "#forge:ores/silver",
  "galosphere:raw_silver",
  "galosphere:raw_silver_block",
  "galosphere:silver_ingot",
  "galosphere:silver_block",
  "galosphere:silver_nugget",
  "tconstruct:molten_silver_bucket",
  "tconstruct_molten_silver",
  "kubejs:silver_dust"
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
  "#forge:ores/copper",
  "minecraft:raw_copper",
  "minecraft:raw_copper_block",
  "minecraft:copper_ingot",
  "minecraft:copper_block",
  'tconstruct:copper_nugget',
  "tconstruct:molten_copper_bucket",
  "tconstruct:molten_copper",
  "crossroads:dust_copper"
);

raw_material_definition(
  "#forge:ores/lead",
  "oreganized:raw_lead",
  "oreganized:raw_lead_block",
  "oreganized:lead_ingot",
  "oreganized:lead_block",
  "oreganized:lead_nugget",
  "tconstruct:molten_lead_bucket",
  "tconstruct:molten_lead",
  "kubejs:lead_dust"
);

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
  "#forge:ores/tin",
  "crossroads:raw_tin",
  "crossroads:block_raw_tin",
  "crossroads:ingot_tin",
  "crossroads:block_tin",
  "crossroads:nugget_tin",
  "tconstruct:molten_tin_bucket",
  "tconstruct:molten_tin",
  "crossroads:dust_tin"
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

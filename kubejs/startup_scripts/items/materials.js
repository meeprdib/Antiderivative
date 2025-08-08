global.extendedMaterials = [
  "lead",
  "silver",
  "cobalt",
  "soulstone",
  "brilliance"
];

let newItems = [
  "soulstone_nugget",
  "brilliance_nugget",
  "electrum_blend",
  "netherite_blend",
  'endsteel_blend',
  'vobrivium_blend'
];

StartupEvents.registry("item", event => {
  global.extendedMaterials.forEach(material => {
    event.create(`${material}_dust`);
    event.create(`${material}_grit`);
  });

  newItems.forEach(item => {
    event.create(item);
  });
});

StartupEvents.registry("fluid", event => {
  event.create("molten_soulstone").thickTexture(0xA338A8)
})
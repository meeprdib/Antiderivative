StartupEvents.registry("potion", (event) => {
  let potionBuilder = Java.loadClass("dev.latvian.mods.kubejs.misc.PotionBuilder");

  let potionRegistration = (effect, name, length, amplification) => {
    event.createCustom(`kubejs:${name.toLowerCase().replace(/\s+/g, "_")}`, () => {
      return new potionBuilder(effect)
        .effect(effect, length, amplification)
        .createObject();
    });
  };

  potionRegistration(`irons_spellbooks:angel_wings`, 'Angel Wings', 3600, 0);
  potionRegistration(`irons_spellbooks:angel_wings`, 'Long Angel Wings', 9600, 0);
});

StartupEvents.registry("mob_effect", (event) => {
  event
    .create("fortune")
    .color(0x000000)
    .beneficial()
    .modifyAttribute(
      "tinkersjewelry:fortune",
      "e0f4e796-3d3d-11ee-be56-0242ac183754",
      1,
      "addition"
    );
});

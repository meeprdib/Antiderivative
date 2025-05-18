StartupEvents.registry('item', event => {
  event.create('fire_staff', "irons_spells_js:staff")
  .modelJson(JsonIO.read('kubejs/assets/kubejs/models/item/fire_staff.json'))
  .rarity("traveloptics:ignis")

  event.create('ender_staff', "irons_spells_js:staff")
  .modelJson(JsonIO.read('kubejs/assets/kubejs/models/item/ender_staff.json'))
  .rarity("traveloptics:void")

event.create('teleportation_staff', "irons_spells_js:staff")
  .modelJson(JsonIO.read('kubejs/assets/kubejs/models/item/teleportation_staff.json'))
  .modifyAttribute("additional_attributes:innate_spell/irons_spellbooks/teleport", "Teleport", 1.0, "addition")
  .rarity("traveloptics:void")
})
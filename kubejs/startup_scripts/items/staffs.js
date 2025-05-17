StartupEvents.registry('item', event => {
  event.create('fire_staff', "irons_spells_js:staff")
  .modelJson(JsonIO.read('kubejs/assets/kubejs/models/item/fire_staff.json'))
  .rarity("traveloptics:ignis")
})
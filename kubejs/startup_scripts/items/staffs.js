StartupEvents.registry('item', event => {
  event.create('fire_staff', "irons_spells_js:staff")
  .modelJson(JsonIO.read('kubejs/assets/kubejs/models/item/fire_staff.json'))
  // .rarity("traveloptics:ignis")

  event.create('ender_staff', "irons_spells_js:staff")
  .modelJson(JsonIO.read('kubejs/assets/kubejs/models/item/ender_staff.json'))
  // .rarity("traveloptics:void")

event.create('teleportation_staff', "irons_spells_js:staff")
  .modelJson(JsonIO.read('kubejs/assets/kubejs/models/item/teleportation_staff.json'))
  // .rarity("traveloptics:void")

event.create('nature_staff', "irons_spells_js:staff")
  .modelJson(JsonIO.read('kubejs/assets/kubejs/models/item/nature_staff.json'))
  // .rarity("traveloptics:natural")

  event.create('blood_staff', "irons_spells_js:staff")
  .modelJson(JsonIO.read('kubejs/assets/kubejs/models/item/blood_staff.json'))
  .rarity("alexscaves:demonic")	

    event.create('ice_staff', "irons_spells_js:staff")
  .modelJson(JsonIO.read('kubejs/assets/kubejs/models/item/ice_staff.json'))
  .rarity("rare")
})
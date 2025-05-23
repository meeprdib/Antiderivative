StartupEvents.registry('potion', event=>{
   let potionBuilder =  Java.loadClass('dev.latvian.mods.kubejs.misc.PotionBuilder')
   let effect = `irons_spellbooks:angel_wings`
 
   event.createCustom('kubejs:angel_wings', ()=>{
      return new potionBuilder(`irons_spellbooks:angel_wings`)
      .effect(effect, 200, 0)
      .createObject()
   })
   event.createCustom('kubejs:long_angel_wings', ()=>{
      return new potionBuilder(`irons_spellbooks:angel_wings`)
      .effect(effect, 600, 0)
      .createObject()
   })
})
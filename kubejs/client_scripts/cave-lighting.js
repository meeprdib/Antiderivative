const $ClientProxy = Java.loadClass(
    'com.github.alexmodguy.alexscaves.client.ClientProxy'
)
const $Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3')

const biomeMap = {
    // Cave biomes
    ancient_delta: [0.07, $Vec3(0.55, 0.78, 0.94)],
    redstone_caves: [0.05, $Vec3(0.15, 0.1, 0.1)],
    prismachasm: [0.05, "gay"],

    // Nether biomes
    nether_wastes: [0.5, $Vec3(0.7, 0.6, 0.6)],
}
let color = $Vec3(1, 1, 1), light = 0;

ClientEvents.tick(event => {
    let [biomeLight, biomeColor] = biomeMap[
        event.level
        .getBiome(event.player.blockPosition())
        .unwrapKey()
        .get().path
    ] ?? [];

    $ClientProxy.lastBiomeAmbientLightAmount = light = 
        biomeLight > light ? Math.min(biomeLight, light + 0.001) : Math.max(0, light - 0.001)

    let lerp = 0.01;
    if(biomeColor == "gay") {
        lerp = 0.1;
        let tick = event.level.getDayTime() % 400;
        let warmColor = tick % 100 / 100;
        let coolColor = tick % 50 / 50;
        if(tick < 100) biomeColor = $Vec3(1, warmColor, 0);
        else if (tick < 200) biomeColor = $Vec3(1 - warmColor, 1, 0);
        else if (tick < 250) biomeColor = $Vec3(0, 1, coolColor);
        else if (tick < 300) biomeColor = $Vec3(0, 1 - coolColor, 1);
        else if (tick < 350) biomeColor = $Vec3(coolColor, 0, 1);
        else biomeColor = $Vec3(1, 0, 1 - coolColor);
        biomeColor = biomeColor.lerp($Vec3(1, 1, 1), 0.25);
    }
    
    $ClientProxy.lastBiomeLightColor = color = color.lerp(biomeColor ?? $Vec3(1, 1, 1), lerp);
})
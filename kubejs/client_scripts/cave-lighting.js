const $ClientProxy = Java.loadClass(
    'com.github.alexmodguy.alexscaves.client.ClientProxy'
)
const $Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3')

const biomeMap = {
    // Cave biomes
    ancient_delta: [0.07, $Vec3(0.55, 0.78, 0.94)],
    redstone_caves: [0.05, $Vec3(0.15, 0.1, 0.1)],
    prismachasm: [0.05, "gay"],
    pink_salt_caves: [0.07, $Vec3(0.33, 0.3, 0.3)],
    lush_caves: [0.07, $Vec3(0.4, 0.38, 0.3)],
    crystal_canyons: [0.07, $Vec3(0.3, 0.3, 0.3)],
    frosted_caves: [0.06, $Vec3(0.3, 0.3, 0.4)],
    lichen_caves: [0.05, $Vec3(0.3, 0.4, 0.3)],
    lost_caves: [0.06, $Vec3(0.4, 0.3, 0.3)],
    dripstone_caves: [0.04, $Vec3(0.4, 0.4, 0.4)],
    deep_dark: [0.05, $Vec3(0.3, 0.5, 0.5)],
    scorching_caves: [0.05, $Vec3(0.5, 0.5, 0.5)],

    // Nether biomes
    nether_wastes: [0.3, $Vec3(0.7, 0.6, 0.6)],
    warped_forest: [0.3, $Vec3(0.6, 0.7, 0.7)],
    black_ice_glaciers: [0.3, $Vec3(0.6, 0.6, 0.7)],
    crimson_forest: [0.3, $Vec3(0.7, 0.6, 0.6)],
    soul_sand_valley: [0.3, $Vec3(0.6, 0.7, 0.7)],
    redstone_abyss: [0.3, $Vec3(0.8, 0.6, 0.6)],
    blackstone_basin: [0.3, $Vec3(0.3, 0.4, 1.0)],
    mycotoxic_undergrowth: [0.3, $Vec3(0.5, 0.3, 0.2)],
    glistering_meadow: [0.3, $Vec3(0.7, 0.3, 0.7)],
    infernal_holt: [0.3, $Vec3(0.4, 0.4, 0.4)],
    basalt_deltas: [0.3, $Vec3(0.4, 0.4, 0.4)],


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
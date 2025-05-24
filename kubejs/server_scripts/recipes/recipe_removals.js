ServerEvents.recipes((event) => {
  const removedTypes = [
    "aether:repairing",
    "botania:orechid",
    "botania:orechid_ignem",
    "botania:marimorphosis",
    "crossroads:alchemy",
    "botania:botanical_brewery"
  ];

  const removedIDs = [
    'scguns:treated_iron/treated_iron_hopper',
    'minecraft:hopper',
    'minecraft:minecart',
    'refinedstorage:cable',
    'refinedstorage:external_storage',
    'refinedstorage:importer',
    'refinedstorage:exporter',
    'refinedstorage:wireless_transmitter',
    'apotheosis:enchanted_golden_apple',
    'refinedstorage:network_transmitter',
    'refinedstorage:network_receiver',
  ];
  const removedInputs = [];
  const removedOutputs = [];

  removedTypes.forEach((type) => event.remove({ type: type }));
  removedIDs.forEach((id) => event.remove({ id: id }));
  removedInputs.forEach((input) => event.remove({ input: input }));
  removedOutputs.forEach((output) => event.remove({ output: output }));
});

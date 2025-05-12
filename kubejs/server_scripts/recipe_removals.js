ServerEvents.recipes((event) => {
  const removedTypes = [
    "aether:repairing",
    "botania:orechid",
    "botania:orechid_ignem",
    "botania:marimorphosis",
    "crossroads:alchemy",
    "botania:botanical_brewery"
  ];

  const removedIDs = [];
  const removedInputs = [];
  const removedOutputs = [];

  removedTypes.forEach((type) => event.remove({ type: type }));
  removedIDs.forEach((id) => event.remove({ id: id }));
  removedInputs.forEach((input) => event.remove({ input: input }));
  removedOutputs.forEach((output) => event.remove({ output: output }));
});

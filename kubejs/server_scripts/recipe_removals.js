ServerEvents.recipes(event => {

    const removedTypes = [
        'aether:repairing',
    ].forEach(remove => event.remove({type: remove}))

    const removedIDs = [

    ].forEach(remove => event.remove({id: remove}))

    const removedInputs = [

    ].forEach(remove => event.remove({input: remove}))

    const removedOutputs = [

    ].forEach(remove => event.remove({input: remove}))
})
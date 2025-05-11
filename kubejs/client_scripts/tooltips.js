ItemEvents.tooltip((event) => {
    event.addAdvanced(["minecraft:filled_map"], (item, advanced, text) => {
        if (item.nbt?.Decorations) {
          let decorations = item.nbt.Decorations;
          decorations.forEach((decor) => {
            if (decor.x && decor.z) {
              text.add(1, [Text.green(`x: ${decor.x}, z: ${decor.z}`)]);
            }
          });
        } 
      });
})

// ItemEvents.firstRightClicked((event) => {
//     event.


// })
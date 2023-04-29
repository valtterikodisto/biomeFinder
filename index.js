const biomes = [
  ["water", -3900, -1200, -25, 50, "common"],
  ["deep water", -4500, -3600, -22.5, 50, "common"],
  ["shallow water", -1200, 0, -25, 50, "common"],
  ["coniferous forest", 300, 6000, -25, 5, "common"],
  ["tropical forest", 300, 4500, 0, 50, "common"],
  ["deciduous forest", 300, 3000, -15, 5, "common"],
  ["steppe", 300, 3000, -25, 12.5, "common"],
  ["savanna", 300, 4500, 0, 35, "common"],
  ["tundra", 300, 4500, -50, -20, "common"],
  ["foothills", 2100, 5400, -17.5, 12.5, "common"],
  ["taiga", 300, 5700, -50, -17.5, "common"],
  ["semi-desert", 300, 5100, 0, 32.5, "common"],
  ["frosty fields", 300, 4500, -50, -27.5, "uncommon"],
  ["highlands", 4800, 6900, -50, 37.5, "uncommon"],
  ["desert", -600, 5100, 15, 50, "uncommon"],
  ["ice", -4500, 0, -50, -20, "uncommon"],
  ["mountains", 6600, 7500, -50, 50, "uncommon"],
  ["swamp", 0, 3000, -15, 5, "uncommon"],
  ["frosty swamp", 0, 5400, -50, -20, "uncommon"],
  ["tropical swamp", 0, 1500, 10, 50, "uncommon"],
  ["mushroom grove", -900, 3300, -20, 25, "rare"],
  ["underwater volcanos", -3900, -600, 25, 5, "rare"],
  ["holy land", 1500, 7200, -50, 12.5, "rare"],
  ["mountain glacier", 7500, 7500, -50, 37.5, "rare"],
  ["crystal rift", 3900, 7200, -50, 0, "rare"],
  ["garbage island", -4500, -600, 0, 25, "mythical"],
  ["demonic crack", -3900, -600, -17.5, 12.5, "mythical"],
  ["slime", 300, 1500, -10, 37.5, "mythical"],
  ["scorched earth", 300, 5400, 25, 50, "mythical"],
  ["toxic swamp", 0, 5400, 25, 50, "legendary"],
  ["volcano", 7200, 7500, -25, 50, "legendary"],
  ["radioactive wasteland", 300, 4500, 15, 50, "legendary"],
];

const findBiomes = (height, temperature) => {
  const matchingBiomes = [];

  for (let i = 0; i < biomes.length; i++) {
    const biome = biomes[i];
    const minHeight = biome[1];
    const maxHeight = biome[2];
    const minTemp = biome[3];
    const maxTemp = biome[4];

    if (
      height >= minHeight &&
      height <= maxHeight &&
      temperature >= minTemp &&
      temperature <= maxTemp
    ) {
      matchingBiomes.push({
        name: biome[0],
        minHeight: biome[1],
        maxHeight: biome[2],
        minTemp: biome[3],
        maxTemp: biome[4],
        rarity: biome[5],
      });
    }
  }

  return matchingBiomes;
};

// Ask user for height and temperature in the CLI
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Height: ", (raw_height) => {
  readline.question("Temperature: ", (raw_temperature) => {
    readline.close();
    const height = parseFloat(raw_height);
    const temperature = parseFloat(raw_temperature);

    // Find matching biomes
    const matchingBiomes = findBiomes(height, temperature);

    // Print matching biomes
    console.table(matchingBiomes);
  });
});

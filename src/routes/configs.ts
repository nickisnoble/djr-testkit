import type { FontConfig } from "$lib/types.d.ts"

const configs: FontConfig[] = [
  {
    name: "RoslindaleVariable",
    axes: [
      {
        name: "Optical Size",
        tag: "opsz",
        type: "range",
        value: {
          waypoints: [
            ["Display",     48],
            ["Deck",        16],
            ["Text",        10]
          ]
        }
      },
      {
        name: "Width",
        tag: "wdth",
        type: "range",
        value: {
          waypoints: [
            ["Condensed",   75],
            ["Narrow",      88],
            ["Normal",      100]
          ]
        }
      },
      {
        name: "Weight",
        tag: "wght",
        type: "range",
        value: {
          waypoints: [
            ["Extra Light", 200],
            ["Light",       300],
            ["Regular",     400],
            ["Medium",      500],
            ["Semi Bold",   600],
            ["Bold",        700],
            ["Black",       800],
            ["Ultra",       900]
          ]
        }
      },
      {
        name: "Slant",
        tag: "slnt",
        type: "range",
        value: {
          waypoints: [
            ["Roman",       0],
            ["Italic",      -8]
          ]
        }
      }
    ],
    // stylisticSets: [],
    // presets: []
  }
]

export default configs;
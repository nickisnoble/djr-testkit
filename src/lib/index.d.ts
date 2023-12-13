type FontConfig = {
  name: string,
  filepath: string,
  fontSize?: RangeSetting,
  leading?: RangeSetting,
  previewText?: string,
  axes: VariableAxis[]
  stylisticSets: StylisticSet[]
  presets: Preset[]
}

type Waypoint = {
  label: string,
  value: number
} | number

type RangeSetting = {
  min?: number,
  max?: number,
  default?: number,
  waypoints?: Waypoint[]
}

type ToggleSetting = boolean;

type VariableAxis = {
  label?: string,
  key: string,
  type: "toggle" | "range",
  value: RangeSetting | ToggleSetting,
}

type StylisticSet = {
  label?: string,
  key: string,
  active: ToggleSetting,
  characters: string
}

type Preset = {
  label: string,
  description?: string,
  settings: Array<{
    axis: keyof VariableAxis,
    value: number
  }>
}
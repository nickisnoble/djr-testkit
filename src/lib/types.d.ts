export type FontConfig = {
  name: string, // must match @font-face declaration
  fontSize?: ClampedRangeSetting,
  leading?: ClampedRangeSetting,
  previewText?: string,
  axes?: VariableAxis[]
  stylisticSets?: StylisticSet[]
  presets?: Preset[]
}

export type ToggleSetting = boolean;

export type ClampedRangeSetting = {
  min?: number,
  max?: number,
  default: number,
  step?: number,
  waypoints?: Waypoint[]
}

type Waypoint = [string, number] | number

type VariableAxis = {
  name?: string,
  tag: string,
  type: "toggle" | "range",
  value: ClampedRangeSetting | ToggleSetting,
}

type StylisticSet = {
  name?: string,
  tag: string,
  active: ToggleSetting,
  characters: string
}

type Preset = {
  name: string,
  description?: string,
  settings: Array<{
    axis: keyof VariableAxis,
    value: number
  }>
}

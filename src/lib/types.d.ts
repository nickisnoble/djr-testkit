export type FontConfig = {
  name: string, // must match @font-face declaration
  fontSize?: RangeSetting,
  leading?: RangeSetting,
  previewText?: string,
  axes?: VariableAxis[]
  stylisticSets?: StylisticSet[]
  presets?: Preset[]
}

export type RangeSetting = {
  min?: number,
  max?: number,
  default?: number,
  waypoints?: Waypoint[]
}

export type ToggleSetting = boolean;

type VariableAxis = {
  name?: string,
  tag: string,
  type: "toggle" | "range",
  value: RangeSetting | ToggleSetting,
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

type Waypoint = [string, number] | number

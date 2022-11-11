export type TTabType = 'line' | 'card' | 'grid' | 'dynamic'
export type TTabSize = 'middle' | 'small'
export type TTabPosition = 'top' | 'left' | 'right' | 'bottom'
export type TTabEffect = 'scroll' | 'fade' | 'none'
export type TTabActiveName = string | number
export type onBeforeLeave = (
  prevName: TTabActiveName,
  nextName: TTabActiveName
) => boolean | Promise<unknown>
// export function beforeLeave(prev: TTabActiveName, next: TTabActiveName): boolean

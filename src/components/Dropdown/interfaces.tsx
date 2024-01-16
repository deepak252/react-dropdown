export interface Option {
  /**Unique identifier */
  value: string | number
  /**Label value to display */
  label: string
  /**Sub-label value to display */
  subLabel?: string
  /** Image path or url */
  icon?: string
}

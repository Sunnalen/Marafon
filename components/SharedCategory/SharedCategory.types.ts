export type TSizeCategory = 'l' | 'm' | 's'

export interface ISharedCategoryProps {
  size?: TSizeCategory,
  category: string,
  date: string,
  title: string,
  text?: string
}

export type TCategoryClass = Record<TSizeCategory, string>
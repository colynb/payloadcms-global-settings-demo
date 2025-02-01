import type { Navigation } from '@/payload-types'
import { getGlobal } from './getGlobal'

export const getMenu = async (menuSlug: string) => {
  const navgiationData = (await getGlobal('navigation', 1)()) as Navigation // stupid!
  const menu = navgiationData?.menus.find((menu) => menu.menuSlug === menuSlug)
  return menu
}

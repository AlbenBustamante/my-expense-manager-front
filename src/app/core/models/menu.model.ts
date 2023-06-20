export interface MenuItem {
  title: string;
  route?: string;
  space?: boolean;
  showSubMenu?: boolean;
  icon?: string;
  subMenuItems?: {
    title: string;
    route?: string;
    space?: boolean;
    icon?: string;
  }[];
}

export type MenuItems = MenuItem[];

export interface MenuItem {
  title: string;
  route?: string;
  space?: boolean;
  showSubMenu?: boolean;
  icon?: string;
  selected?: boolean;
  subMenuItems?: {
    title: string;
    route?: string;
    space?: boolean;
    icon?: string;
    selected?: boolean;
  }[];
}

export type MenuItems = MenuItem[];

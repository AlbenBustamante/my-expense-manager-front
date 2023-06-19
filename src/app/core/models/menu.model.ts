export interface MenuItem {
  title: string;
  route?: string;
  space?: boolean;
  showSubMenu?: boolean;
  subMenuItems?: {
    title: string;
    route?: string;
    space?: boolean;
  }[];
}

export type MenuItems = MenuItem[];

export type SubMenuItem = {
  label: string;
  link?: string;
};

export type MenuItem = {
  label: string;
  link: string;
  submenu: SubMenuItem[];
};

export type MenuResponse = {
  data: MenuItem[];
};

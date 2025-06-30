export type SubMenuItem = {
  external?: boolean;
  label: string;
  url: string;
  order: number;
};

export type MenuItem = {
  children: SubMenuItem[];
  external?: boolean;
  label: string;
  url: string;
  order: number;
};

export type MenuResponse = {
  data: MenuItem[];
};

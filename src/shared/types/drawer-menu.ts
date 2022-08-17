import { ReactNode } from "react";

export interface IDrawerMenuProps {
  children: ReactNode;
}

export interface IListItemLinkProps {
  label: string;
  icon: string;
  to: string;
  onClick?: () => void;
}

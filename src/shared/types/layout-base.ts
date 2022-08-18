import { ReactNode } from "react";

export interface ILayoutBaseProps {
  children: ReactNode;
  toolbars?: ReactNode;
  title: string;
}

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

export interface IListingTools {
  textSearch?: string;
  showInputSearch?: boolean;
  textButtonNew?: string;
  showButtonNew?: boolean;
  onClickNew?: () => void;
  onChangeInputSearch?: (newText: string) => void;
}

export interface IDetailsToolsProps {
  textButtonNew?: string;
  showButtonNew?: boolean;
  showButtonBack?: boolean;
  showButtonDelete?: boolean;
  showButtonSave?: boolean;
  showButtonSaveAndClose?: boolean;

  showButtonSaveLoading?: boolean;
  showButtonBackLoading?: boolean;
  showButtonNewLoading?: boolean;
  showButtonDeleteLoading?: boolean;
  showButtonSaveAndCloseLoading?: boolean;

  onClickNew?: () => void;
  onClickBack?: () => void;
  onClickDelete?: () => void;
  onClickSaveAndClose?: () => void;
}

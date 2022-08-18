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
  onClickSave?: () => void;
  onClickSaveAndClose?: () => void;
}
export interface IToolbar {
  textSearch?: string;
  showInputSearch?: boolean;
  onChangeInputSearch?: (newText: string) => void;

  textButtonNew?: string;
  showButtonNew?: boolean;
  onClickNew?: () => void;
}

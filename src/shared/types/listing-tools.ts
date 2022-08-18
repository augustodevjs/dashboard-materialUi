export interface IListingTools {
  textSearch?: string;
  showInputSearch?: boolean;
  textButtonNew?: string;
  showButtonNew?: boolean;
  onClickNew?: () => void;
  onChangeInputSearch?: (newText: string) => void;
}

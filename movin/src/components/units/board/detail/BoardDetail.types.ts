export interface IBoardRoutedUIProps {
  data?: any;
  onClickMoveToPage: (path: any) => () => void;
  onClickLike: () => void;
  onClickDelete: () => void;
  onClickDislike: () => void;
  BoardId: string | string[] | undefined;
}

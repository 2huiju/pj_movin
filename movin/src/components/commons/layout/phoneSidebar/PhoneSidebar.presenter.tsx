import * as P from "./PhoneSidebar.styles";
import { IPhoneSidebarPresenterProps } from "./PhoneSidebar.types";

export default function PhoneSidebarPresenter(
  props: IPhoneSidebarPresenterProps
) {
  return (
    <P.SideBarDiv sideBar={props.sideBar}>
      {props.Menu.map((el: any) => (
        <P.SideBarTitle
          key={el}
          el={el}
          activeMenu={props.activeMenu}
          id={el.page}
          sideBar={props.sideBar}
          onClick={props.onClickMenu(el)}
        >
          {el.name}
        </P.SideBarTitle>
      ))}
    </P.SideBarDiv>
  );
}

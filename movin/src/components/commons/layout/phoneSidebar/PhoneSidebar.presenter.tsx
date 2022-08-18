import * as P from "./PhoneSidebar.styles";

export default function PhoneSidebarPresenter(props) {
  return (
    <P.SideBarDiv sideBar={props.sideBar}>
      {props.Menu.map((el) => (
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

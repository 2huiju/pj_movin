import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutHeaderContainer from "./header/header.container";

interface ILayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`;

const HIDDEN_FOOTER = ["/login", "/signup"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      <LayoutHeaderContainer />
      <Wrapper>
        <div>{props.children}</div>
        {!isHiddenFooter && <LayoutFooter />}
      </Wrapper>
    </>
  );
}

import Head from "next/head";
import MainPageContainer from "../src/components/units/mainPage/MainPage.container";

export default function MainPage() {
  return (
    <>
      <Head>
        <title>영화 커뮤니티 MOVIN</title>
        <meta property="og:title" content="MOVIN" />
        <meta
          property="og:description"
          content="영화와 함께하는 공간 MOVIN에 오신 것을 환영합니다."
        />
        <link rel="icon" href="/commons/movin.png" />
      </Head>
      <MainPageContainer />
    </>
  );
}

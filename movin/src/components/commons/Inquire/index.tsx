import styled from "@emotion/styled";
import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  Kakao: any;
};

const KaKaoChat = styled.div`
  margin-left: 10px;
`;
const KaKaoChannel = styled.div``;

export default function InquireKaKao() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    try {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init("12a523204d108e11d65325b65bc2213a");
        }
      }

      window.Kakao.Channel.createAddChannelButton({
        container: "#kakao-talk-channel-add-button",
        channelPublicId: "_xlFMExj",
        size: "large",

        supportMultipleDensities: true,
      });

      window.Kakao.Channel.createChatButton({
        container: "#kakao-talk-channel-chat-button",
        channelPublicId: "_xlFMExj",
        title: "question",
        size: "small",
        color: "mono",
        shape: "pc",
        supportMultipleDensities: true,
      });
      document.body.appendChild(script);
      document.body.removeChild(script);
    } catch (err) {}
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://developers.kakao.com/sdk/js/kakao.js"
        ></script>
      </Head>
      <KaKaoChannel id="kakao-talk-channel-add-button"></KaKaoChannel>
      <KaKaoChat id="kakao-talk-channel-chat-button"></KaKaoChat>
    </>
  );
}

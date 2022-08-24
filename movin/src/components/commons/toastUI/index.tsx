import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

interface IToastUIProps {
  onChangeContents: any;
  editorRef: any;
  initialValue: string;
}

export default function ToastUi(props: IToastUIProps) {
  // useRef

  return (
    // @ts-ignore
    <Editor
      onChange={props.onChangeContents}
      previewStyle="vertical"
      height="400px"
      initialEditType="markdown"
      useCommandShortcut={true}
      ref={props.editorRef}
      initialValue={props.initialValue}
      toolbarItems={[
        ["heading", "bold", "strike"],
        ["hr", "quote"],
      ]}
    />
  );
}

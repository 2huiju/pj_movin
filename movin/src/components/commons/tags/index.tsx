import { PlusOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Input, Tag, Tooltip } from "antd";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { breakPoints } from "../../../commons/styles/media";

interface ITagsProps {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}

const Inputs = styled(Input)`
  width: 100px;
  border-radius: 10px;

  @media ${breakPoints.mobile} {
    width: 100px;
  }
`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 40px;
`;

export default function Tags(props: ITagsProps) {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef<any>(null);
  const editInputRef = useRef<any>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);
  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleClose = (removedTag: string) => {
    const newTags = props.tags.filter((tag: any) => tag !== removedTag);
    props.setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && props.tags.indexOf(inputValue) === -1) {
      props.setTags([...props.tags, inputValue]);
    }

    setInputVisible(false);
    setInputValue("");
  };

  const handleEditInputChange = (e: any) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...props.tags];
    newTags[editInputIndex] = editInputValue;
    props.setTags(newTags);
    setEditInputIndex(-1);
    setInputValue("");
  };

  return (
    <Wrapper>
      {props.tags.map((tag: any, index: any) => {
        if (editInputIndex === index) {
          return (
            <Inputs
              ref={editInputRef}
              key={tag}
              size="small"
              className="tag-input"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag
            color="#ff3c8d"
            style={{
              borderRadius: 10,
              color: "#ffffff",
              padding: "6px 13px",
              margin: "1px 15px 1px 0",
            }}
            className="edit-tag"
            key={tag}
            closable={index !== 0}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                if (index !== 0) {
                  setEditInputIndex(index);
                  setEditInputValue(tag);
                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible && (
        <Inputs
          ref={inputRef}
          type="text"
          size="middle"
          className="tag-input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
          style={{
            outline: "none",
            boxShadow: "none",
            border: "1px solid #ff3c8d",
          }}
        />
      )}
      {!inputVisible && (
        <Tag
          color="magenta"
          className="site-tag-plus"
          onClick={showInput}
          style={{
            borderRadius: 10,
            padding: "6px 13px",
            cursor: "pointer",
          }}
        >
          <PlusOutlined /> 태그
        </Tag>
      )}
    </Wrapper>
  );
}

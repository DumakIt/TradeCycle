import { Dispatch, MouseEvent, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";
import { useRecoilState } from "recoil";
import { loggedInUserState } from "../../../../commons/stores";
import {
  IUseditemQuestion,
  Maybe,
} from "../../../../commons/types/generated/types";
import { useMutationDeleteUsedItemQuestion } from "../../hooks/mutation/useMutationDeleteUsedItemQuestion";
import * as S from "./commentStyles";

interface IDetailCommentProps {
  id: string;
  data: IUseditemQuestion;
  picture: Maybe<string> | undefined;
  setIsActive: Dispatch<SetStateAction<string>>;
  reset: UseFormReset<{ UpdateComment: string; contents: string }>;
  onClickIsActive: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function Comment(props: IDetailCommentProps): JSX.Element {
  const [loggedInUser] = useRecoilState(loggedInUserState);
  const { deleteUsedItemQuestion } = useMutationDeleteUsedItemQuestion();

  const onClickCommentUpdate =
    (contents: string) => (event: MouseEvent<HTMLSpanElement>) => {
      props.reset({ UpdateComment: contents });
      props.setIsActive(event.currentTarget.id);
    };

  return (
    <>
      <S.CommentWriterInfoContainer>
        <S.CommentWriterInfoWrapper>
          <S.CommentWriterIconBox>
            {props.picture === null ? (
              <S.CommentWriterDefaultIcon />
            ) : (
              <img
                src={`https://storage.googleapis.com/${props.picture ?? ""}`}
              />
            )}
          </S.CommentWriterIconBox>
          <S.CommentWriterCreateAtWrapper>
            <S.CommentWriter>{props.data.user.name}</S.CommentWriter>
            <S.CommentCreateAt>
              {props.data.createdAt.slice(0, 10).replaceAll("-", ".")}
            </S.CommentCreateAt>
          </S.CommentWriterCreateAtWrapper>
        </S.CommentWriterInfoWrapper>
        {loggedInUser._id === props.data.user._id && (
          <div>
            <S.CommentUpdateIcon
              id={props.data._id}
              onClick={onClickCommentUpdate(props.data.contents)}
            />
            <S.CommentDeleteIcon
              onClick={deleteUsedItemQuestion({
                useditemQuestionId: props.data._id,
                useditemId: props.id,
              })}
            />
          </div>
        )}
      </S.CommentWriterInfoContainer>

      <S.CommentContents
        id={props.data._id + "ReplyWrite"}
        onClick={props.onClickIsActive}
      >
        {props.data.contents}
      </S.CommentContents>
    </>
  );
}

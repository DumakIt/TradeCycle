import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { loggedInUserState } from "../../../../../../commons/stores";
import { useMutationDeleteUsedItemQuestion } from "../../../../../commons/hooks/mutation/useMutationDeleteUsedItemQuestion";
import * as S from "./commentStyles";
import { IProps } from "./commentTypes";

export default function Comment(props: IProps): JSX.Element {
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
              data-testid="btn-comment-update"
              id={props.data._id}
              onClick={onClickCommentUpdate(props.data.contents)}
            />
            <S.CommentDeleteIcon
              data-testid="btn-comment-delete"
              onClick={deleteUsedItemQuestion({
                useditemQuestionId: props.data._id,
                useditemId: props.id,
              })}
            />
          </div>
        )}
      </S.CommentWriterInfoContainer>

      <S.CommentContents
        data-testid="comment-contents"
        id={props.data._id + "ReplyWrite"}
        onClick={props.onClickIsActive}
      >
        {props.data.contents}
      </S.CommentContents>
    </>
  );
}

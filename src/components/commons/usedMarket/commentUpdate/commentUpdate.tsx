import { Dispatch, SetStateAction } from "react";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import { IUseditemQuestion } from "../../../../commons/types/generated/types";

import { useMutationUpdateUsedItemQuestion } from "../../hooks/mutation/useMutationUpdateUsedItemQuestion";
import { wrapAsync } from "../../utility/asyncFunc";
import * as S from "./commentUpdateStyles";

interface IDetailCommentUpdateProps {
  id: string;
  data: IUseditemQuestion;
  handleSubmit: UseFormHandleSubmit<{
    UpdateComment: string;
    contents: string;
  }>;
  setIsActive: Dispatch<SetStateAction<string>>;
  register: UseFormRegister<{
    UpdateComment: string;
    contents: string;
  }>;
  reset: UseFormReset<{
    UpdateComment: string;
    contents: string;
  }>;
}

export default function CommentUpdate(
  props: IDetailCommentUpdateProps
): JSX.Element {
  const { updateUsedItemQuestion } = useMutationUpdateUsedItemQuestion();

  const onClickUpdateCanCel = (): void => {
    props.setIsActive("");
  };

  return (
    <form
      onSubmit={wrapAsync(
        props.handleSubmit(
          updateUsedItemQuestion({
            useditemId: props.id,
            useditemQuestionId: props.data._id,
            reset: props.reset,
            setIsActive: props.setIsActive,
          })
        )
      )}
    >
      <S.CommentTextareaWrapper>
        <textarea
          data-testid="textarea-comment-update-contents"
          defaultValue={props.data.contents}
          {...props.register("UpdateComment")}
        />
        <S.CommentUpdateBtnWrapper>
          <S.CommentUpdateCanCel
            type="button"
            data-testid="btn-comment-update-cancel"
            onClick={onClickUpdateCanCel}
          >
            취소하기
          </S.CommentUpdateCanCel>
          <S.CommentUpdateSubmit data-testid="btn-comment-update-finish">
            수정하기
          </S.CommentUpdateSubmit>
        </S.CommentUpdateBtnWrapper>
      </S.CommentTextareaWrapper>
    </form>
  );
}

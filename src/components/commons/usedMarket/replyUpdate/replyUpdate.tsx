import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { IUseditemQuestionAnswer } from "../../../../commons/types/generated/types";
import { useMutationUpdateUsedItemQuestionAnswer } from "../../hooks/mutation/useMutationUpdateUsedItemQuestionAnswer";
import { wrapAsync } from "../../utility/asyncFunc";
import * as S from "./replyUpdateStyles";

interface IReplyUpdateProps {
  id: string;
  useditemQuestionId: string;
  data: IUseditemQuestionAnswer;
  setIsActive: Dispatch<SetStateAction<string>>;
}

export default function ReplyUpdate(props: IReplyUpdateProps): JSX.Element {
  const { updateUseditemQuestionAnswer } =
    useMutationUpdateUsedItemQuestionAnswer();
  const { handleSubmit, reset, register } = useForm<{ UpdateReply: string }>();

  const onClickUpdateCanCel = (): void => {
    props.setIsActive("");
  };

  return (
    <S.ReplyWriteWrapper
      onSubmit={wrapAsync(
        handleSubmit(
          updateUseditemQuestionAnswer({
            id: props.id,
            useditemQuestionId: props.useditemQuestionId,
            reset,
            setIsActive: props.setIsActive,
          })
        )
      )}
    >
      <S.ReplyEnter />
      <S.CommentTextareaWrapper>
        <textarea
          data-testid="textarea-reply-update-contents"
          defaultValue={props.data.contents}
          {...register("UpdateReply")}
        />
        <S.CommentUpdateBtnWrapper>
          <S.CommentUpdateCanCel
            type="button"
            data-testid="btn-reply-update-cancel"
            onClick={onClickUpdateCanCel}
          >
            취소하기
          </S.CommentUpdateCanCel>
          <S.CommentUpdateSubmit data-testid="btn-reply-update-finish">
            수정하기
          </S.CommentUpdateSubmit>
        </S.CommentUpdateBtnWrapper>
      </S.CommentTextareaWrapper>
    </S.ReplyWriteWrapper>
  );
}

import { useMutationUpdateUsedItemQuestion } from "../../../../../commons/hooks/mutation/useMutationUpdateUsedItemQuestion";
import { wrapAsync } from "../../../../../commons/utility/asyncFunc";
import * as S from "./commentUpdateStyles";
import { IProps } from "./commentUpdateTypes";

export default function CommentUpdate(props: IProps): JSX.Element {
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

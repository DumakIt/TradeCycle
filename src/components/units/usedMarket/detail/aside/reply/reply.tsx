import { MouseEvent } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { loggedInUserState } from "../../../../../../commons/stores";
import { ICreateUseditemQuestionAnswerInput } from "../../../../../../commons/types/generated/types";
import { useMutationCreateUsedItemQuestionAnswer } from "../../../../../commons/hooks/mutation/useMutationCreateUsedItemQuestionAnswer";
import { useMutationDeleteUsedItemQuestionAnswer } from "../../../../../commons/hooks/mutation/useMutationDeleteUsedItemQuestionAnswer";
import { useQueryFetchUsedItemQuestionAnswers } from "../../../../../commons/hooks/query/useQueryFetchUsedItemQuestionAnswers";
import ReplyUpdate from "../replyUpdate/replyUpdate";
import { wrapAsync } from "../../../../../commons/utility/asyncFunc";
import { v4 as uuidv4 } from "uuid";
import * as S from "./replyStyles";
import { IProps } from "./replyTypes";

export default function Reply(props: IProps): JSX.Element {
  const [loggedInUser] = useRecoilState(loggedInUserState);
  const { data } = useQueryFetchUsedItemQuestionAnswers({
    useditemQuestionId: props.id,
  });
  const { createUsedItemQuestionAnswer } =
    useMutationCreateUsedItemQuestionAnswer();
  const { deleteUsedItemQuestionAnswer } =
    useMutationDeleteUsedItemQuestionAnswer();
  const { handleSubmit, reset, register } =
    useForm<ICreateUseditemQuestionAnswerInput>();

  const onClickReplyUpdate = (event: MouseEvent<HTMLSpanElement>): void => {
    props.setIsActive(event.currentTarget.id);
  };

  return (
    <>
      {props.isActive === props.id + "ReplyWrite" && (
        <S.ReplyWriteWrapper
          onSubmit={wrapAsync(
            handleSubmit(
              createUsedItemQuestionAnswer({
                id: props.id,
                reset,
                setIsActive: props.setIsActive,
              })
            )
          )}
        >
          <S.ReplyEnter />
          <S.ReplyWriteTextareaWrapper>
            <textarea
              data-testid="textarea-reply-contents"
              {...register("contents")}
            />
            <S.ReplyWriteSubmit data-testid="btn-reply-write">
              작성하기
            </S.ReplyWriteSubmit>
          </S.ReplyWriteTextareaWrapper>
        </S.ReplyWriteWrapper>
      )}
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <div key={uuidv4()}>
          {props.isActive !== el._id + "ReplyUpdate" ? (
            <S.ReplyContainer>
              <S.ReplyEnter />
              <S.ReplyDetailContainer>
                <div>
                  <S.ReplyWriterInfoWrapper>
                    <S.ReplyWriterIconBox>
                      {el.user.picture === null ? (
                        <S.ReplyWriterDefaultIcon />
                      ) : (
                        <img
                          src={`https://storage.googleapis.com/${el.user.picture}`}
                        />
                      )}
                    </S.ReplyWriterIconBox>
                    <S.ReplyWriterCreateAtWrapper>
                      <S.ReplyWriter>{el.user.name}</S.ReplyWriter>
                      <S.ReplyCreateAt>
                        {el.createdAt.slice(0, 10).replaceAll("-", ".")}
                      </S.ReplyCreateAt>
                    </S.ReplyWriterCreateAtWrapper>
                  </S.ReplyWriterInfoWrapper>
                  {loggedInUser._id === el.user._id && (
                    <div>
                      <S.ReplyUpdateIcon
                        data-testid="btn-reply-update"
                        id={el._id + "ReplyUpdate"}
                        onClick={onClickReplyUpdate}
                      />
                      <S.ReplyDeleteIcon
                        data-testid="btn-reply-delete"
                        onClick={deleteUsedItemQuestionAnswer({
                          useditemQuestionId: props.id,
                          useditemQuestionAnswerId: el._id,
                        })}
                      />
                    </div>
                  )}
                </div>
                <S.ReplyContents data-testid="reply-contents">
                  {el.contents}
                </S.ReplyContents>
              </S.ReplyDetailContainer>
            </S.ReplyContainer>
          ) : (
            <ReplyUpdate
              id={el._id}
              useditemQuestionId={props.id}
              setIsActive={props.setIsActive}
              data={el}
            />
          )}
        </div>
      ))}
    </>
  );
}

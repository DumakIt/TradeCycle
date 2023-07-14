import * as S from "./detailAsideStyles";
import { useForm } from "react-hook-form";
import InfiniteScroll from "react-infinite-scroller";
import Comment from "../../../../commons/usedMarket/comment/comment";
import { wrapAsync } from "../../../../commons/utility/asyncFunc";
import { v4 as uuidv4 } from "uuid";
import { IUseditem } from "../../../../../commons/types/generated/types";
import { useSetIsActive } from "../../../../commons/hooks/custom/useSetIsActive";
import { useMutationCreateUsedItemQuestion } from "../../../../commons/hooks/mutation/useMutationCreateUsedItemQuestion";
import { useQueryFetchUsedItemQuestions } from "../../../../commons/hooks/query/useQueryFetchUsedItemQuestions";
import CommentUpdate from "../../../../commons/usedMarket/commentUpdate/commentUpdate";
import Reply from "../../../../commons/usedMarket/reply/reply";

interface IDetailAsideProps {
  data: IUseditem | undefined;
  id: string;
}

export default function DetailAside(props: IDetailAsideProps): JSX.Element {
  const [onClickIsActive, isActive, setIsActive] = useSetIsActive();
  const { createUsedItemQuestion } = useMutationCreateUsedItemQuestion();
  const { register, handleSubmit, reset } = useForm<{
    UpdateComment: string;
    contents: string;
  }>();
  const { data: commentData, FetchMore } = useQueryFetchUsedItemQuestions({
    useditemId: props.id,
  });

  return (
    <S.Container>
      <S.SellerInfoTitle>판매자</S.SellerInfoTitle>
      <S.SellerInfoWrapper>
        <S.SellerIconBox>
          {props.data?.seller?.picture === null ? (
            <S.SellerDefaultIcon />
          ) : (
            <img
              src={`https://storage.googleapis.com/${
                props.data?.seller?.picture ?? ""
              }`}
            />
          )}
        </S.SellerIconBox>
        <S.SellerName>{props.data?.seller?.name}</S.SellerName>
      </S.SellerInfoWrapper>
      <S.CommentTitle>댓글</S.CommentTitle>
      <S.Line></S.Line>
      <form
        onSubmit={wrapAsync(
          handleSubmit(createUsedItemQuestion({ id: props.id, reset }))
        )}
      >
        <S.CommentTextareaWrapper>
          <textarea {...register("contents")} />
          <S.CommentWriteBtn>작성하기</S.CommentWriteBtn>
        </S.CommentTextareaWrapper>
      </form>
      <S.CommentsContainer>
        <InfiniteScroll
          loadMore={() => {
            void FetchMore();
          }}
          hasMore={true}
        >
          {commentData?.fetchUseditemQuestions.map((el) => (
            <div key={uuidv4()}>
              {el._id !== isActive ? (
                <Comment
                  data={el}
                  id={props.id}
                  picture={props.data?.seller?.picture}
                  reset={reset}
                  setIsActive={setIsActive}
                  onClickIsActive={onClickIsActive}
                />
              ) : (
                <CommentUpdate
                  data={el}
                  id={props.id}
                  setIsActive={setIsActive}
                  reset={reset}
                  register={register}
                  handleSubmit={handleSubmit}
                />
              )}
              <Reply
                id={el._id}
                isActive={isActive}
                reset={reset}
                setIsActive={setIsActive}
              />
            </div>
          )) ?? <></>}
        </InfiniteScroll>
      </S.CommentsContainer>
    </S.Container>
  );
}

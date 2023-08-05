import { graphql } from "msw";

const gql = graphql.link("http://mock.com/graphql");

export const apis = [
  gql.mutation("loginUser", (_, res, ctx) => {
    return res(
      ctx.data({
        loginUser: {
          accessToken: "test-accessToken",
          __typename: "Token",
        },
      })
    );
  }),

  gql.mutation("createUser", (req, res, ctx) => {
    const { name } = req.variables.createUserInput;
    return res(
      ctx.data({
        createUser: {
          name,
          __typename: "createUser",
        },
      })
    );
  }),

  gql.mutation("createUseditem", (_, res, ctx) => {
    return res(
      ctx.data({
        createUseditem: {
          _id: "test-item",
          __typename: "createUseditem",
        },
      })
    );
  }),

  gql.mutation("deleteUseditem", (req, res, ctx) => {
    const { useditemId } = req.variables;
    if (useditemId === "test-item") {
      return res(
        ctx.data({
          deleteUseditem: "test-item",
        })
      );
    }
    return res(ctx.data(undefined));
  }),

  gql.query("fetchUseditems", (_, res, ctx) => {
    return res(
      ctx.data({
        fetchUseditems: [
          {
            _id: "test-item",
            name: "테스트 상품명",
            createdAt: "2023-08-05T11:52:08.143Z",
            price: 10000,
            images: [""],
            tags: [""],
            __typename: "fetchUseditems",
          },
        ],
      })
    );
  }),

  gql.query("fetchUseditem", (_, res, ctx) => {
    return res(
      ctx.data({
        fetchUseditem: {
          _id: "test-item",
          name: "테스트 상품명",
          contents: "테스트 상품내용",
          price: 10000,
          images: [""],
          seller: {
            _id: "test-seller",
            name: "테스트 판매자",
            picture: null,
          },
          useditemAddress: {
            lat: "37.56682195069747",
            lng: "126.97865508922976",
          },
          __typename: "fetchUseditem",
        },
      })
    );
  }),

  gql.query("fetchUseditemQuestions", (req, res, ctx) => {
    const { useditemId } = req.variables;
    if (useditemId === "test-item") {
      return res(
        ctx.data({
          fetchUseditemQuestions: [
            {
              _id: "test-questions",
              contents: "테스트 댓글",
              user: {
                _id: "test-questionsUser",
                name: "테스트 댓글유저",
              },
              createdAt: "2023-08-05T11:52:08.143Z",
              __typename: "fetchUseditemQuestions",
            },
          ],
        })
      );
    }
    return res(ctx.data(undefined));
  }),

  gql.query("fetchUseditemQuestionAnswers", (req, res, ctx) => {
    const { useditemQuestionId } = req.variables;
    if (useditemQuestionId === "test-questions") {
      return res(
        ctx.data({
          fetchUseditemQuestionAnswers: [
            {
              _id: "test-answers",
              contents: "테스트 답글",
              user: {
                _id: "test-answersUser",
                name: "테스트 답글유저",
                picture: null,
              },
              createdAt: "2023-08-06T11:52:08.143Z",
              __typename: "fetchUseditemQuestionAnswers",
            },
          ],
        })
      );
    }
    return res(ctx.data(undefined));
  }),
];

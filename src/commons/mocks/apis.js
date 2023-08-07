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

  gql.mutation("updateUseditem", (_, res, ctx) => {
    return res(
      ctx.data({
        updateUseditem: {
          _id: "test-item",
          __typename: "updateUseditem",
        },
      })
    );
  }),

  gql.mutation("deleteUseditem", (_, res, ctx) => {
    return res(
      ctx.data({
        deleteUseditem: "test-item",
      })
    );
  }),

  gql.mutation("createPointTransactionOfBuyingAndSelling", (_, res, ctx) => {
    return res(
      ctx.data({
        createPointTransactionOfBuyingAndSelling: {
          _id: "test-item",
        },
      })
    );
  }),

  gql.mutation("createUseditemQuestion", (_, res, ctx) => {
    return res(
      ctx.data({
        createUseditemQuestion: {
          _id: "test-questions",
        },
      })
    );
  }),

  gql.mutation("createUseditemQuestionAnswer", (_, res, ctx) => {
    return res(
      ctx.data({
        createUseditemQuestionAnswer: {
          _id: "test-answers",
        },
      })
    );
  }),

  gql.mutation("updateUseditemQuestion", (_, res, ctx) => {
    return res(
      ctx.data({
        updateUseditemQuestion: {
          _id: "test-questions",
        },
      })
    );
  }),

  gql.mutation("updateUseditemQuestionAnswer", (_, res, ctx) => {
    return res(
      ctx.data({
        updateUseditemQuestionAnswer: {
          _id: "test-answers",
        },
      })
    );
  }),

  gql.mutation("deleteUseditemQuestion", (_, res, ctx) => {
    return res(
      ctx.data({
        deleteUseditemQuestion: "test-questions",
      })
    );
  }),

  gql.mutation("deleteUseditemQuestionAnswer", (_, res, ctx) => {
    return res(
      ctx.data({
        deleteUseditemQuestionAnswer: "test-answers",
      })
    );
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
            _id: "test-user",
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

  gql.query("fetchUseditemQuestions", (_, res, ctx) => {
    return res(
      ctx.data({
        fetchUseditemQuestions: [
          {
            _id: "test-questions",
            contents: "테스트 댓글",
            user: {
              _id: "test-user",
              name: "테스트 댓글유저",
            },
            createdAt: "2023-08-05T11:52:08.143Z",
            __typename: "fetchUseditemQuestions",
          },
        ],
      })
    );
  }),

  gql.query("fetchUseditemQuestionAnswers", (_, res, ctx) => {
    return res(
      ctx.data({
        fetchUseditemQuestionAnswers: [
          {
            _id: "test-answers",
            contents: "테스트 답글",
            user: {
              _id: "test-user",
              name: "테스트 답글유저",
              picture: null,
            },
            createdAt: "2023-08-06T11:52:08.143Z",
            __typename: "fetchUseditemQuestionAnswers",
          },
        ],
      })
    );
  }),
];

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
          _id: "test",
          __typename: "createUseditem",
        },
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
];

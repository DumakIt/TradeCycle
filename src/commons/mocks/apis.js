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

  gql.mutation("createUser", (req, res, ctx) => {
    const { name, price } = req.variables.createUseditemInput;

    return res(
      ctx.data({
        createUseditem: {
          _id: "test",
          __typename: "createUseditem",
        },
      })
    );
  }),
];

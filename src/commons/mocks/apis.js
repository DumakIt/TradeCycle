import { graphql } from "msw";

const gql = graphql.link("http://mock.com/graphql");

export const apis = [
  gql.mutation("loginUser", (_, res, ctx) => {
    return res(
      ctx.data({
        loginUser: {
          accessToken: "test-accessToken",
          __typename: "loginUser",
        },
      })
    );
  }),
];

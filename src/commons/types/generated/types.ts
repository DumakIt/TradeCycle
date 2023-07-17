export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends Record<string, unknown>, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Upload: { input: any; output: any };
}

export interface IBoard {
  __typename?: "Board";
  _id: Scalars["ID"]["output"];
  boardAddress?: Maybe<IBoardAddress>;
  contents: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  dislikeCount: Scalars["Int"]["output"];
  images?: Maybe<Array<Scalars["String"]["output"]>>;
  likeCount: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  user?: Maybe<IUser>;
  writer?: Maybe<Scalars["String"]["output"]>;
  youtubeUrl?: Maybe<Scalars["String"]["output"]>;
}

export interface IBoardAddress {
  __typename?: "BoardAddress";
  _id: Scalars["ID"]["output"];
  address?: Maybe<Scalars["String"]["output"]>;
  addressDetail?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  zipcode?: Maybe<Scalars["String"]["output"]>;
}

export interface IBoardAddressInput {
  address?: InputMaybe<Scalars["String"]["input"]>;
  addressDetail?: InputMaybe<Scalars["String"]["input"]>;
  zipcode?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IBoardComment {
  __typename?: "BoardComment";
  _id: Scalars["ID"]["output"];
  contents: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  rating: Scalars["Float"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  user?: Maybe<IUser>;
  writer?: Maybe<Scalars["String"]["output"]>;
}

export interface ICreateBoardCommentInput {
  contents: Scalars["String"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
  rating: Scalars["Float"]["input"];
  writer?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ICreateBoardInput {
  boardAddress?: InputMaybe<IBoardAddressInput>;
  contents: Scalars["String"]["input"];
  images?: InputMaybe<Array<Scalars["String"]["input"]>>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
  writer?: InputMaybe<Scalars["String"]["input"]>;
  youtubeUrl?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ICreateUseditemInput {
  contents: Scalars["String"]["input"];
  images?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name: Scalars["String"]["input"];
  price: Scalars["Int"]["input"];
  remarks: Scalars["String"]["input"];
  tags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  useditemAddress?: InputMaybe<IUseditemAddressInput>;
}

export interface ICreateUseditemQuestionAnswerInput {
  contents: Scalars["String"]["input"];
}

export interface ICreateUseditemQuestionInput {
  contents: Scalars["String"]["input"];
}

export interface ICreateUserInput {
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}

export interface IFileManager {
  __typename?: "FileManager";
  _id: Scalars["ID"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  isUsed: Scalars["Boolean"]["output"];
  size?: Maybe<Scalars["Float"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  url: Scalars["String"]["output"];
}

export interface IMutation {
  __typename?: "Mutation";
  createBoard: IBoard;
  createBoardComment: IBoardComment;
  createPointTransactionOfBuyingAndSelling: IUseditem;
  createPointTransactionOfLoading: IPointTransaction;
  createUseditem: IUseditem;
  createUseditemQuestion: IUseditemQuestion;
  createUseditemQuestionAnswer: IUseditemQuestionAnswer;
  createUser: IUser;
  deleteBoard: Scalars["ID"]["output"];
  deleteBoardComment: Scalars["ID"]["output"];
  deleteBoards: Array<Scalars["ID"]["output"]>;
  deleteUseditem: Scalars["ID"]["output"];
  deleteUseditemQuestion: Scalars["ID"]["output"];
  deleteUseditemQuestionAnswer: Scalars["String"]["output"];
  dislikeBoard: Scalars["Int"]["output"];
  likeBoard: Scalars["Int"]["output"];
  loginUser: IToken;
  loginUserExample: IToken;
  logoutUser: Scalars["Boolean"]["output"];
  resetUserPassword: Scalars["Boolean"]["output"];
  restoreAccessToken: IToken;
  toggleUseditemPick: Scalars["Int"]["output"];
  updateBoard: IBoard;
  updateBoardComment: IBoardComment;
  updateUseditem: IUseditem;
  updateUseditemQuestion: IUseditemQuestion;
  updateUseditemQuestionAnswer: IUseditemQuestionAnswer;
  updateUser: IUser;
  uploadFile: IFileManager;
}

export interface IMutationCreateBoardArgs {
  createBoardInput: ICreateBoardInput;
}

export interface IMutationCreateBoardCommentArgs {
  boardId: Scalars["ID"]["input"];
  createBoardCommentInput: ICreateBoardCommentInput;
}

export interface IMutationCreatePointTransactionOfBuyingAndSellingArgs {
  useritemId: Scalars["ID"]["input"];
}

export interface IMutationCreatePointTransactionOfLoadingArgs {
  impUid: Scalars["ID"]["input"];
}

export interface IMutationCreateUseditemArgs {
  createUseditemInput: ICreateUseditemInput;
}

export interface IMutationCreateUseditemQuestionArgs {
  createUseditemQuestionInput: ICreateUseditemQuestionInput;
  useditemId: Scalars["ID"]["input"];
}

export interface IMutationCreateUseditemQuestionAnswerArgs {
  createUseditemQuestionAnswerInput: ICreateUseditemQuestionAnswerInput;
  useditemQuestionId: Scalars["ID"]["input"];
}

export interface IMutationCreateUserArgs {
  createUserInput: ICreateUserInput;
}

export interface IMutationDeleteBoardArgs {
  boardId: Scalars["ID"]["input"];
}

export interface IMutationDeleteBoardCommentArgs {
  boardCommentId: Scalars["ID"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IMutationDeleteBoardsArgs {
  boardIds: Array<Scalars["ID"]["input"]>;
}

export interface IMutationDeleteUseditemArgs {
  useditemId: Scalars["ID"]["input"];
}

export interface IMutationDeleteUseditemQuestionArgs {
  useditemQuestionId: Scalars["ID"]["input"];
}

export interface IMutationDeleteUseditemQuestionAnswerArgs {
  useditemQuestionAnswerId: Scalars["ID"]["input"];
}

export interface IMutationDislikeBoardArgs {
  boardId: Scalars["ID"]["input"];
}

export interface IMutationLikeBoardArgs {
  boardId: Scalars["ID"]["input"];
}

export interface IMutationLoginUserArgs {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}

export interface IMutationLoginUserExampleArgs {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}

export interface IMutationResetUserPasswordArgs {
  password: Scalars["String"]["input"];
}

export interface IMutationToggleUseditemPickArgs {
  useditemId: Scalars["ID"]["input"];
}

export interface IMutationUpdateBoardArgs {
  boardId: Scalars["ID"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
  updateBoardInput: IUpdateBoardInput;
}

export interface IMutationUpdateBoardCommentArgs {
  boardCommentId: Scalars["ID"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
  updateBoardCommentInput: IUpdateBoardCommentInput;
}

export interface IMutationUpdateUseditemArgs {
  updateUseditemInput: IUpdateUseditemInput;
  useditemId: Scalars["ID"]["input"];
}

export interface IMutationUpdateUseditemQuestionArgs {
  updateUseditemQuestionInput: IUpdateUseditemQuestionInput;
  useditemQuestionId: Scalars["ID"]["input"];
}

export interface IMutationUpdateUseditemQuestionAnswerArgs {
  updateUseditemQuestionAnswerInput: IUpdateUseditemQuestionAnswerInput;
  useditemQuestionAnswerId: Scalars["ID"]["input"];
}

export interface IMutationUpdateUserArgs {
  updateUserInput: IUpdateUserInput;
}

export interface IMutationUploadFileArgs {
  file: Scalars["Upload"]["input"];
}

export interface IPointTransaction {
  __typename?: "PointTransaction";
  _id: Scalars["ID"]["output"];
  amount: Scalars["Int"]["output"];
  balance: Scalars["Int"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  impUid?: Maybe<Scalars["ID"]["output"]>;
  status: Scalars["String"]["output"];
  statusDetail: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  useditem?: Maybe<IUseditem>;
  user?: Maybe<IUser>;
}

export interface IQuery {
  __typename?: "Query";
  fetchBoard: IBoard;
  fetchBoardComments: IBoardComment[];
  fetchBoards: IBoard[];
  fetchBoardsCount: Scalars["Int"]["output"];
  fetchBoardsCountOfMine: Scalars["Int"]["output"];
  fetchBoardsOfMine: IBoard[];
  fetchBoardsOfTheBest: IBoard[];
  fetchPointTransactions: IPointTransaction[];
  fetchPointTransactionsCountOfBuying: Scalars["Int"]["output"];
  fetchPointTransactionsCountOfLoading: Scalars["Int"]["output"];
  fetchPointTransactionsCountOfSelling: Scalars["Int"]["output"];
  fetchPointTransactionsOfBuying: IPointTransaction[];
  fetchPointTransactionsOfLoading: IPointTransaction[];
  fetchPointTransactionsOfSelling: IPointTransaction[];
  fetchUseditem: IUseditem;
  fetchUseditemQuestionAnswers: IUseditemQuestionAnswer[];
  fetchUseditemQuestions: IUseditemQuestion[];
  fetchUseditems: IUseditem[];
  fetchUseditemsCountIBought: Scalars["Int"]["output"];
  fetchUseditemsCountIPicked: Scalars["Int"]["output"];
  fetchUseditemsCountISold: Scalars["Int"]["output"];
  fetchUseditemsIBought: IUseditem[];
  fetchUseditemsIPicked: IUseditem[];
  fetchUseditemsISold: IUseditem[];
  fetchUseditemsOfTheBest: IUseditem[];
  fetchUserLoggedIn: IUser;
}

export interface IQueryFetchBoardArgs {
  boardId: Scalars["ID"]["input"];
}

export interface IQueryFetchBoardCommentsArgs {
  boardId: Scalars["ID"]["input"];
  page?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface IQueryFetchBoardsArgs {
  endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
}

export interface IQueryFetchBoardsCountArgs {
  endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
}

export interface IQueryFetchPointTransactionsArgs {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IQueryFetchPointTransactionsOfBuyingArgs {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IQueryFetchPointTransactionsOfLoadingArgs {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IQueryFetchPointTransactionsOfSellingArgs {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IQueryFetchUseditemArgs {
  useditemId: Scalars["ID"]["input"];
}

export interface IQueryFetchUseditemQuestionAnswersArgs {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  useditemQuestionId: Scalars["ID"]["input"];
}

export interface IQueryFetchUseditemQuestionsArgs {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  useditemId: Scalars["ID"]["input"];
}

export interface IQueryFetchUseditemsArgs {
  isSoldout?: InputMaybe<Scalars["Boolean"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IQueryFetchUseditemsIBoughtArgs {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IQueryFetchUseditemsIPickedArgs {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IQueryFetchUseditemsISoldArgs {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IToken {
  __typename?: "Token";
  accessToken: Scalars["String"]["output"];
}

export interface IUpdateBoardCommentInput {
  contents?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["Float"]["input"]>;
}

export interface IUpdateBoardInput {
  boardAddress?: InputMaybe<IBoardAddressInput>;
  contents?: InputMaybe<Scalars["String"]["input"]>;
  images?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  youtubeUrl?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IUpdateUseditemInput {
  contents?: InputMaybe<Scalars["String"]["input"]>;
  images?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  remarks?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  useditemAddress?: InputMaybe<IUseditemAddressInput>;
}

export interface IUpdateUseditemQuestionAnswerInput {
  contents: Scalars["String"]["input"];
}

export interface IUpdateUseditemQuestionInput {
  contents: Scalars["String"]["input"];
}

export interface IUpdateUserInput {
  name?: InputMaybe<Scalars["String"]["input"]>;
  picture?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IUseditem {
  __typename?: "Useditem";
  _id: Scalars["ID"]["output"];
  buyer?: Maybe<IUser>;
  contents: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  images?: Maybe<Array<Scalars["String"]["output"]>>;
  name: Scalars["String"]["output"];
  pickedCount?: Maybe<Scalars["Int"]["output"]>;
  price?: Maybe<Scalars["Int"]["output"]>;
  remarks: Scalars["String"]["output"];
  seller?: Maybe<IUser>;
  soldAt?: Maybe<Scalars["DateTime"]["output"]>;
  tags?: Maybe<Array<Scalars["String"]["output"]>>;
  updatedAt: Scalars["DateTime"]["output"];
  useditemAddress?: Maybe<IUseditemAddress>;
}

export interface IUseditemAddress {
  __typename?: "UseditemAddress";
  _id: Scalars["ID"]["output"];
  address?: Maybe<Scalars["String"]["output"]>;
  addressDetail?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  zipcode?: Maybe<Scalars["String"]["output"]>;
}

export interface IUseditemAddressInput {
  address?: InputMaybe<Scalars["String"]["input"]>;
  addressDetail?: InputMaybe<Scalars["String"]["input"]>;
  lat?: InputMaybe<Scalars["Float"]["input"]>;
  lng?: InputMaybe<Scalars["Float"]["input"]>;
  zipcode?: InputMaybe<Scalars["String"]["input"]>;
}

export interface IUseditemQuestion {
  __typename?: "UseditemQuestion";
  _id: Scalars["ID"]["output"];
  contents: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  useditem: IUseditem;
  user: IUser;
}

export interface IUseditemQuestionAnswer {
  __typename?: "UseditemQuestionAnswer";
  _id: Scalars["ID"]["output"];
  contents: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  useditemQuestion: IUseditemQuestion;
  user: IUser;
}

export interface IUser {
  __typename?: "User";
  _id: Scalars["ID"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  email: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  picture?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  userPoint?: Maybe<IUserPoint>;
}

export interface IUserPoint {
  __typename?: "UserPoint";
  _id: Scalars["ID"]["output"];
  amount: Scalars["Int"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  user: IUser;
}

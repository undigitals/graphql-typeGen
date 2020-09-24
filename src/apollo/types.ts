import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Raw JSON value */
  Json: any;
  DateTime: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type CityCreateInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  universities?: Maybe<UniversityCreateManyWithoutCityInput>;
};

export type CityCreateOneWithoutUniversitiesInput = {
  create?: Maybe<CityCreateWithoutUniversitiesInput>;
  connect?: Maybe<CityWhereUniqueInput>;
};

export type CityCreateWithoutUniversitiesInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type CityPreviousValues = {
  __typename?: 'CityPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CitySubscriptionPayload = {
  __typename?: 'CitySubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<City>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<CityPreviousValues>;
};

export type CitySubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CitySubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CitySubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CitySubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<CityWhereInput>;
};

export type CityUpdateInput = {
  name?: Maybe<Scalars['String']>;
  universities?: Maybe<UniversityUpdateManyWithoutCityInput>;
};

export type CityUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
};

export type CityUpdateOneWithoutUniversitiesInput = {
  create?: Maybe<CityCreateWithoutUniversitiesInput>;
  connect?: Maybe<CityWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CityUpdateWithoutUniversitiesDataInput>;
  upsert?: Maybe<CityUpsertWithoutUniversitiesInput>;
};

export type CityUpdateWithoutUniversitiesDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type CityUpsertWithoutUniversitiesInput = {
  update: CityUpdateWithoutUniversitiesDataInput;
  create: CityCreateWithoutUniversitiesInput;
};


export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createUser: User;
  createUniversity: University;
  createCity: City;
  updatePost?: Maybe<Post>;
  updateUser?: Maybe<User>;
  updateUniversity?: Maybe<University>;
  updateCity?: Maybe<City>;
  deletePost?: Maybe<Post>;
  deleteUser?: Maybe<User>;
  deleteUniversity?: Maybe<University>;
  deleteCity?: Maybe<City>;
  upsertPost: Post;
  upsertUser: User;
  upsertUniversity: University;
  upsertCity: City;
  updateManyPosts: BatchPayload;
  updateManyUsers: BatchPayload;
  updateManyUniversities: BatchPayload;
  updateManyCities: BatchPayload;
  deleteManyPosts: BatchPayload;
  deleteManyUsers: BatchPayload;
  deleteManyUniversities: BatchPayload;
  deleteManyCities: BatchPayload;
  executeRaw: Scalars['Json'];
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUniversityArgs = {
  data: UniversityCreateInput;
};


export type MutationCreateCityArgs = {
  data: CityCreateInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUniversityArgs = {
  data: UniversityUpdateInput;
  where: UniversityWhereUniqueInput;
};


export type MutationUpdateCityArgs = {
  data: CityUpdateInput;
  where: CityWhereUniqueInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUniversityArgs = {
  where: UniversityWhereUniqueInput;
};


export type MutationDeleteCityArgs = {
  where: CityWhereUniqueInput;
};


export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationUpsertUniversityArgs = {
  where: UniversityWhereUniqueInput;
  create: UniversityCreateInput;
  update: UniversityUpdateInput;
};


export type MutationUpsertCityArgs = {
  where: CityWhereUniqueInput;
  create: CityCreateInput;
  update: CityUpdateInput;
};


export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyUniversitiesArgs = {
  data: UniversityUpdateManyMutationInput;
  where?: Maybe<UniversityWhereInput>;
};


export type MutationUpdateManyCitiesArgs = {
  data: CityUpdateManyMutationInput;
  where?: Maybe<CityWhereInput>;
};


export type MutationDeleteManyPostsArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteManyUniversitiesArgs = {
  where?: Maybe<UniversityWhereInput>;
};


export type MutationDeleteManyCitiesArgs = {
  where?: Maybe<CityWhereInput>;
};


export type MutationExecuteRawArgs = {
  database?: Maybe<PrismaDatabase>;
  query: Scalars['String'];
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type PostCreateInput = {
  id?: Maybe<Scalars['ID']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  content: Scalars['String'];
  author: UserCreateOneWithoutPostsInput;
};

export type PostCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['ID']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  content: Scalars['String'];
};

export type PostPreviousValues = {
  __typename?: 'PostPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  content: Scalars['String'];
};

export type PostScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  published_not?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  content_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  content_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  content_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<Scalars['String']>;
};

export type PostSubscriptionPayload = {
  __typename?: 'PostSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Post>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<PostPreviousValues>;
};

export type PostSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<PostWhereInput>;
};

export type PostUpdateInput = {
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateManyDataInput = {
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type PostUpdateManyMutationInput = {
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type PostUpdateManyWithWhereNestedInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyDataInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
};

export type PostUpdateWithoutAuthorDataInput = {
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
};

export enum PrismaDatabase {
  Default = 'default'
}

export type Subscription = {
  __typename?: 'Subscription';
  post?: Maybe<PostSubscriptionPayload>;
  user?: Maybe<UserSubscriptionPayload>;
  university?: Maybe<UniversitySubscriptionPayload>;
  city?: Maybe<CitySubscriptionPayload>;
};


export type SubscriptionPostArgs = {
  where?: Maybe<PostSubscriptionWhereInput>;
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>;
};


export type SubscriptionUniversityArgs = {
  where?: Maybe<UniversitySubscriptionWhereInput>;
};


export type SubscriptionCityArgs = {
  where?: Maybe<CitySubscriptionWhereInput>;
};

export type UniversityCreateInput = {
  id?: Maybe<Scalars['ID']>;
  localRank: Scalars['Int'];
  globalRank: Scalars['Int'];
  nameEng: Scalars['String'];
  nameKor: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  departmentFee?: Maybe<Scalars['String']>;
  foreignEmail: Scalars['String'];
  foreignPhoneNumber: Scalars['String'];
  applyUrl: Scalars['String'];
  deadlineUrl: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  documents?: Maybe<UniversityCreatedocumentsInput>;
  city?: Maybe<CityCreateOneWithoutUniversitiesInput>;
};

export type UniversityCreateManyWithoutCityInput = {
  create?: Maybe<Array<UniversityCreateWithoutCityInput>>;
  connect?: Maybe<Array<UniversityWhereUniqueInput>>;
};

export type UniversityCreateWithoutCityInput = {
  id?: Maybe<Scalars['ID']>;
  localRank: Scalars['Int'];
  globalRank: Scalars['Int'];
  nameEng: Scalars['String'];
  nameKor: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  departmentFee?: Maybe<Scalars['String']>;
  foreignEmail: Scalars['String'];
  foreignPhoneNumber: Scalars['String'];
  applyUrl: Scalars['String'];
  deadlineUrl: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  documents?: Maybe<UniversityCreatedocumentsInput>;
};

export type UniversityCreatedocumentsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type UniversityPreviousValues = {
  __typename?: 'UniversityPreviousValues';
  id: Scalars['ID'];
  localRank: Scalars['Int'];
  globalRank: Scalars['Int'];
  nameEng: Scalars['String'];
  nameKor: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  departmentFee?: Maybe<Scalars['String']>;
  foreignEmail: Scalars['String'];
  foreignPhoneNumber: Scalars['String'];
  documents: Array<Scalars['String']>;
  applyUrl: Scalars['String'];
  deadlineUrl: Scalars['String'];
  published: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UniversityScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UniversityScalarWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UniversityScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UniversityScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  localRank?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  localRank_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  localRank_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  localRank_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  localRank_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  localRank_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  localRank_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  localRank_gte?: Maybe<Scalars['Int']>;
  globalRank?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  globalRank_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  globalRank_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  globalRank_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  globalRank_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  globalRank_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  globalRank_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  globalRank_gte?: Maybe<Scalars['Int']>;
  nameEng?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nameEng_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nameEng_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  nameEng_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  nameEng_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  nameEng_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  nameEng_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  nameEng_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  nameEng_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nameEng_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nameEng_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  nameEng_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nameEng_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  nameEng_not_ends_with?: Maybe<Scalars['String']>;
  nameKor?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nameKor_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nameKor_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  nameKor_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  nameKor_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  nameKor_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  nameKor_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  nameKor_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  nameKor_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nameKor_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nameKor_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  nameKor_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nameKor_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  nameKor_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  image_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  image_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  image_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  image_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  image_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  image_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  image_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  image_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  image_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  image_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  image_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  image_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  image_not_ends_with?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  logo_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  logo_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  logo_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  logo_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  logo_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  logo_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  logo_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  logo_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  logo_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  logo_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  logo_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  logo_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  logo_not_ends_with?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  country_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  country_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  country_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  country_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  country_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  country_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  country_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  country_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  country_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  country_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  country_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  country_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  country_not_ends_with?: Maybe<Scalars['String']>;
  departmentFee?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  departmentFee_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  departmentFee_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  departmentFee_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  departmentFee_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  departmentFee_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  departmentFee_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  departmentFee_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  departmentFee_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  departmentFee_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  departmentFee_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  departmentFee_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  departmentFee_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  departmentFee_not_ends_with?: Maybe<Scalars['String']>;
  foreignEmail?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  foreignEmail_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  foreignEmail_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  foreignEmail_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  foreignEmail_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  foreignEmail_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  foreignEmail_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  foreignEmail_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  foreignEmail_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  foreignEmail_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  foreignEmail_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  foreignEmail_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  foreignEmail_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  foreignEmail_not_ends_with?: Maybe<Scalars['String']>;
  foreignPhoneNumber?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  foreignPhoneNumber_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  foreignPhoneNumber_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  foreignPhoneNumber_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  foreignPhoneNumber_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  foreignPhoneNumber_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  foreignPhoneNumber_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  foreignPhoneNumber_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  foreignPhoneNumber_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  foreignPhoneNumber_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  foreignPhoneNumber_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  foreignPhoneNumber_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  foreignPhoneNumber_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  foreignPhoneNumber_not_ends_with?: Maybe<Scalars['String']>;
  applyUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  applyUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  applyUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  applyUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  applyUrl_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  applyUrl_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  applyUrl_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  applyUrl_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  applyUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  applyUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  applyUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  applyUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  applyUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  applyUrl_not_ends_with?: Maybe<Scalars['String']>;
  deadlineUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  deadlineUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  deadlineUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  deadlineUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  deadlineUrl_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  deadlineUrl_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  deadlineUrl_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  deadlineUrl_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  deadlineUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  deadlineUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  deadlineUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  deadlineUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  deadlineUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  deadlineUrl_not_ends_with?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  published_not?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
};

export type UniversitySubscriptionPayload = {
  __typename?: 'UniversitySubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<University>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<UniversityPreviousValues>;
};

export type UniversitySubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UniversitySubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UniversitySubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UniversitySubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<UniversityWhereInput>;
};

export type UniversityUpdateInput = {
  localRank?: Maybe<Scalars['Int']>;
  globalRank?: Maybe<Scalars['Int']>;
  nameEng?: Maybe<Scalars['String']>;
  nameKor?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  departmentFee?: Maybe<Scalars['String']>;
  foreignEmail?: Maybe<Scalars['String']>;
  foreignPhoneNumber?: Maybe<Scalars['String']>;
  applyUrl?: Maybe<Scalars['String']>;
  deadlineUrl?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  documents?: Maybe<UniversityUpdatedocumentsInput>;
  city?: Maybe<CityUpdateOneWithoutUniversitiesInput>;
};

export type UniversityUpdateManyDataInput = {
  localRank?: Maybe<Scalars['Int']>;
  globalRank?: Maybe<Scalars['Int']>;
  nameEng?: Maybe<Scalars['String']>;
  nameKor?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  departmentFee?: Maybe<Scalars['String']>;
  foreignEmail?: Maybe<Scalars['String']>;
  foreignPhoneNumber?: Maybe<Scalars['String']>;
  applyUrl?: Maybe<Scalars['String']>;
  deadlineUrl?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  documents?: Maybe<UniversityUpdatedocumentsInput>;
};

export type UniversityUpdateManyMutationInput = {
  localRank?: Maybe<Scalars['Int']>;
  globalRank?: Maybe<Scalars['Int']>;
  nameEng?: Maybe<Scalars['String']>;
  nameKor?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  departmentFee?: Maybe<Scalars['String']>;
  foreignEmail?: Maybe<Scalars['String']>;
  foreignPhoneNumber?: Maybe<Scalars['String']>;
  applyUrl?: Maybe<Scalars['String']>;
  deadlineUrl?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  documents?: Maybe<UniversityUpdatedocumentsInput>;
};

export type UniversityUpdateManyWithWhereNestedInput = {
  where: UniversityScalarWhereInput;
  data: UniversityUpdateManyDataInput;
};

export type UniversityUpdateManyWithoutCityInput = {
  create?: Maybe<Array<UniversityCreateWithoutCityInput>>;
  connect?: Maybe<Array<UniversityWhereUniqueInput>>;
  set?: Maybe<Array<UniversityWhereUniqueInput>>;
  disconnect?: Maybe<Array<UniversityWhereUniqueInput>>;
  delete?: Maybe<Array<UniversityWhereUniqueInput>>;
  update?: Maybe<Array<UniversityUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: Maybe<Array<UniversityUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UniversityScalarWhereInput>>;
  upsert?: Maybe<Array<UniversityUpsertWithWhereUniqueWithoutCityInput>>;
};

export type UniversityUpdateWithWhereUniqueWithoutCityInput = {
  where: UniversityWhereUniqueInput;
  data: UniversityUpdateWithoutCityDataInput;
};

export type UniversityUpdateWithoutCityDataInput = {
  localRank?: Maybe<Scalars['Int']>;
  globalRank?: Maybe<Scalars['Int']>;
  nameEng?: Maybe<Scalars['String']>;
  nameKor?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  departmentFee?: Maybe<Scalars['String']>;
  foreignEmail?: Maybe<Scalars['String']>;
  foreignPhoneNumber?: Maybe<Scalars['String']>;
  applyUrl?: Maybe<Scalars['String']>;
  deadlineUrl?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  documents?: Maybe<UniversityUpdatedocumentsInput>;
};

export type UniversityUpdatedocumentsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type UniversityUpsertWithWhereUniqueWithoutCityInput = {
  where: UniversityWhereUniqueInput;
  update: UniversityUpdateWithoutCityDataInput;
  create: UniversityCreateWithoutCityInput;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
};

export type UserCreateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutPostsInput = {
  id?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
};

export type UserPreviousValues = {
  __typename?: 'UserPreviousValues';
  id: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
};

export type UserSubscriptionPayload = {
  __typename?: 'UserSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<UserPreviousValues>;
};

export type UserSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<UserWhereInput>;
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutPostsDataInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateWithoutPostsDataInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsDataInput;
  create: UserCreateWithoutPostsInput;
};

export type AggregateCity = {
  __typename?: 'AggregateCity';
  count: Scalars['Int'];
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  count: Scalars['Int'];
};

export type AggregateUniversity = {
  __typename?: 'AggregateUniversity';
  count: Scalars['Int'];
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count: Scalars['Int'];
};

export type City = Node & {
  __typename?: 'City';
  id: Scalars['ID'];
  name: Scalars['String'];
  universities?: Maybe<Array<University>>;
};


export type CityUniversitiesArgs = {
  where?: Maybe<UniversityWhereInput>;
  orderBy?: Maybe<UniversityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type CityConnection = {
  __typename?: 'CityConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<CityEdge>>;
  aggregate: AggregateCity;
};

/** An edge in a connection. */
export type CityEdge = {
  __typename?: 'CityEdge';
  /** The item at the end of the edge. */
  node: City;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum CityOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type CityWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CityWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CityWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CityWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  universities_every?: Maybe<UniversityWhereInput>;
  universities_some?: Maybe<UniversityWhereInput>;
  universities_none?: Maybe<UniversityWhereInput>;
};

export type CityWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Post = Node & {
  __typename?: 'Post';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  content: Scalars['String'];
  author: User;
};

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<PostEdge>>;
  aggregate: AggregatePost;
};

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge';
  /** The item at the end of the edge. */
  node: Post;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum PostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAsc = 'published_ASC',
  PublishedDesc = 'published_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC'
}

export type PostWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  published_not?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  content_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  content_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  content_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<Scalars['String']>;
  author?: Maybe<UserWhereInput>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  posts: Array<Maybe<Post>>;
  users: Array<Maybe<User>>;
  universities: Array<Maybe<University>>;
  cities: Array<Maybe<City>>;
  post?: Maybe<Post>;
  user?: Maybe<User>;
  university?: Maybe<University>;
  city?: Maybe<City>;
  postsConnection: PostConnection;
  usersConnection: UserConnection;
  universitiesConnection: UniversityConnection;
  citiesConnection: CityConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUniversitiesArgs = {
  where?: Maybe<UniversityWhereInput>;
  orderBy?: Maybe<UniversityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCitiesArgs = {
  where?: Maybe<CityWhereInput>;
  orderBy?: Maybe<CityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUniversityArgs = {
  where: UniversityWhereUniqueInput;
};


export type QueryCityArgs = {
  where: CityWhereUniqueInput;
};


export type QueryPostsConnectionArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUniversitiesConnectionArgs = {
  where?: Maybe<UniversityWhereInput>;
  orderBy?: Maybe<UniversityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCitiesConnectionArgs = {
  where?: Maybe<CityWhereInput>;
  orderBy?: Maybe<CityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type University = Node & {
  __typename?: 'University';
  id: Scalars['ID'];
  localRank: Scalars['Int'];
  globalRank: Scalars['Int'];
  nameEng: Scalars['String'];
  nameKor: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  city?: Maybe<City>;
  departmentFee?: Maybe<Scalars['String']>;
  foreignEmail: Scalars['String'];
  foreignPhoneNumber: Scalars['String'];
  documents: Array<Scalars['String']>;
  applyUrl: Scalars['String'];
  deadlineUrl: Scalars['String'];
  published: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type UniversityConnection = {
  __typename?: 'UniversityConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<UniversityEdge>>;
  aggregate: AggregateUniversity;
};

/** An edge in a connection. */
export type UniversityEdge = {
  __typename?: 'UniversityEdge';
  /** The item at the end of the edge. */
  node: University;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum UniversityOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocalRankAsc = 'localRank_ASC',
  LocalRankDesc = 'localRank_DESC',
  GlobalRankAsc = 'globalRank_ASC',
  GlobalRankDesc = 'globalRank_DESC',
  NameEngAsc = 'nameEng_ASC',
  NameEngDesc = 'nameEng_DESC',
  NameKorAsc = 'nameKor_ASC',
  NameKorDesc = 'nameKor_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  LogoAsc = 'logo_ASC',
  LogoDesc = 'logo_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  DepartmentFeeAsc = 'departmentFee_ASC',
  DepartmentFeeDesc = 'departmentFee_DESC',
  ForeignEmailAsc = 'foreignEmail_ASC',
  ForeignEmailDesc = 'foreignEmail_DESC',
  ForeignPhoneNumberAsc = 'foreignPhoneNumber_ASC',
  ForeignPhoneNumberDesc = 'foreignPhoneNumber_DESC',
  ApplyUrlAsc = 'applyUrl_ASC',
  ApplyUrlDesc = 'applyUrl_DESC',
  DeadlineUrlAsc = 'deadlineUrl_ASC',
  DeadlineUrlDesc = 'deadlineUrl_DESC',
  PublishedAsc = 'published_ASC',
  PublishedDesc = 'published_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UniversityWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UniversityWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UniversityWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UniversityWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  localRank?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  localRank_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  localRank_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  localRank_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  localRank_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  localRank_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  localRank_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  localRank_gte?: Maybe<Scalars['Int']>;
  globalRank?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  globalRank_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  globalRank_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  globalRank_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  globalRank_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  globalRank_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  globalRank_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  globalRank_gte?: Maybe<Scalars['Int']>;
  nameEng?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nameEng_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nameEng_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  nameEng_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  nameEng_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  nameEng_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  nameEng_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  nameEng_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  nameEng_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nameEng_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nameEng_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  nameEng_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nameEng_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  nameEng_not_ends_with?: Maybe<Scalars['String']>;
  nameKor?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nameKor_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nameKor_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  nameKor_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  nameKor_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  nameKor_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  nameKor_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  nameKor_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  nameKor_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nameKor_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nameKor_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  nameKor_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nameKor_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  nameKor_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  image_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  image_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  image_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  image_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  image_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  image_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  image_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  image_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  image_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  image_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  image_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  image_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  image_not_ends_with?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  logo_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  logo_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  logo_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  logo_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  logo_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  logo_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  logo_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  logo_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  logo_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  logo_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  logo_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  logo_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  logo_not_ends_with?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  country_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  country_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  country_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  country_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  country_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  country_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  country_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  country_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  country_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  country_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  country_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  country_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  country_not_ends_with?: Maybe<Scalars['String']>;
  departmentFee?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  departmentFee_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  departmentFee_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  departmentFee_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  departmentFee_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  departmentFee_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  departmentFee_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  departmentFee_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  departmentFee_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  departmentFee_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  departmentFee_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  departmentFee_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  departmentFee_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  departmentFee_not_ends_with?: Maybe<Scalars['String']>;
  foreignEmail?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  foreignEmail_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  foreignEmail_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  foreignEmail_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  foreignEmail_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  foreignEmail_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  foreignEmail_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  foreignEmail_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  foreignEmail_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  foreignEmail_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  foreignEmail_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  foreignEmail_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  foreignEmail_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  foreignEmail_not_ends_with?: Maybe<Scalars['String']>;
  foreignPhoneNumber?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  foreignPhoneNumber_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  foreignPhoneNumber_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  foreignPhoneNumber_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  foreignPhoneNumber_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  foreignPhoneNumber_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  foreignPhoneNumber_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  foreignPhoneNumber_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  foreignPhoneNumber_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  foreignPhoneNumber_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  foreignPhoneNumber_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  foreignPhoneNumber_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  foreignPhoneNumber_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  foreignPhoneNumber_not_ends_with?: Maybe<Scalars['String']>;
  applyUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  applyUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  applyUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  applyUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  applyUrl_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  applyUrl_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  applyUrl_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  applyUrl_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  applyUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  applyUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  applyUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  applyUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  applyUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  applyUrl_not_ends_with?: Maybe<Scalars['String']>;
  deadlineUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  deadlineUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  deadlineUrl_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  deadlineUrl_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  deadlineUrl_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  deadlineUrl_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  deadlineUrl_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  deadlineUrl_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  deadlineUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  deadlineUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  deadlineUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  deadlineUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  deadlineUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  deadlineUrl_not_ends_with?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  published_not?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  city?: Maybe<CityWhereInput>;
};

export type UniversityWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<UserEdge>>;
  aggregate: AggregateUser;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  posts_every?: Maybe<PostWhereInput>;
  posts_some?: Maybe<PostWhereInput>;
  posts_none?: Maybe<PostWhereInput>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};


export type UniversityFragment = (
  { __typename?: 'University' }
  & Pick<University, 'nameEng'>
);

export type UniverQueryVariables = Exact<{ [key: string]: never; }>;


export type UniverQuery = (
  { __typename?: 'Query' }
  & { universities: Array<Maybe<(
    { __typename?: 'University' }
    & UniversityFragment
  )>> }
);

export type UniverNofrQueryVariables = Exact<{ [key: string]: never; }>;


export type UniverNofrQuery = (
  { __typename?: 'Query' }
  & { universities: Array<Maybe<(
    { __typename?: 'University' }
    & Pick<University, 'nameEng'>
  )>> }
);

export const UniversityFragmentDoc = gql`
    fragment University on University {
  nameEng
}
    `;
export const UniverDocument = gql`
    query univer {
  universities(orderBy: id_ASC) {
    ...University
  }
}
    ${UniversityFragmentDoc}`;

/**
 * __useUniverQuery__
 *
 * To run a query within a React component, call `useUniverQuery` and pass it any options that fit your needs.
 * When your component renders, `useUniverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUniverQuery({
 *   variables: {
 *   },
 * });
 */
export function useUniverQuery(baseOptions?: Apollo.QueryHookOptions<UniverQuery, UniverQueryVariables>) {
        return Apollo.useQuery<UniverQuery, UniverQueryVariables>(UniverDocument, baseOptions);
      }
export function useUniverLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UniverQuery, UniverQueryVariables>) {
          return Apollo.useLazyQuery<UniverQuery, UniverQueryVariables>(UniverDocument, baseOptions);
        }
export type UniverQueryHookResult = ReturnType<typeof useUniverQuery>;
export type UniverLazyQueryHookResult = ReturnType<typeof useUniverLazyQuery>;
export type UniverQueryResult = Apollo.QueryResult<UniverQuery, UniverQueryVariables>;
export const UniverNofrDocument = gql`
    query univerNofr {
  universities(orderBy: id_ASC) {
    nameEng
  }
}
    `;

/**
 * __useUniverNofrQuery__
 *
 * To run a query within a React component, call `useUniverNofrQuery` and pass it any options that fit your needs.
 * When your component renders, `useUniverNofrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUniverNofrQuery({
 *   variables: {
 *   },
 * });
 */
export function useUniverNofrQuery(baseOptions?: Apollo.QueryHookOptions<UniverNofrQuery, UniverNofrQueryVariables>) {
        return Apollo.useQuery<UniverNofrQuery, UniverNofrQueryVariables>(UniverNofrDocument, baseOptions);
      }
export function useUniverNofrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UniverNofrQuery, UniverNofrQueryVariables>) {
          return Apollo.useLazyQuery<UniverNofrQuery, UniverNofrQueryVariables>(UniverNofrDocument, baseOptions);
        }
export type UniverNofrQueryHookResult = ReturnType<typeof useUniverNofrQuery>;
export type UniverNofrLazyQueryHookResult = ReturnType<typeof useUniverNofrLazyQuery>;
export type UniverNofrQueryResult = Apollo.QueryResult<UniverNofrQuery, UniverNofrQueryVariables>;
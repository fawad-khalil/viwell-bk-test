import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  email?: true;

  @Field(() => Boolean, { nullable: true })
  password?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;

  @Field(() => Boolean, { nullable: true })
  organizationId?: true;

  @Field(() => Boolean, { nullable: true })
  userRoleId?: true;

  @Field(() => Boolean, { nullable: true })
  roleType?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  deletedAt?: true;
}

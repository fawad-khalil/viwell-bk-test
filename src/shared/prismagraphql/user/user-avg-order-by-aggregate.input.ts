import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userRoleId?: keyof typeof SortOrder;
}

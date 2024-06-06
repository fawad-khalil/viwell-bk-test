import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTypes } from '../prisma/role-types.enum';

@InputType()
export class UserCreateManyRoleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    organizationId!: string;

    @Field(() => RoleTypes, {nullable:true})
    roleType?: keyof typeof RoleTypes;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;
}

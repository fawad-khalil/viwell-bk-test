import { Injectable, MethodNotAllowedException } from '@nestjs/common';
import { BaseCrudService } from 'src/base-crud/base-crud.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoleTypesEnum } from 'src/roles/roles.enum';
import { RolesService } from 'src/roles/roles.service';
import {
  CreateManyOrganizationArgs,
  CreateOneOrganizationArgs,
  DeleteManyOrganizationArgs,
  DeleteOneOrganizationArgs,
  FindFirstOrganizationArgs,
  FindManyOrganizationArgs,
  FindUniqueOrganizationArgs,
  Organization,
  UpdateManyOrganizationArgs,
  UpdateOneOrganizationArgs,
} from 'src/shared/prismagraphql/organization';
import { UserService } from 'src/user/user.service';

@Injectable()
export class OrganizationService extends BaseCrudService<
  Organization,
  FindFirstOrganizationArgs,
  FindUniqueOrganizationArgs,
  FindManyOrganizationArgs,
  CreateOneOrganizationArgs,
  CreateManyOrganizationArgs,
  UpdateOneOrganizationArgs,
  UpdateManyOrganizationArgs,
  DeleteOneOrganizationArgs,
  DeleteManyOrganizationArgs
> {
  constructor(
    prisma: PrismaService,
    private readonly userService: UserService,
    private readonly rolesService: RolesService,
  ) {
    super(prisma);
  }

  async create(args: CreateOneOrganizationArgs): Promise<Organization> {
    const { organization, adminUser } = args.data || {};
    try {
      const newOrg = await this.prisma.organization.create({
        data: organization,
      });

      await this.userService.create(
        {
          data: {
            ...adminUser,
            roleType: RoleTypesEnum.ORG_ADMIN,
            organization: { connect: { id: newOrg.id } },
          },
        },
        newOrg,
      );

      return newOrg;
    } catch (error) {
      throw error;
    }
  }

  createMany(): Promise<Organization> {
    throw new MethodNotAllowedException();
  }
}

import { type UserAdminResponseDto } from '@immich/sdk';
import { type ActionItem } from '@immich/ui';
import { mdiInformationOutline } from '@mdi/js';
import type { MessageFormatter } from 'svelte-i18n';
import { goto } from '$app/navigation';
import { Route } from '$lib/route';

// Members and their roles are managed in the Pixly portal, so the only admin
// action left on a user is viewing it.
export const getUserAdminActions = ($t: MessageFormatter, user: UserAdminResponseDto) => {
  const Detail: ActionItem = {
    icon: mdiInformationOutline,
    title: $t('details'),
    onAction: () => goto(Route.viewUser(user)),
  };

  return { Detail };
};

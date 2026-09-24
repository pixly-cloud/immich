import { authenticate } from '$lib/utils/auth';
import type { LayoutLoad } from './$types';

// Pixly: system config isn't loaded here. /api/system-config is blocked for tenants and
// only the (redirected) system-settings pages use it.
export const load = (async ({ url }) => {
  await authenticate(url, { admin: true });
}) satisfies LayoutLoad;

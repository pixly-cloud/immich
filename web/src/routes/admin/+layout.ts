import { authenticate } from '$lib/utils/auth';
import type { LayoutLoad } from './$types';

// Pixly: do NOT eagerly load system config here. The platform blocks /api/system-config at
// the edge (it isn't tenant-managed), and the only consumers of that config are the
// system-settings pages, which we redirect away from. Calling systemConfigManager.init()
// here would 403 and break every surviving admin page (Users, Queues, Server Stats).
export const load = (async ({ url }) => {
  await authenticate(url, { admin: true });
}) satisfies LayoutLoad;

import { redirect } from '@sveltejs/kit';
import { Route } from '$lib/route';
import type { PageLoad } from './$types';

// Pixly: server system settings are managed by the platform and not exposed to tenants.
// Hidden from the admin nav and blocked here so direct URLs can't reach the page.
export const load = (() => redirect(307, Route.users())) satisfies PageLoad;

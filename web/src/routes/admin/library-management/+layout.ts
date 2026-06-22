import { redirect } from '@sveltejs/kit';
import { Route } from '$lib/route';
import type { LayoutLoad } from './$types';

// Pixly: external libraries are managed by the platform and not exposed to tenants.
// This layout guards the whole /admin/library-management subtree (list, new, view, edit)
// so direct URLs can't reach any library-management page. It's also hidden from the admin nav.
export const load = (() => redirect(307, Route.users())) satisfies LayoutLoad;

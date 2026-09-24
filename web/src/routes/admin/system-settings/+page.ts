import { redirect } from '@sveltejs/kit';
import { Route } from '$lib/route';
import type { PageLoad } from './$types';

// Pixly: system settings are managed by the platform.
export const load = (() => redirect(307, Route.users())) satisfies PageLoad;

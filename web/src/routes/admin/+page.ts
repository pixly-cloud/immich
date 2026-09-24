import { redirect } from '@sveltejs/kit';
import { Route } from '$lib/route';
import type { PageLoad } from './$types';

// Pixly: /admin lands on Users (system settings is no longer exposed to tenants).
export const load = (() => redirect(307, Route.users())) satisfies PageLoad;

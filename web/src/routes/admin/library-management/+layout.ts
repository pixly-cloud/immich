import { redirect } from '@sveltejs/kit';
import { Route } from '$lib/route';
import type { LayoutLoad } from './$types';

// Pixly: external libraries are managed by the platform; blocks the whole subtree.
export const load = (() => redirect(307, Route.users())) satisfies LayoutLoad;

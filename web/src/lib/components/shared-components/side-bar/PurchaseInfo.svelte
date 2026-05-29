<script lang="ts">
  import { authManager } from '$lib/managers/auth-manager.svelte';
  import { OpenQueryParam } from '$lib/constants';
  import { goto } from '$app/navigation';
  import { Route } from '$lib/route';
  import { SupporterBadge } from '@immich/ui';
</script>

<!-- Pixly: buy button removed — billing is handled via app.pixly.cloud -->
<div class="license-status ps-4 text-sm">
  {#if authManager.isPurchased && authManager.preferences.purchase.showSupportBadge}
    <button
      onclick={() => goto(Route.userSettings({ isOpen: OpenQueryParam.PURCHASE_SETTINGS }))}
      class="mt-2 w-full"
      type="button"
    >
      <SupporterBadge size="small" effect="always" />
    </button>
  {/if}
</div>

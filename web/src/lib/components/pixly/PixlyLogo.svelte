<script lang="ts">
  /**
   * PixlyLogo — Pixly brand mark component.
   * Replaces the @immich/ui Logo component with Pixly branding.
   *
   * Props mirror the @immich/ui Logo API so callers need no changes beyond the import.
   */
  interface Props {
    variant?: 'icon' | 'inline';
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'giant';
    class?: string;
  }

  const { variant = 'icon', size = 'medium', class: className = '' }: Props = $props();

  const dimPx: Record<string, number> = {
    tiny: 22,
    small: 30,
    medium: 40,
    large: 54,
    giant: 80,
  };

  const px = dimPx[size] ?? 40;
</script>

{#if variant === 'inline'}
  <span
    class="select-none font-bold tracking-tight text-immich-primary dark:text-immich-dark-primary {className}"
    style="font-size: {px * 0.6}px; line-height: 1;"
    aria-label="Pixly"
  >Pixly</span>
{:else}
  <!-- Icon / mark variant -->
  <svg
    width={px}
    height={px}
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Pixly"
    class={className}
  >
    <rect width="40" height="40" rx="9" fill="currentColor" class="text-immich-primary dark:text-immich-dark-primary" />
    <text
      x="20"
      y="27"
      text-anchor="middle"
      font-size="24"
      font-weight="800"
      font-family="system-ui, -apple-system, sans-serif"
      fill="white"
    >P</text>
  </svg>
{/if}

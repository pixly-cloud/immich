<script lang="ts">
  import { Card, CardBody, CardHeader, Heading, VStack } from '@immich/ui';
  import PixlyLogo from '$lib/components/pixly/PixlyLogo.svelte';
  import type { Snippet } from 'svelte';
  interface Props {
    title?: string;
    children?: Snippet;
    withHeader?: boolean;
    withBackdrop?: boolean;
  }

  let { title, children, withHeader = true, withBackdrop = true }: Props = $props();
</script>

<section class="relative isolate flex min-h-dvh min-w-dvw items-center justify-center">
  {#if withBackdrop}
    <div class="absolute -z-10 flex size-full place-content-center place-items-center">
      <!-- Pixly: gradient backdrop replaces the Immich logo background -->
      <div
        class="size-full bg-gradient-to-br from-immich-primary/10 via-transparent to-immich-primary/5 dark:from-immich-dark-primary/10 dark:to-immich-dark-primary/5"
      ></div>
    </div>
  {/if}

  <Card color="secondary" class="m-2 w-full max-w-xl border">
    {#if withHeader}
      <CardHeader class="mt-6">
        <VStack>
          <PixlyLogo variant="icon" size="giant" />
          <Heading size="large" class="font-semibold" color="primary" tag="h1">{title}</Heading>
        </VStack>
      </CardHeader>
    {/if}

    <CardBody class="p-8">
      {@render children?.()}
    </CardBody>
  </Card>
</section>

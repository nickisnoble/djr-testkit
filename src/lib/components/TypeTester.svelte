<script lang="ts">
  import type { FontConfig } from "$lib/types.d.ts";
  export let config: FontConfig;
</script>

<div
  class="type-tester"
  style="--djr-family: {config.name};"
>
  <h1>TypeTester</h1>

  <div contenteditable>{config.previewText ?? "The quick brown dog jumped over the lazy fox."}</div>
</div>

<style>
  .type-tester {
    font-family: var(--djr-family);
    background: #111;
    color: #ccc;
    padding: 1em;
    min-height: 100vh;
  }
</style>
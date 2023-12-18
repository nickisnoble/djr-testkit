<svelte:options customElement="type-tester" />

<script lang="ts">
  import type { FontConfig } from "$lib/types.d.ts";
  export let config: FontConfig;

  let fontSize = config.fontSize?.default ?? 16;
</script>

<div
  class="type-tester"
  style="--djr-family: {config.name};"
>
  <h1>TypeTester</h1>

  <form>
    <fieldset>
      <legend>Size</legend>
      <input type="range" bind:value={fontSize} min={ config.fontSize?.min ?? 8} max={config.fontSize?.max ?? 128 } />
      <output>{fontSize}px</output>
    </fieldset>
  </form>


  <div class="preview" style="font-size: {fontSize}px;" contenteditable>{config.previewText ?? "The quick brown fox jumped over the lazy dog."}</div>
</div>

<style>
  .type-tester {
    font-family: var(--djr-family);
    background: #111;
    color: #ccc;
    padding: 1em;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .preview {
    flex: 1;
    background: #cccCCC22;
    padding: 0.5rem;
  }

  form {
    display: grid;
  }

  fieldset {
    padding: 0.5rem;
    display: flex;
    gap: 0.5rem;
  }

  input { width: 100%; }
  output { width: 5ch}
</style>
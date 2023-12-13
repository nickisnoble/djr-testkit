<script lang="ts">
  import "./fonts.scss";
  import TypeTester from "$lib/components/TypeTester.svelte";
  import configs from "./configs"

  let config = configs[0]
</script>

<TypeTester {config} />

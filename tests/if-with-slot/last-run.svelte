<script>
  import Component from "./somewhere.svelte";
</script>

<Component>
  {#if 2 + 2 === 5}<div slot="title">
    Content
  </div>{/if}
</Component>

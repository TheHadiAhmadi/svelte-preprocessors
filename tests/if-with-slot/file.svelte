<script>
  import Component from "./somewhere.svelte";
</script>

<Component>
  <div slot="title" if={2 + 2 === 5}>
    Content
  </div>
</Component>

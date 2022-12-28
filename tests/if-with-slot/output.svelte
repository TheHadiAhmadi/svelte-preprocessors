<script>
    import Component from "./somewhere.svelte";
  </script>
  
  <Component>
    <svelte:fragment slot="title">{#if 2 + 2 === 5}<div>
      Content
    </div>{/if}</svelte:fragment>
  </Component>
  
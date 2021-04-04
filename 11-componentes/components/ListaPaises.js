app.component("lista-paises", {
  template: `
  <ol>
   <li v-for="(pais, i) in paises" :key="i">
    {{ pais }} 
   </li>
  </ol>`,
  // data: () => ({
  //   pais: "méxico",
  // })
  props: {
    paises: Array,
  }
})
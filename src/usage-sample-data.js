export const data = [
  {
    value: "react",
    syntax: "jsx",
    icon: "react",
    label: "React",
    link: {
      title: "react-icomoon",
      url: "https://github.com/aykutkardas/react-icomoon",
    },
    demo: {
      icon: "codesandbox",
      url: "https://codesandbox.io/s/react-icomoon-demo-13pce",
    },
    sample: `import IcoMoon from "react-icomoon";
import iconSet from "./selection.json";

const Icon = (props) => (
  <IcoMoon iconSet={iconSet} {...props} />
);

export default Icon;`,
  },
  {
    value: "react-native",
    syntax: "jsx",
    icon: "react",
    label: "React Native",
    link: {
      title: "react-icomoon",
      url: "https://github.com/aykutkardas/react-icomoon#react-native---demo",
    },
    demo: {
      icon: "snack",
      url: "https://snack.expo.dev/@aykutkardas/react-icomoon",
    },
    sample: `import IcoMoon from "react-icomoon";
import { Svg, Path } from "react-native-svg";
import iconSet from "./selection.json";

const Icon = (props) => (
  <IcoMoon
    iconSet={iconSet} 
    native
    SvgComponent={Svg}
    PathComponent={Path} 
    {...props}
  />
);

export default Icon;`,
  },
  {
    value: "preact",
    syntax: "jsx",
    icon: "preact",
    label: "Preact",
    link: {
      title: "preact-icomoon",
      url: "https://github.com/aykutkardas/preact-icomoon",
    },
    demo: {
      icon: "codesandbox",
      url: "https://codesandbox.io/s/2x0ft8",
    },
    sample: `import IcoMoon from "preact-icomoon";
import iconSet from "./selection.json";

const Icon = (props) => (
  <IcoMoon iconSet={iconSet} {...props} />
);

export default Icon;`,
  },
  {
    value: "vue",
    syntax: "javascript",
    icon: "vue",
    label: "Vue",
    link: {
      title: "vue-icomoon",
      url: "https://github.com/aykutkardas/vue-icomoon",
    },
    demo: {
      icon: "codesandbox",
      url: "https://codesandbox.io/s/vue-icomoon-demo-nqb0z",
    },
    sample: `<template>
  <icomoon :iconSet="iconSet" v-bind="$props" />
</template>

<script>
import { Icomoon } from "vue-icomoon";
import iconSet from "./selection.json";

export default {
  name: "Icon",
  components: { Icomoon },
  setup() {
    return {
      iconSet,
    };
  },
};
</script>`,
  },
  {
    value: "svelte",
    syntax: "javascript",
    icon: "svelte",
    label: "Svelte",
    link: {
      title: "svelte-icomoon",
      url: "https://github.com/aykutkardas/svelte-icomoon",
    },
    demo: {
      icon: "codesandbox",
      url: "https://codesandbox.io/s/svelte-icomoon-demo-7ohyqm",
    },
    sample: `<script>
  import Icomoon from "svelte-icomoon";
  import iconSet from "./selection.json";
</script>
  
<Icomoon iconSet={iconSet} {...$$props} />`,
  },
];

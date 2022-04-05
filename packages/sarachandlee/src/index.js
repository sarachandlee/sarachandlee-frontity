import Root from './components'
import link from "@frontity/html2react/processors/link";

export default {
  name: "sarachandlee",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
};

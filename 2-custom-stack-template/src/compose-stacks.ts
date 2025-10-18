import { namespaceTemplate } from "@kubricate/stacks";
import { config } from "./shared-config";
import { simpleAppTemplate } from "./stack-templates/simpleAppTemplate";
import { Stack } from "kubricate";

const namespace = Stack.fromTemplate(namespaceTemplate, {
  name: config.namespace,
});

const myApp = Stack.fromTemplate(simpleAppTemplate, {
  namespace: config.namespace,
  imageRegistry: "ghcr.io",
  imageName: "mildronize/kubricate-demo-azure-global-2025:main",
  name: "my-app",
  port: 8080,
});

export default { namespace, myApp };

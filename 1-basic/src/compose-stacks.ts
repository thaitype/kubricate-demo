import { Stack } from "kubricate";
import {
  NamespaceStack,
  namespaceTemplate,
  simpleAppTemplate,
  SimpleAppStack,
} from "@kubricate/stacks";
import { config } from "./shared-config";

const namespace = Stack.fromTemplate(namespaceTemplate, {
  name: config.namespace,
});

const myApp = Stack.fromTemplate(simpleAppTemplate, {
  namespace: config.namespace,
  imageRegistry: "ghcr.io",
  imageName: "mildronize/kubricate-demo-azure-global-2025:main",
  name: "my-app",
  port: 8080,
}).override({
  service: {
    apiVersion: "v1",
    kind: "Service",
    spec: {
      type: "LoadBalancer",
    },
  },
});

export default { namespace, myApp };

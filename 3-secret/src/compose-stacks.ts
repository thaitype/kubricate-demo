import { namespaceTemplate } from '@kubricate/stacks';
import { config } from './shared-config';
import { simpleAppTemplate } from './stack-templates/simpleAppTemplate'
import { secretManager } from './setup-secrets';
import { Stack } from 'kubricate';

const namespace = Stack.fromTemplate(namespaceTemplate, {
  name: config.namespace,
});

const myApp = Stack.fromTemplate(simpleAppTemplate, {
  namespace: config.namespace,
  imageRegistry: 'ghcr.io',
  imageName: 'mildronize/kubricate-demo-azure-global-2025:main',
  name: 'my-app',
  port: 8080,
  env: [
    { name: 'APP_ID', value: 'Kubricate App' },
  ]
})
  .useSecrets(secretManager, c => {
    c.secrets('APP_SECRET').forName('APP_KEY').inject();
    c.secrets('DATABASE_CONNECTION_STRING').forName('POSTGRES_CONNECTION_STRING').inject('env');
  });

export default { namespace, myApp };
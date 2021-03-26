Reproduction steps
1. run `npm link` in raw-library
2. run `npm install` in consumer
3. run `npm link raw-library` in consumer
4. run `snowpack build --verbose`

Observe that esinstall complains about the scss file despite the fact that `@snowpack/plugin-sass` has already processed it.

If the workspaceRoot for consumer is set to `../` snowpack builds the linked package correctly, but with `workspaceRoot:false` it acts as it does with a standard package (it fails)
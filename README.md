# CE-RISE TypeScript Software Development Kit for Hexagonal Core Service

[![NPM](https://nodei.co/npm/@ce-rise/hex-core-sdk-typescript.svg?style=shields)](https://www.npmjs.com/package/@ce-rise/hex-core-sdk-typescript)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.18954440.svg)](https://doi.org/10.5281/zenodo.18954440)

A TypeScript SDK for the CE-RISE Hex Core Service:
https://codeberg.org/CE-RISE-software/hex-core-service

## Install

Install from npm:

```bash
npm install "@ce-rise/hex-core-sdk-typescript"
```

Install a specific version:

```bash
npm install "@ce-rise/hex-core-sdk-typescript@0.0.1"
```

## Quickstart

### 1) Configure client and call public endpoints

```ts
import { Configuration, DiscoveryApi } from "@ce-rise/hex-core-sdk-typescript";

const config = new Configuration({
  basePath: "https://your-hex-core-service.example.org"
});

const discoveryApi = new DiscoveryApi(config);
const models = await discoveryApi.listModels();
console.log(models);
```

### 2) Configure bearer token for protected endpoints

```ts
import { AdminApi, Configuration } from "@ce-rise/hex-core-sdk-typescript";

const config = new Configuration({
  basePath: "https://your-hex-core-service.example.org",
  accessToken: process.env.HEX_CORE_TOKEN
});

const adminApi = new AdminApi(config);
const status = await adminApi.status();
console.log(status);
```

### 3) Validate and create records

```ts
import { Configuration, ModelsApi } from "@ce-rise/hex-core-sdk-typescript";

const config = new Configuration({
  basePath: "https://your-hex-core-service.example.org",
  accessToken: process.env.HEX_CORE_TOKEN
});

const modelsApi = new ModelsApi(config);

const report = await modelsApi.validateModelPayload({
  model: "model-a",
  version: "1.0.0",
  validateRequest: { payload: { x: 1 } }
});

const created = await modelsApi.createRecord({
  model: "model-a",
  version: "1.0.0",
  idempotencyKey: "my-key-123",
  createRequest: { payload: { x: 1 } }
});

console.log(report, created);
```

## API Documentation

- Generated docs website: https://ce-rise-software.codeberg.page/hex-core-sdk-typescript/
- Local API docs:
  - `docs/apis/AdminApi.md`
  - `docs/apis/DiscoveryApi.md`
  - `docs/apis/ModelsApi.md`

## License

Licensed under the [European Union Public Licence v1.2 (EUPL-1.2)](LICENSE).

## Contributing

This repository is maintained on [Codeberg](https://codeberg.org/CE-RISE-software/hex-core-sdk-typescript) as the canonical source of truth. The GitHub repository is a read-only mirror used for release archival and Zenodo integration.

---

<a href="https://europa.eu" target="_blank" rel="noopener noreferrer">
  <img src="https://ce-rise.eu/wp-content/uploads/2023/01/EN-Funded-by-the-EU-PANTONE-e1663585234561-1-1.png" alt="EU emblem" width="200"/>
</a>

Funded by the European Union under Grant Agreement No. 101092281 - CE-RISE.  
Views and opinions expressed are those of the author(s) only and do not necessarily reflect those of the European Union or the granting authority (HADEA). Neither the European Union nor the granting authority can be held responsible for them.

(c) 2026 CE-RISE consortium.  
Licensed under the [European Union Public Licence v1.2 (EUPL-1.2)](LICENSE).  
Attribution: CE-RISE project (Grant Agreement No. 101092281) and the individual authors/partners as indicated.

<a href="https://www.nilu.com" target="_blank" rel="noopener noreferrer">
  <img src="https://nilu.no/wp-content/uploads/2023/12/nilu-logo-seagreen-rgb-300px.png" alt="NILU logo" height="20"/>
</a>

Developed by NILU (Riccardo Boero - ribo@nilu.no) within the CE-RISE project.

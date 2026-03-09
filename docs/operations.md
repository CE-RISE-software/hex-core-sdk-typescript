# TypeScript SDK Operations

Generated from `crates/api/src/openapi.json`.

## listModels

- Method: `GET`
- Path: `/models`
- Summary: List available model versions
- Description: Returns model/version pairs currently loaded in the active registry index.

## validateModelPayload

- Method: `POST`
- Path: `/models/{model}/versions/{version}:validate`
- Summary: Validate payload against model rules
- Description: Runs configured validators for the selected model/version and returns a merged validation report.

## createRecord

- Method: `POST`
- Path: `/models/{model}/versions/{version}:create`
- Summary: Validate and create a record
- Description: Validates input payload and writes a new record through the configured record store adapter.

## queryRecords

- Method: `POST`
- Path: `/models/{model}/versions/{version}:query`
- Summary: Query records for a model version
- Description: Applies a filter object and returns matching records provided by the record store adapter.

## health

- Method: `GET`
- Path: `/admin/health`
- Summary: Liveness probe
- Description: Returns service process liveness.

## ready

- Method: `GET`
- Path: `/admin/ready`
- Summary: Readiness probe
- Description: Returns readiness based on runtime adapter and registry state.

## status

- Method: `GET`
- Path: `/admin/status`
- Summary: Runtime status
- Description: Returns runtime status payload useful for operations dashboards.

## metrics

- Method: `GET`
- Path: `/admin/metrics`
- Summary: Prometheus metrics
- Description: Returns Prometheus exposition format when metrics are enabled.

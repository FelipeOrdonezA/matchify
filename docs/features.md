## FEATURES

### Create, read, update, delete accounts

Se debe permitir al usuario crear cuentas
- La cuenta debe ser unica por compañia segun el codigo
- los demás datos son opcionales
- No se puede eliminar cuentas si ya tiene movimiento relacionados

### Import movements

Se debe permitir la importacion de movimiento de tipo bank o account

- El movimiento es unico por compañía, tipo, fecha (YYYY-MM-DD) y valor
- Todo movimiento debe estar asociado a una cuenta existente
- La improtación se hará desde un archivo .xls o .xlsx y debe cumplir con un template
- Se debe implementar validaciones para evitar duplicidad de información

### Reconcilations

### Reports


### KPI

#### End point
DOMAIN ACCOUNTS

- POST /api/accounts
- GET /api/accounts
- PATCH /api/accounts/:account_id
- DELETE /api/accounts/:account_id

DOMAIN MOVEMENTS

- POST /api/movements/import
- GET /api/movements/?start_date=&end_date=&account_id
- PATCH /api/movements/:movement_id
- POST /api/movements/reconciliation
- PATCH /api/movements/reconciliation/:reconcilation_id/cancelled
- DELETE /api/movements/:movement_id

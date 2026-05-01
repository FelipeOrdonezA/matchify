# Matchify

## Description

Matchify is a bank reconciliation system designed to match bank transactions with accounting records.

The system supports multi-tenant architecture, allowing multiple companies to manage their financial reconciliation independently.

---

## Purpose

The goal of Matchify is to:

- Simplify bank reconciliation processes
- Ensure data consistency between bank and accounting records
- Provide a scalable and structured financial matching system

---

## Core Concept

Matchify allows users to:

- Import bank movements
- Register accounting movements
- Create reconciliations
- Match transactions between both sources

---

## Data Model

The system is based on the following main entities:

### Tenants
Represents companies using the system.

### Users
Users belong to a tenant and interact with the system.

### Accounts
Bank or accounting accounts defined per tenant.

### Bank Movements
Transactions imported from bank statements.

### Accounting Movements
Transactions recorded in the accounting system.

### Reconciliations
Represents a reconciliation process between bank and accounting data.

### Reconciliation Lines
Detailed records linking movements to a reconciliation.

---

## Relationships

- A tenant has many users, accounts, and movements
- An account has many bank and accounting movements
- A reconciliation contains multiple lines
- Each line references either a bank movement or an accounting movement

---

## Key Features (Planned)

- Multi-tenant support
- Transaction matching (1:1, 1:N, N:N)
- Reconciliation tracking
- Status management (pending, reconciled, canceled)
- Audit fields (created_by, updated_by)

---

## Current Status

✔ Database design completed  
- Backend implementation in progress  
- API design  
- User interface  

---

## Tech Stack (Planned)

- Database: MySQL
- Backend: (to be defined)
- Frontend: (to be defined)

---

## 👤 Author

Felipe Ordoñez Arbelaez

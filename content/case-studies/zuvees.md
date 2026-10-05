---
name: Zuvees
industry: Quick commerce · Dubai
problem: 60-minute gift delivery needed inventory synced across hubs and marketplaces.
build: A custom order management system integrated with Shopify, a WMS, Talabat and Instashop, plus an AI gift advisor.
tags:
  - Shopify
  - Node.js
  - AI
  - Integrations
result: Unified inventory and order operations
screen: Order management · fulfilment view
order: 2
---

## The problem

A 60-minute gift delivery operation needed inventory and orders to stay aligned across hubs, its storefront, warehouse tooling, and third-party marketplaces.

## What we built

NST Studio built a custom order management system connected to Shopify, a warehouse management system, Talabat, and Instashop. The product also includes an AI gift advisor.

```mermaid
flowchart LR
  Shopify --> OMS[Order management system]
  Talabat --> OMS
  Instashop --> OMS
  OMS <--> WMS[Warehouse management system]
  Advisor[AI gift advisor] --> OMS
  OMS --> Hubs[Fulfilment hubs]
```

## Integration coverage

| System | Role |
| --- | --- |
| Shopify | Storefront orders |
| WMS | Inventory and warehouse operations |
| Talabat | Marketplace orders |
| Instashop | Marketplace orders |
| AI gift advisor | Assisted product discovery |

<aside class="callout">
  <strong>Publication note</strong>
  <p>Detailed performance and operational metrics will be added after client confirmation.</p>
</aside>

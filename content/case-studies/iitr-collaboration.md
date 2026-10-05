---
name: IITR collaboration
industry: Public sector
problem: Welfare scheme information was scattered across sources and hard to access.
build: A central searchable portal with automated data collection for underserved communities.
tags:
  - Django
  - Puppeteer
  - AWS
  - Docker
result: One searchable source for scheme information
screen: Welfare portal · search results
order: 4
---

## The problem

Welfare scheme information was spread across different sources. That made relevant support harder to discover for underserved communities.

## What we built

In collaboration with IITR, NST Studio built a central searchable portal supported by automated data collection.

```mermaid
flowchart TD
  Sources[Public information sources] --> Collector[Automated collection]
  Collector --> Review[Validation workflow]
  Review --> Index[(Search index)]
  Index --> Portal[Searchable portal]
  Portal --> Communities[Community access]
```

## Platform components

- Django application layer
- Puppeteer-based collection workflows
- Docker-based deployment
- AWS infrastructure

> Publication details and outcome metrics will be expanded after partner confirmation.

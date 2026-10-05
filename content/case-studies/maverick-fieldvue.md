---
name: Maverick / FieldVue
industry: AI · Field services
problem: Painting contractors measured surfaces by hand, making quotes slow and inconsistent.
build: An AI estimation platform using computer vision, with contractor overrides and replayable, auditable quotes.
tags:
  - Vertex AI
  - EventBridge
  - Microservices
  - Mobile
result: Repeatable estimates with human review
screen: AI estimator · audit trail
order: 3
---

## The problem

Painting contractors measured surfaces manually. The process slowed quoting and introduced inconsistent estimates.

## What we built

NST Studio built an AI estimation platform using computer vision. Contractors can review and override results, and every quote remains replayable and auditable.

```mermaid
sequenceDiagram
  participant C as Contractor
  participant M as Mobile app
  participant V as Vision service
  participant Q as Quote engine
  C->>M: Capture site data
  M->>V: Submit measurement request
  V->>Q: Return estimate
  Q-->>M: Draft auditable quote
  C->>M: Review or override
  M->>Q: Save final decision
```

## Product principles

1. AI proposes an estimate.
2. A contractor remains in control.
3. Inputs and overrides stay attached to the quote.
4. A quote can be replayed for review.

<details>
  <summary>Why human review is built in</summary>

  Field conditions vary. The workflow keeps the contractor as the final decision-maker while preserving the AI output and any subsequent override.
</details>

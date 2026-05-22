![version](https://img.shields.io/github/package-json/v/alessandrocurcu/template-ts)

GitHub Template Repo per veloci protipi in TypeScript

Puoi usarlo con
`pnpm dlx degit alessandrocurcu/template-ts nome-nuovo-progetto`

oppure

- Vai su `github.com/alessandrocurcu/template-ts`
- Clicca **"Use this template"**
- Crea la nuova repo
- `git clone` della nuova repo

## Runtime TypeScript

Questo template usa il type stripping nativo di Node.js (≥ 24) — niente `tsx` o compilazione.

```bash
node src/index.ts
```

**Vincoli** da rispettare per compatibilità con il type stripping:

- Usa `import type` per importare solo tipi
- No `enum` → usa `const` object + `as const`
- No `namespace`
- No constructor parameter properties (`constructor(public name: string)`)

## Circa la regola eslint erasableSyntaxOnly introdotta in TypeScript 5.8
erasableSyntaxOnly: true va aggiunto atsconfig.json. Questo template usa usa Node.js 24 con type stripping nativo — che supporta solo sintassi erasable. Senza questa flag, TypeScript non ti avverte se usi enum, namespace o constructor parameter properties, e il codice si rompe a runtime silenziosamente.

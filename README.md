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

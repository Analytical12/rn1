# Domínio — preparação (não executado)

Host principal: **https://www.carlagerhard.com**
Variante sem www: `carlagerhard.com` → redirecionamento permanente para o host principal, com caminho e query string.

Nada foi alterado em DNS, nameservers, e-mail, Vercel ou `.com.br`.

## Estado observado em 27/09/2026

| Item | Valor observado | Fonte |
|---|---|---|
| Nameservers de `carlagerhard.com` | `athena.dns-parking.com`, `apollo.dns-parking.com` (Hostinger) | `dig NS` |
| `carlagerhard.com` (apex) | `A 2.57.91.91` → página "Parked Domain" da Hostinger em HTTP; HTTPS não responde | `dig A`, `curl` |
| `www.carlagerhard.com` | `CNAME f14b64883b8388ca.vercel-dns-017.com` → site na Vercel | `dig CNAME`, cabeçalho `server: Vercel` |
| MX / TXT do apex | nenhum registro retornado | `dig MX`, `dig TXT` |
| Projeto na Vercel | `rn1` (`prj_OBz8xfarBXF8IrwEd2L3X2i6xNvy`), conta "adobecarla81-8601's projects", Git `Analytical12/rn1`, branch de produção `main` | API da Vercel (leitura, 27/09/2026) |
| `carlagerhard.com` no projeto | Já cadastrado, com redirecionamento para `www.carlagerhard.com` (código HTTP não definido); status **misconfigured** porque o A aponta para `2.57.91.91` | `/v9/projects/rn1/domains`, `/v6/domains/carlagerhard.com/config` |
| Registro recomendado pela Vercel para o apex | **A `216.198.79.1` e A `64.29.17.1`** (prioridade 1; alternativa: A `76.76.21.21`) | `/v6/domains/carlagerhard.com/config` |

## O que já está pronto no código

- `SITE_URL = "https://www.carlagerhard.com"` (`src/config/site.ts`) alimenta `metadataBase`, canonical, `og:url`, `og:image`, sitemap e robots. Conferido no HTML gerado.
- `next.config.ts` redireciona qualquer requisição com `Host: carlagerhard.com` para `https://www.carlagerhard.com/:path*` (308), preservando a query string. Testado localmente:
  - `carlagerhard.com/advento/familia?utm_source=instagram&utm_campaign=natal` → `308 https://www.carlagerhard.com/advento/familia?utm_source=instagram&utm_campaign=natal`
  - `www.carlagerhard.com/` → 200
- Esse redirecionamento só passa a valer quando o apex apontar para o projeto na Vercel.

## Passos para a pessoa com acesso ao projeto na Vercel e à Hostinger

1. **Vercel → projeto `rn1` → Settings → Domains**: `carlagerhard.com` já está cadastrado com redirecionamento para `www.carlagerhard.com`. Recomenda-se escolher o código **308 (permanente)**; hoje o campo está sem valor definido.
2. Conferir no mesmo painel o registro indicado para o apex. Em 27/09/2026 a Vercel indicava **A `216.198.79.1`** e **A `64.29.17.1`**. Se o painel mostrar outro valor no dia da mudança, vale o do painel.
3. **Hostinger → DNS de `carlagerhard.com`**: substituir somente o registro `A` do apex (`@`, hoje `2.57.91.91`) pelos registros indicados pela Vercel. Manter o CNAME do `www` (`f14b64883b8388ca.vercel-dns-017.com`).
4. Não trocar nameservers. Não apagar registros de e-mail (MX, SPF, DKIM, DMARC) se forem criados até lá; hoje não há nenhum.
5. Aguardar a propagação e conferir:

```bash
dig +short carlagerhard.com A
curl -sI "http://carlagerhard.com/nr1?teste=1"   | grep -i -E "^(HTTP|location)"
curl -sI "https://carlagerhard.com/nr1?teste=1"  | grep -i -E "^(HTTP|location)"   # 308 para https://www.carlagerhard.com/nr1?teste=1
curl -sI "https://www.carlagerhard.com/nr1"      | grep -i "^HTTP"                  # 200
```

6. No painel da Vercel, o domínio deve aparecer como "Valid Configuration" e com certificado emitido.

## Rollback

Voltar o registro `A` do apex ao valor anterior (`2.57.91.91`) na Hostinger e remover `carlagerhard.com` do projeto na Vercel. O `www` não é afetado.

## Fora do escopo desta etapa

- `carlagerhard.com.br`: ver `MIGRACAO_COM_BR.md`.

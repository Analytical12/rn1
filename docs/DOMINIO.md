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
| Projeto na Vercel | não está na conta Vercel conectada nesta sessão (time "Tech space"); provavelmente na conta de Carla | API da Vercel (leitura) |

## O que já está pronto no código

- `SITE_URL = "https://www.carlagerhard.com"` (`src/config/site.ts`) alimenta `metadataBase`, canonical, `og:url`, `og:image`, sitemap e robots. Conferido no HTML gerado.
- `next.config.ts` redireciona qualquer requisição com `Host: carlagerhard.com` para `https://www.carlagerhard.com/:path*` (308), preservando a query string. Testado localmente:
  - `carlagerhard.com/advento/familia?utm_source=instagram&utm_campaign=natal` → `308 https://www.carlagerhard.com/advento/familia?utm_source=instagram&utm_campaign=natal`
  - `www.carlagerhard.com/` → 200
- Esse redirecionamento só passa a valer quando o apex apontar para o projeto na Vercel.

## Passos para a pessoa com acesso ao projeto na Vercel e à Hostinger

1. **Vercel → projeto do site → Settings → Domains**: confirmar que `www.carlagerhard.com` é o domínio de produção. Adicionar `carlagerhard.com` e escolher **Redirect to `www.carlagerhard.com`** (308).
2. A Vercel vai exibir o registro que falta para o apex (tipo e valor). **Copiar exatamente esse valor.** Não usar IPs de documentação ou de outros projetos.
3. **Hostinger → DNS de `carlagerhard.com`**: substituir somente o registro `A` do apex (`@`, hoje `2.57.91.91`) pelo valor indicado pela Vercel. Manter o CNAME do `www`.
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

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "NR-1", href: "#nr1" },
  { label: "DRPS", href: "#drps" },
  { label: "Programas", href: "#programas" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function CTAFooter() {
  return (
    <>
      {/* CTA Final */}
      <section
        id="contato"
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #315C4B 0%, #2F7D7E 100%)",
        }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 90%, #FFFFFF 0%, transparent 40%), radial-gradient(circle at 90% 10%, #FFFFFF 0%, transparent 40%)",
          }}
        />

        <div className="max-w-content mx-auto px-6 lg:px-8 relative">
          <div className="max-w-[700px] mx-auto text-center reveal">
            <p className="text-xs font-semibold text-[#8FAF9B] uppercase tracking-widest mb-5">
              Próximo passo
            </p>
            <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-white leading-tight mb-5">
              Sua empresa está pronta para organizar a gestão dos riscos psicossociais?
            </h2>
            <p className="text-[1.05rem] text-[#DDEBE3] leading-relaxed mb-10">
              Fale conosco e entenda como estruturar o DRPS, os relatórios técnicos e os
              programas contínuos de intervenção para apoiar sua empresa.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="https://wa.me/5549991558180?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20RN1."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#315C4B] font-bold px-8 py-4 rounded-xl hover:bg-[#DDEBE3] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Falar pelo WhatsApp
              </a>
              <a
                href="mailto:nr1@e31.com.br?subject=Contato%20via%20site%20RN1"
                className="inline-flex items-center justify-center gap-2.5 bg-white/15 border border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/25 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar e-mail
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-sm text-[#DDEBE3]">
              <span className="font-semibold text-white">Carla Gerhard</span>
              <span className="hidden sm:inline text-white/30">•</span>
              <a
                href="https://wa.me/5549991558180"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 (49) 99155-8180
              </a>
              <span className="hidden sm:inline text-white/30">•</span>
              <a
                href="mailto:nr1@e31.com.br"
                className="hover:text-white transition-colors"
              >
                nr1@e31.com.br
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2A2E] py-10">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <p className="text-xl font-extrabold text-white mb-2">RN1</p>
              <p className="text-sm text-[#8FAF9B] font-medium mb-4">
                Implementação da NR-1 e riscos psicossociais
              </p>
              <p className="text-xs text-[#6A7A7E] leading-relaxed">
                Carla Gerhard — Psicanalista e Implementadora da NR-1
              </p>
            </div>

            {/* Nav */}
            <div>
              <p className="text-xs font-semibold text-[#6A7A7E] uppercase tracking-widest mb-4">
                Navegação
              </p>
              <div className="flex flex-col gap-2.5">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#9AABB0] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold text-[#6A7A7E] uppercase tracking-widest mb-4">
                Contato
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/5549991558180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-[#9AABB0] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  +55 (49) 99155-8180
                </a>
                <a
                  href="mailto:nr1@e31.com.br"
                  className="flex items-center gap-2.5 text-sm text-[#9AABB0] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  nr1@e31.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#2E3E44] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-[#5A6A70]" suppressHydrationWarning>
              © {new Date().getFullYear()} RN1 — Carla Gerhard
            </p>
            <p className="text-xs text-[#5A6A70] max-w-sm text-right leading-relaxed">
              Conteúdo informativo. Não substitui análise técnica individualizada da
              realidade da empresa.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

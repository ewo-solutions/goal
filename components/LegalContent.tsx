type LegalBlock = {
  paragraphs?: string[];
  list?: string[];
  /** Paragraphs to render after the bullet list */
  after?: string[];
};

export type LegalSection = LegalBlock & {
  heading: string;
  /**
   * Sub-headed blocks rendered after the section's own copy. The Terms &
   * Conditions use these for the named sub-parts of a section (e.g. "Third-Party
   * Costs" inside "Payment, Charges, and General Lien"), which the source
   * document sets out under their own titles rather than as separate sections.
   */
  groups?: (LegalBlock & { subheading?: string })[];
};

export default function LegalContent({
  updated,
  intro,
  sections,
}: {
  updated: string;
  intro?: string[];
  sections: LegalSection[];
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[900px] px-6 py-16 lg:py-[100px]">
        <p className="text-[14px] font-light text-black/60">Last updated: {updated}</p>
        {/* Left translatable on purpose — a non-English visitor needs this
         * notice in their own language even though the legal text below it
         * (wrapped in .notranslate) is deliberately excluded from machine
         * translation. See TRANSLATION.md. */}
        <p className="mt-2 text-[13px] font-light italic text-black/50">
          This page is available in English only. The English text is the
          official, legally governing version — please contact us if you
          would like help understanding it in another language.
        </p>

        {/* translate="no" / .notranslate: legal text isn't run through the
         * site's machine-translation widget — see TRANSLATION.md. */}
        <div className="notranslate" translate="no">
          {intro && (
            <div className="mt-6 space-y-4 text-[16px] font-light leading-[30px] text-black text-pretty">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-[20px] font-bold leading-[1.3] text-goal-navy lg:text-[24px]">
                  {section.heading}
                </h2>
                <Block block={section} />
                {section.groups?.map((group, i) => (
                  <div key={group.subheading ?? i} className="mt-8">
                    {group.subheading && (
                      <h3 className="text-[17px] font-bold leading-[1.3] text-goal-navy lg:text-[19px]">
                        {group.subheading}
                      </h3>
                    )}
                    <Block block={group} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ block }: { block: LegalBlock }) {
  return (
    <>
      {block.paragraphs && (
        <div className="mt-4 space-y-4 text-[16px] font-light leading-[30px] text-black text-pretty">
          {block.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
      {block.list && (
        <ul className="mt-4 space-y-2">
          {block.list.map((item, i) => (
            <li key={i} className="flex gap-3 text-[16px] font-light leading-[26px] text-black text-pretty">
              <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-goal-red" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      )}
      {block.after && (
        <div className="mt-4 space-y-4 text-[16px] font-light leading-[30px] text-black text-pretty">
          {block.after.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
    </>
  );
}

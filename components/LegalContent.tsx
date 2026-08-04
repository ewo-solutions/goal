export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Paragraphs to render after the bullet list */
  after?: string[];
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
              {section.paragraphs && (
                <div className="mt-4 space-y-4 text-[16px] font-light leading-[30px] text-black text-pretty">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[16px] font-light leading-[26px] text-black text-pretty">
                      <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-goal-red" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.after && (
                <div className="mt-4 space-y-4 text-[16px] font-light leading-[30px] text-black text-pretty">
                  {section.after.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Shared data + render helpers
   Branding, links and colors live in config.js. Edit that file, not this one.
   Peptide content (the library) is below.
   ============================================ */

/* Teal line icons per category — no colored emoji */
const CAT_ICONS = {
  weight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"/><path d="M5 6h14l-2.2 4.5a5 5 0 0 1-9.6 0L5 6z"/><path d="M8 21h8"/><path d="M12 15v6"/></svg>`,
  muscle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c2-1 3-1 5 0"/><path d="M16 6c3 1 5 3 5 6s-2 5-5 6c-2 .6-4 0-5-1-2-2-2-4-4-4.5"/><path d="M11 17c-2 0-3-1-3-3s1-3 3-3"/></svg>`,
  gh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3c0 4 10 5 10 9s-10 5-10 9"/><path d="M17 3c0 4-10 5-10 9s10 5 10 9"/><path d="M8.5 7h7M8.5 17h7M10 5h4M10 19h4"/></svg>`,
  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0-2 5c0 2 1.5 3 3 3a2.5 2.5 0 0 0 5 0c1.5 0 3-1 3-3a3 3 0 0 0-2-5 3 3 0 0 0-3-3z"/><path d="M12 5v14"/></svg>`,
  energy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>`,
  skin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 3.9 4.2.5-3.1 2.9.9 4.2L12 12.8 8.2 14.4l.9-4.2L6 7.3l4.2-.5L12 3z"/><circle cx="12" cy="12" r="9" opacity="0.25"/></svg>`,
  sexual: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.5-9.5-8.5C1 9.5 2.5 6 6 6c2 0 3.2 1.1 6 3.6C14.8 7.1 16 6 18 6c3.5 0 5 3.5 3.5 6.5C19 16.5 12 21 12 21z"/></svg>`,
  immunity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>`,
  hormonal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10z"/></svg>`,
};

/* Categories */
const CATEGORIES = {
  weight:  { name: "Weight & Metabolism", color: "var(--c-weight)", wash: "#F7EBE2", desc: "Appetite, metabolism, and body composition support." },
  muscle:  { name: "Muscle & Recovery",   color: "var(--c-muscle)", wash: "#F6E6DE", desc: "Tissue repair, healing, and recovery." },
  gh:      { name: "Growth & Anti-Aging", color: "var(--c-gh)",     wash: "#E9ECF6", desc: "Growth hormone support and cellular aging." },
  brain:   { name: "Brain & Mood",        color: "var(--c-brain)",  wash: "#EEEAF6", desc: "Focus, calm, sleep, and cognition." },
  energy:  { name: "Energy & Longevity",  color: "var(--c-energy)", wash: "#F7F0DC", desc: "Cellular energy, vitality, and healthy aging." },
  skin:    { name: "Skin & Wellness",     color: "var(--c-skin)",   wash: "#E5F3F1", desc: "Skin quality, brightness, and overall wellness." },
  immunity:{ name: "Immune Support",      color: "var(--c-immunity)", wash: "#E7F2EB", desc: "Immune balance, defense, and resilience." },
  sexual:  { name: "Sexual Health",       color: "var(--c-sexual)", wash: "#F6E8EF", desc: "Desire, arousal, and intimacy support." },
  hormonal:{ name: "Hormonal Support",    color: "var(--c-hormonal)", wash: "#F3EBDD", desc: "Fertility and natural hormone production support." },
};

/* Peptides. Each entry is one library page. Keep the tone educational and impersonal. */
const PEPTIDES = [
  {
    slug: "tirzepatide", name: "Tirzepatide", cat: "weight",
    presets: [{label:"Starting",dose:"2.5",unit:"mg"},{label:"Common",dose:"5",unit:"mg"},{label:"Higher",dose:"7.5",unit:"mg"}], recon: {mg:"10", ml:"1"},
    short: "A dual-hormone metabolic support compound studied for appetite and blood sugar.",
    lede: "Tirzepatide works on two hunger-and-blood-sugar pathways at once, which is why it has drawn so much attention for metabolism and appetite.",
    body: [
      "Tirzepatide activates two receptors, GLP-1 and GIP, that together help regulate appetite, slow how quickly the stomach empties, and support healthy blood sugar. Working on both pathways is what sets it apart from single-pathway compounds.",
      "It influences appetite signaling in the brain, so many people describe a noticeable quieting of food cravings and a feeling of fullness that arrives sooner and lasts longer."
    ],
    benefits: ["Appetite and craving support", "Blood sugar regulation", "Slowed gastric emptying", "Body composition support"],
    side: "Most commonly reported are digestive: nausea, reduced appetite, and occasional stomach upset, especially when starting or increasing. These often ease as the body adjusts. Starting low and going slow is the pattern most reference sheets describe. Sheets also say to avoid it with a personal or family history of thyroid cancer, during pregnancy, or with type 1 diabetes.",
    cycleNote: "Reference sheets show one shot every 7 days, on the same day each week. If you have never used a GLP peptide, the starting dose is 2.5 mg. If you used one before for at least a month, some sheets start at 5 mg. Stay on each dose for at least 4 weeks before going up, and only go up if you need to. The top of the chart is 15 mg. There is no on and off cycle for this one.",
    specs: { "Common vial sizes": "10 / 30 / 60 mg", "Reconstitution": "1 ml bac water (10 mg vial)", "Dose range": "2.5 to 15 mg per week" }
  },
  {
    slug: "retatrutide", name: "Retatrutide", cat: "weight",
    presets: [{label:"Starting",dose:"2",unit:"mg"},{label:"Common",dose:"4",unit:"mg"},{label:"Higher",dose:"8",unit:"mg"}], recon: {mg:"10", ml:"1"},
    short: "A triple-pathway metabolic compound studied for significant weight support.",
    lede: "Retatrutide adds a third pathway to the metabolic picture, which is why early research has generated so much interest.",
    body: [
      "Retatrutide is a triple agonist, acting on GLP-1, GIP, and glucagon receptors. GLP-1 reduces appetite, GIP supports insulin and lipid handling, and glucagon activation is associated with fat oxidation and thermogenesis.",
      "In published phase 2 research, participants saw substantial reductions in body weight, along with improvements in liver fat and insulin sensitivity. It represents a newer frontier in metabolic compounds."
    ],
    benefits: ["Significant weight support", "Metabolic rate support", "Liver fat reduction", "Blood sugar control"],
    side: "As with other compounds in this family, digestive effects are most common and tend to track with dose. Supplier sheets emphasize slow titration to find a comfortable level over time.",
    cycleNote: "Reference sheets show one shot every 7 days, on the same day each week. If you have never used a GLP peptide, start at 2 mg. If you used one before and went up at least one step, start at 4 mg. Stay on each dose for at least 4 weeks, then go up by 2 mg only if you need to. The top of the chart is 12 mg, and not everyone needs it. Cycling is not required, but some sheets suggest 4 months on and 4 months off. Some people split the weekly amount into two smaller shots to keep levels steadier and ease stomach effects. The weekly total is what matters.",
    specs: { "Common vial sizes": "10 / 30 / 40 / 60 mg", "Reconstitution": "1 ml bac water (10 mg vial)", "Dose range": "2 to 12 mg per week" }
  },
  {
    slug: "cagrilintide", name: "Cagrilintide", cat: "weight",
    presets: [{label:"Starting",dose:"200",unit:"mcg"},{label:"Common",dose:"1.2",unit:"mg"},{label:"Higher",dose:"2.7",unit:"mg"}], recon: {mg:"10", ml:"2"},
    short: "A long-acting amylin analog studied for appetite and satiety.",
    lede: "Cagrilintide works through the amylin pathway, a different route to fullness that pairs well with GLP-1 compounds.",
    body: [
      "Cagrilintide mimics amylin, a hormone released alongside insulin that signals fullness and slows gastric emptying. Working through a distinct pathway, it has been explored both on its own and combined with GLP-1 compounds.",
      "Reported effects center on reduced appetite between meals and stronger satiety signals."
    ],
    benefits: ["Appetite suppression", "Reduced cravings", "Gastric slowing", "Blood sugar support"],
    side: "Digestive effects are the most commonly noted: nausea, constipation, heartburn, and loose stools. Sheets also list redness or hives at the shot site, headache, tiredness, and rarely gallstones. Supplier sheets describe weekly dosing with gradual increases as needed.",
    cycleNote: "This one starts very low. Reference sheets show 200 mcg in week 1, 400 mcg in week 2, 750 mcg in week 3, then 1.2 mg, 1.7 mg, 2.2 mg, and 2.7 mg in weeks 7 and 8. Take it once a week, on the same day. Stop after 8 weeks and take 4 to 8 weeks off. Many sheets cap continuous use at 12 weeks, because the body can start making antibodies against it and it stops working as well. Drink plenty of water during the cycle.",
    specs: { "Common vial size": "10 mg", "Reconstitution": "2 ml bac water", "Dose range": "200 mcg to 2.7 mg per week" }
  },
  {
    slug: "eloralintide", name: "Eloralintide", cat: "weight",
    presets: [{label:"Starting",dose:"1",unit:"mg"},{label:"Common",dose:"3",unit:"mg"},{label:"Higher",dose:"6",unit:"mg"}], recon: {mg:"10", ml:"1"},
    short: "A selective amylin receptor agonist studied for appetite and weight support.",
    lede: "Eloralintide works on the amylin receptor alone, a newer and more targeted take on the fullness pathway.",
    body: [
      "Eloralintide is an investigational amylin receptor agonist. Amylin is the hormone released with insulin that tells the brain you are full, slows how fast the stomach empties, and helps steady blood sugar after a meal. Unlike older amylin analogs, it is built to act selectively on the amylin receptor.",
      "In phase 2 research, participants were studied on fixed once-weekly doses of 1, 3, 6, and 9 mg over 48 weeks. Reported effects center on reduced appetite, stronger fullness between meals, and weight loss that increased with dose."
    ],
    benefits: ["Appetite suppression", "Longer fullness after meals", "Weight support", "Blood sugar support"],
    side: "Digestive effects are the most commonly noted in this family: nausea, constipation, and reduced appetite that can feel like too much early on. This compound is still investigational, so there is less real-world data than for cagrilintide or the GLP-1 peptides. Start low and move up slowly.",
    cycleNote: "Reference sheets show one shot every 7 days, on the same day each week. The research arms used fixed weekly doses of 1 mg, 3 mg, 6 mg, and 9 mg. A common approach is to start at 1 mg, stay there for at least 4 weeks, and move up a step only if you need to. The top of the chart is 9 mg. The research ran 48 weeks straight, so there is no set on and off cycle. With a 10 mg vial in 1 ml of water, 1 mg is 10 units on a U-100 syringe, 3 mg is 30 units, 6 mg is 60 units, and 9 mg is 90 units.",
    specs: { "Common vial size": "10 mg", "Reconstitution": "1 ml bac water", "Dose range": "1 to 9 mg per week" }
  },
  {
    slug: "bpc-157", name: "BPC-157", cat: "muscle",
    presets: [{label:"Starting",dose:"250",unit:"mcg"},{label:"Common",dose:"500",unit:"mcg"},{label:"Higher",dose:"750",unit:"mcg"}], recon: {mg:"10", ml:"2.5"},
    short: "A body-protection compound widely discussed for tissue repair and gut health.",
    lede: "BPC-157 is one of the most talked-about recovery compounds, studied for how it supports healing and the gut lining.",
    body: [
      "BPC-157 is associated with angiogenesis, the formation of new blood vessels, which helps deliver nutrients and oxygen to tissue. It is also linked to growth-factor signaling involved in repairing tendons, ligaments, muscle, and the gut lining.",
      "People reach for it most often around soft-tissue recovery and digestive support. Note: most evidence comes from animal studies and personal reports rather than large human trials."
    ],
    benefits: ["Tissue and tendon repair", "Gut lining support", "Improved blood flow to injury", "Reduced inflammation"],
    side: "Generally described as well tolerated in reference sheets. Mild effects listed include nausea, dizziness, headache, tiredness, and redness at the shot site. Sheets say to skip it during pregnancy or with kidney disease, cancer, an autoimmune condition, or heart disease. As always, this is educational information rather than a safety guarantee.",
    cycleNote: "Reference sheets start low and step up. Week 1 is 250 mcg, weeks 2 to 4 are 500 mcg, and weeks 5 to 8 are 750 mcg, taken once or twice a day. Inject near the injury, or into the belly. Most sheets show 5 days on and 2 days off, then a break of 4 to 6 weeks after an 8 to 10 week run. Oral capsules run 250 to 1000 mcg a day for 4 to 8 weeks, with 2 to 4 weeks off.",
    specs: { "Common vial sizes": "10 / 20 mg + 500 mcg oral caps", "Reconstitution": "2.5 ml bac water", "Typical dose": "250-750 mcg, 1 to 2 times a day" }
  },
  {
    slug: "tb-500", name: "TB-500", cat: "muscle",
    presets: [{label:"Starting",dose:"1",unit:"mg"},{label:"Common",dose:"2",unit:"mg"},{label:"Higher",dose:"2.5",unit:"mg"}], recon: {mg:"10", ml:"2"},
    short: "Thymosin Beta-4, a repair-signaling peptide for recovery.",
    lede: "TB-500 acts as a coordination signal for repair, helping cells migrate to where the body needs them.",
    body: [
      "TB-500 (Thymosin Beta-4) regulates actin, a structural protein that lets cells move, divide, and rebuild. By guiding cells toward injury and supporting new blood vessel formation, it is studied as a foundational recovery compound.",
      "It is often discussed alongside BPC-157, since the two are thought to complement each other across local and systemic repair."
    ],
    benefits: ["Soft-tissue recovery", "Reduced inflammation", "Flexibility and joint support", "Skin and wound repair"],
    side: "Reference sheets generally describe it as well tolerated, with headache, tiredness, and a brief head rush after the shot the effects most often listed. Sheets say to skip it with a clotting disorder, any cancer history, or during pregnancy.",
    cycleNote: "TB-500 is not a daily peptide on reference sheets. Week 1 is 1 mg twice a week, on two different days. Weeks 2 to 8 are 1 to 2.5 mg twice a week, moving up a little at a time only if you need to. The top end is 3 to 5 mg for the whole week, split over 2 or 3 days. The cycle is 8 weeks on, then 4 to 8 weeks off.",
    specs: { "Common vial size": "10 mg", "Reconstitution": "2 ml bac water", "Typical dose": "1-2.5 mg twice a week (max 3-5 mg per week)" }
  },
  {
    slug: "kpv", name: "KPV", cat: "muscle",
    presets: [{label:"Starting",dose:"200",unit:"mcg"},{label:"Common",dose:"500",unit:"mcg"},{label:"Higher",dose:"1000",unit:"mcg"}], recon: {mg:"10", ml:"2.5"},
    short: "A small anti-inflammatory peptide studied for gut and skin calm.",
    lede: "KPV is a tiny three-amino-acid peptide with a reputation for calming inflammation without shutting the immune system down.",
    body: [
      "KPV is a fragment of alpha-MSH with anti-inflammatory and antimicrobial properties. Rather than suppressing the immune system, it is thought to modulate it, easing excess inflammation while letting normal responses continue.",
      "It is most discussed for gut comfort and inflammatory skin conditions, and is often paired with BPC-157 for digestive support."
    ],
    benefits: ["Calms inflammation", "Gut comfort", "Skin and wound support", "Gentle, modulating action"],
    side: "Described as relatively mild in supplier sheets, with redness at the shot site, mild nausea, and headache the effects listed. Can be taken orally for gut-local effects or injected for broader support.",
    cycleNote: "Reference sheets start KPV at 200 mcg once a day. If you need more, go up by 100 mcg at a time, and stop at 1 mg. Take it every day, at the same time each day if you use it for the gut. Run 8 weeks, then take 4 to 8 weeks off. Oral capsules are 500 mcg on waking, or two a day, and work best on an empty stomach.",
    specs: { "Common vial size": "10 mg (also 500 mcg oral caps)", "Reconstitution": "2.5 ml bac water", "Typical dose": "200 mcg to start, up to 1 mg, once a day" }
  },
  {
    slug: "tesamorelin", name: "Tesamorelin", cat: "gh",
    presets: [{label:"Starting",dose:"500",unit:"mcg"},{label:"Common",dose:"1",unit:"mg"},{label:"Higher",dose:"2",unit:"mg"}], recon: {mg:"10", ml:"3"},
    short: "A growth-hormone-releasing compound studied for body composition.",
    lede: "Tesamorelin encourages the body's own growth hormone rhythm rather than replacing it.",
    body: [
      "Tesamorelin is a GHRH analog that signals the pituitary to release growth hormone naturally. This raises IGF-1, which plays a role in cellular growth, protein synthesis, and fat metabolism.",
      "Working with the body's own rhythm, it is often framed as a gentler approach than direct growth hormone, and is studied for body composition and recovery."
    ],
    benefits: ["Supports natural growth hormone", "Body composition support", "Fat metabolism", "Recovery support"],
    side: "Reference sheets note water retention as a possible effect, with the suggestion to lower and re-titrate if it occurs. Joint and muscle aches, tingling hands, headache, nausea, and a rise in blood sugar are also listed. Sheets say not to pair it with tirzepatide without medical guidance, since the two push blood sugar in opposite directions.",
    cycleNote: "Reference sheets run this one for 12 to 16 weeks, then take 4 to 8 weeks off. Short trial runs of 3 or 4 weeks will not show much, so plan for the full cycle. The standard dose is 1 mg (30 units at this mix) once a day at night, at least 90 minutes after your last meal, five days a week with two days off. Some go up to 2 mg (60 units). Some sheets mix with 0.5 ml of acetic acid first, then 2.5 ml of bac water. Plain bac water is normal practice.",
    specs: { "Common vial size": "10 mg", "Reconstitution": "3 ml bac water", "Typical dose": "1-2 mg at night, 5 days a week" }
  },
  {
    slug: "epithalon", name: "Epithalon", cat: "energy",
    presets: [{label:"Standard",dose:"5",unit:"mg"},{label:"Higher",dose:"10",unit:"mg"}], recon: {mg:"10", ml:"1"},
    short: "A longevity-focused peptide tied to sleep and cellular aging.",
    lede: "Epithalon is a longevity favorite, studied for its effects on cellular aging and deep, restorative sleep.",
    body: [
      "Epithalon is a synthetic tetrapeptide studied for activating telomerase, the enzyme that maintains the protective caps on chromosomes. It also helps regulate the pineal gland, which governs melatonin and circadian rhythm.",
      "That dual action is why people associate it with both anti-aging and noticeably deeper sleep. Effects are described as cumulative, often continuing for months after a short cycle."
    ],
    benefits: ["Cellular aging support", "Deeper sleep", "Circadian rhythm support", "Immune support"],
    cycleNote: "Supplier sheets show two ways to run a cycle. The standard way is 5 mg every night for 20 nights. The first-cycle way is 10 mg once every 4 days, for 5 shots total. Either way, the cycle is repeated 2 or 3 times a year. Take it 30 to 60 minutes before bed. A 10 mg vial holds only one or two doses, so plan on several vials for a full 20-night run, or buy the 50 mg size. One note on history: the 5 to 10 mg figure comes from work on Epithalamin, the original pineal extract, and the synthetic form may need less. Supplier sheets still list 5 to 10 mg.",
    side: "Typically run as a short cycle a couple of times per year rather than continuously, according to supplier sheets. Sheets say to skip it with active cancer or a seizure disorder. Into the muscle is the preferred route, under the skin is fine.",
    specs: { "Common vial sizes": "10 mg or 50 mg", "Reconstitution": "1 ml bac water (10 mg vial)", "Typical dose": "5-10 mg per shot" },
    sources: [
      { label: "Goncharova et al. (2003), pineal peptides and melatonin in monkeys", url: "https://pubmed.ncbi.nlm.nih.gov/14743609/" },
      { label: "Araj et al. (2025), review of Epithalamin and Epitalon", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11943447/" },
      { label: "ADDF Cognitive Vitality, Epithalamin and Epithalon for researchers", url: "https://www.alzdiscovery.org/uploads/cognitive_vitality_media/Epithalamin-and-Epithalon-Cognitive-Vitality-For-Researchers.pdf" }
    ]
  },
  {
    slug: "nad", name: "NAD+", cat: "energy",
    presets: [{label:"Starting",dose:"25",unit:"mg"},{label:"Common",dose:"50",unit:"mg"},{label:"Higher",dose:"100",unit:"mg"}], recon: {mg:"500", ml:"2.5"},
    short: "A cellular energy coenzyme tied to vitality and repair.",
    lede: "NAD+ sits at the center of how cells make energy, which is why it is so closely linked to vitality and healthy aging.",
    body: [
      "NAD+ is a coenzyme present in every living cell, essential for energy metabolism, DNA repair, and cellular signaling. Levels decline significantly with age, which is part of why people associate restoring it with renewed energy.",
      "It supports mitochondrial energy production and activates sirtuins, genes involved in longevity and repair. Many describe improvements in energy and mental clarity."
    ],
    benefits: ["Cellular energy", "Mental clarity", "DNA repair support", "Healthy aging support"],
    side: "Supplier sheets strongly emphasize starting low and titrating up slowly. Going too fast is associated with an intense flushing or tingling sensation, along with nausea, headache, or a racing heart. Sheets cap the total at about 3,000 mg a month and flag caution with blood pressure medicine, blood thinners, antidepressants, diabetes, pregnancy, and cancer. Often described as a compound that benefits from patience.",
    cycleNote: "Supplier sheets build this one up slowly. Week 1 is 25 to 50 mg, twice a week. Week 2 moves to 50 to 100 mg, still twice a week. From week 3 on, the same 50 to 100 mg is taken 4 to 7 days a week. A cycle runs up to 12 weeks, then 4 to 6 weeks off. Eating a light meal with your shot can ease the flushing. Under the skin is gentler than into the muscle.",
    nasal: {
      rows: [
        ["Dose", "20-100 mg per day (4 to 20 sprays)"],
        ["Start", "4 sprays a day, 2 to 3 days per week"],
        ["Frequency", "2 to 6 days per week"],
        ["Timing", "Morning to early afternoon"],
        ["Duration", "12 weeks on, 2 weeks off"]
      ],
      note: "Split the sprays between both nostrils. Keep the spray bottle in the fridge."
    },
    specs: { "Common vial sizes": "500 / 700 / 1000 mg", "Reconstitution": "2.5 ml bac water (500 mg vial)", "Typical dose": "25-100 mg per shot" }
  },
  {
    slug: "glutathione", name: "Glutathione", cat: "skin",
    presets: [{label:"Gentle start",dose:"50",unit:"mg"},{label:"Standard",dose:"100",unit:"mg"},{label:"Clinic range",dose:"200",unit:"mg"}], recon: {mg:"1500", ml:"7"},
    short: "The body's master antioxidant, studied for detox and skin.",
    lede: "Glutathione is often called the body's master antioxidant, present in every cell and tied to detox and skin brightness.",
    body: [
      "Glutathione is a tripeptide that neutralizes free radicals, supports liver detoxification, and maintains cellular health. Levels decline with age, which is associated with rising oxidative stress.",
      "Injectable forms bypass digestive breakdown for higher availability. People associate it with energy, recovery, skin tone, and liver support."
    ],
    benefits: ["Antioxidant support", "Detoxification", "Skin brightness", "Immune and liver support"],
    side: "Supplier sheets note injection can sting, and list gas, loose stools, flushing, and some weight gain. Skin may lighten at higher doses. Alcohol and tobacco use up glutathione, so sheets suggest skipping both during a cycle. Educational information only.",
    cycleNote: "Supplier sheets keep this one short. The listed amount is 100 mg once a day, 6 days a week, for 4 weeks. Then take 4 weeks off. The sheet mixes a 1500 mg vial with 7 ml of water, which makes 100 mg equal to 46 units on the syringe. It is given into the muscle rather than under the skin. The 200 mg amount is common in clinics but is not on the supplier sheet.",
    specs: { "Common vial size": "1500 mg", "Reconstitution": "7 ml bac water", "Typical dose": "100 mg once a day, 6 days a week (into the muscle)" }
  },
  {
    slug: "ghk-cu", name: "GHK-Cu", cat: "skin",
    presets: [{label:"Starting",dose:"1",unit:"mg"},{label:"Common",dose:"1.5",unit:"mg"},{label:"Higher",dose:"2",unit:"mg"}], recon: {mg:"100", ml:"5"},
    short: "A copper peptide studied for skin firmness and repair.",
    lede: "GHK-Cu is the skin peptide people talk about most, a copper-binding compound tied to collagen and firmness.",
    body: [
      "GHK-Cu is a naturally occurring copper peptide that declines sharply with age. It is studied for stimulating collagen, supporting wound healing, and acting as an antioxidant.",
      "At the genetic level it is associated with shifting skin toward a more youthful pattern. Reported effects include firmer skin, fewer fine lines, and improved hair and nail health."
    ],
    benefits: ["Collagen support", "Skin firmness", "Wound healing", "Hair and nail support"],
    side: "Supplier sheets caution against running copper peptides too high. It can sting on injection, and early redness, itching, or a small knot at the shot site comes from the copper and usually fades. Signs of too much copper (headache, fever, nausea, vomiting, dark stool, or yellowing skin or eyes) mean stop and get checked. If shots are not tolerated, the vial can be mixed into a face cream instead.",
    tipNote: "<b>On the sting.</b> GHK-Cu is known to sting on injection. Common ways people reduce it: mix with more BAC water (5 ml or more per 100 mg vial), add 20 or more units of extra water to the syringe after drawing your dose, use a 1/2 inch needle so it goes a little deeper, and let the filled syringe sit out for 20 to 30 minutes so it reaches room temperature. Change spots each day. Some also pair zinc in the morning with GHK-Cu at night to keep copper and zinc in balance.",
    cycleNote: "Supplier sheets start at 1 mg once a day, which is 5 units when a 100 mg vial is mixed with 5 ml of water. After a couple of weeks, some move up to 2 mg (10 units). Run it 4 to 12 weeks, then rest 4 to 12 weeks. Night is the preferred time, but any time works. Some cycle 5 days on, 2 days off, while others take no days off. A few pimples near the start are common and should clear up on their own.",
    specs: { "Common vial size": "100 mg", "Reconstitution": "5 ml bac water", "Typical dose": "1-2 mg daily" }
  },
  {
    slug: "dsip", name: "DSIP", cat: "brain",
    presets: [{label:"Starting",dose:"100",unit:"mcg"},{label:"Common",dose:"200",unit:"mcg"},{label:"Higher",dose:"500",unit:"mcg"}], recon: {mg:"5", ml:"2.5"},
    short: "Delta Sleep-Inducing Peptide, studied for sleep and stress.",
    lede: "DSIP is studied for supporting the body's natural sleep architecture rather than forcing sedation.",
    body: [
      "DSIP is a naturally occurring neuropeptide that modulates sleep-wake cycles and stress responses. It is associated with promoting deep, slow-wave sleep, the stage tied to physical recovery and memory.",
      "Unlike traditional sleep aids, reference sheets describe it as non-sedating in the groggy sense, working with circadian rhythm. Some note vivid dreams."
    ],
    benefits: ["Deeper sleep", "Stress reduction", "Mood support", "Cortisol normalization"],
    side: "Side effects are rare on reference sheets: headache, dizziness, low blood pressure, ringing ears. Vivid dreams are a common community note. Do not combine with sleep medicines, alcohol, or other sedatives. Do not use with ACE inhibitor blood pressure drugs. Use care stacking with melatonin or magnesium.",
    cycleNote: "Reference sheets dose DSIP every night, 30 minutes to an hour before bed, for 8 to 12 weeks, then take 4 to 8 weeks off. Week one is 100 mcg (5 units at this mix). Week two is 200 mcg (10 units). After that, go up by 100 mcg only if you need more to keep the benefit. Most people land between 200 and 500 mcg.",
    specs: { "Common vial size": "5 mg", "Reconstitution": "2.5 ml bac water", "Dose units": "mcg" }
  },
  {
    slug: "semax", name: "Semax", cat: "brain",
    presets: [{label:"Starting",dose:"330",unit:"mcg"},{label:"Common",dose:"500",unit:"mcg"},{label:"Higher",dose:"1000",unit:"mcg"}], recon: {mg:"10", ml:"3"},
    short: "A focus-and-clarity peptide studied for cognition.",
    lede: "Semax is studied for focus, mental clarity, and protecting the brain under stress.",
    body: [
      "Semax is derived from a fragment of ACTH and studied for neuroprotective and cognitive-enhancing effects. It is associated with raising BDNF, a factor tied to learning, memory, and new neural connections.",
      "People reach for it around focus, mental clarity, and resilience under stress."
    ],
    benefits: ["Focus and clarity", "Memory support", "Mood regulation", "Neuroprotection"],
    side: "Reference sheets list headache, mild dizziness, and redness at the shot site. It can be stimulating, so people with anxiety, panic, or bipolar history should use care and stop if agitation or trouble sleeping shows up. Cycled use is the norm.",
    cycleNote: "Reference sheets run Semax for 6 to 8 weeks, then rest 6 to 8 weeks. Dose once a day in the morning, five to seven days a week. Weeks 1 and 2 are 10 to 15 units (about 330 to 500 mcg at this mix). Weeks 3 and 4 are 15 units (500 mcg). Weeks 5 to 8 are 30 units (1,000 mcg). If you feel wired or cannot sleep, drop back a step.",
    // optional nasal card shown on the peptide page; rows render like spec rows
    nasal: {
      rows: [
        ["Dose", "200-500 mcg per dose (2 to 5 sprays); up to 1,000 mcg"],
        ["Frequency", "1 to 3 times per day"],
        ["Timing", "Morning to early evening"],
        ["Administration", "Intranasal spray, split between both nostrils"],
        ["Duration", "4-6 weeks on, then 2-4 weeks off"],
        ["Spray prep: vial size", "10 mg"],
        ["Spray prep: sterile saline", "10 ml"],
        ["Per spray", "100 mcg (0.1 ml)"],
        ["Yield", "100 sprays per vial"]
      ],
      note: "For nasal use, mix with sterile saline, not bac water. A standard nasal sprayer delivers about 0.1 ml per spray. Keep the sprayer in the fridge. No need to fast."
    },
    specs: { "Common vial sizes": "5 mg or 10 mg", "Reconstitution": "1.5 ml bac water for 5 mg; 3 ml for 10 mg", "Dose units": "mcg" }
  },
  {
    slug: "selank", name: "Selank", cat: "brain",
    presets: [{label:"Starting",dose:"250",unit:"mcg"},{label:"Common",dose:"300",unit:"mcg"},{label:"Higher",dose:"500",unit:"mcg"}], recon: {mg:"10", ml:"2"},
    short: "A calm-and-anti-anxiety peptide that keeps alertness.",
    lede: "Selank is studied for calm and reduced anxiety without the sedation or dependency of traditional options.",
    body: [
      "Selank is a synthetic peptide studied for anxiolytic and neuroprotective effects. It is associated with balancing serotonin and dopamine and supporting the factors behind synaptic health.",
      "What people find appealing is calm that arrives without drowsiness, distinguishing it from traditional anti-anxiety approaches."
    ],
    benefits: ["Calm without sedation", "Stress resilience", "Mood support", "Cognitive support"],
    side: "Reference sheets describe it as non-sedating and not habit-forming. Sinus irritation (nasal use), tiredness, nausea, and headache are the effects listed.",
    cycleNote: "Reference sheets run Selank for 4 to 6 weeks, then take 2 to 4 weeks off. For focus, take 250 to 300 mcg (5 to 6 units at this mix) once in the morning on an empty stomach. For anxiety, take it twice a day, morning and afternoon, and stay between 250 and 500 mcg per dose. Use the lowest amount that works. It pairs well with Semax.",
    // optional nasal card shown on the peptide page; rows render like spec rows
    nasal: {
      rows: [
        ["Dose", "100-300 mcg per dose (1 to 3 sprays)"],
        ["Frequency", "2-3 times daily"],
        ["Low plan", "100-200 mcg, 2 to 3 times a day"],
        ["Standard plan", "200-300 mcg, 3 times a day"],
        ["Timing", "Morning to early evening"],
        ["Short cycle", "10-14 days, for acute stress or specific events"],
        ["Standard cycle", "4-6 weeks, for general anxiety or cognitive support"],
        ["Break between cycles", "2-4 weeks"],
        ["Per spray", "100 mcg (0.1 ml); 10 mg in 10 ml saline"]
      ],
      note: "The 10-14 day run mirrors the Russian clinical protocol; 4-6 weeks is what reference sheets show. No tapering needed when stopping. No need to fast for nasal use."
    },
    specs: { "Common vial size": "10 mg", "Reconstitution": "2 ml bac water", "Dose units": "mcg" }
  },
  {
    slug: "glow", name: "GLOW", cat: "skin",
    presets: [{label:"Starting",dose:"1.4",unit:"mg"},{label:"Common",dose:"2.1",unit:"mg"},{label:"Higher",dose:"2.8",unit:"mg"}], recon: {mg:"70", ml:"2.5"},
    short: "A three-peptide blend for skin, recovery, and aesthetic repair.",
    lede: "GLOW combines three repair peptides into one, with a focus on skin firmness alongside tissue recovery.",
    body: [
      "GLOW is a blend of BPC-157, TB-500, and GHK-Cu. BPC-157 and TB-500 cover broad tissue repair and recovery, while GHK-Cu is the aesthetic driver, associated with collagen, skin firmness, and a more youthful skin pattern.",
      "It is reached for by people who want recovery support and visible skin benefits in one protocol."
    ],
    benefits: ["Skin firmness", "Tissue repair", "Wrinkle support", "Collagen support", "Calms inflammation"],
    side: "Supplier sheets note copper should not run too high, so they cap the daily amount. It can sting on injection. Stop and get checked if you see hives, swelling, or trouble breathing.",
    cycleNote: "This blend is dosed by its copper peptide. Supplier sheets mix the 70 mg vial with 2.5 ml of water and draw 5 to 10 units a day, which is 1 to 2 mg of GHK-Cu per shot. Start at 5 units. Run it every day for 6 to 12 weeks, then rest 6 to 12 weeks. To take the sting out, add 20 or more units of water to the syringe after drawing your dose, rub the spot for a minute, and use a new spot each day.",
    specs: { "Blend": "BPC-157 10 mg + TB-500 10 mg + GHK-Cu 50 mg", "Common vial size": "70 mg total", "Reconstitution": "2.5 ml bac water", "Typical dose": "5-10 units a day (1-2 mg GHK-Cu)" }
  },
  {
    slug: "klow", name: "KLOW", cat: "skin",
    presets: [{label:"Starting",dose:"1.6",unit:"mg"},{label:"Common",dose:"2.4",unit:"mg"},{label:"Higher",dose:"3.2",unit:"mg"}], recon: {mg:"80", ml:"10"},
    short: "A four-peptide blend: GLOW plus KPV for added calm.",
    lede: "KLOW is GLOW with KPV added, bringing an extra anti-inflammatory pathway to the same skin-and-recovery focus.",
    body: [
      "KLOW combines four peptides: GHK-Cu, BPC-157, TB-500, and KPV. The first three mirror GLOW for tissue repair and skin support, while KPV adds anti-inflammatory and gut-calming properties.",
      "The blend appears faintly blue from the copper in GHK-Cu, and is studied for tissue repair, skin, and inflammation pathways together. Reported uses extend to skin quality, scarring, and hair thickness alongside recovery."
    ],
    benefits: ["Skin regeneration", "Tissue repair", "Calms inflammation", "Collagen support", "Hair support"],
    side: "As with GLOW, supplier sheets caution against running copper too high. It can sting on injection. Headache, tiredness, and touchy skin for a short time are also listed. Do not use it while pregnant or nursing.",
    cycleNote: "Supplier sheets mix the 80 mg vial with 10 ml of water and draw 20 to 40 units once a day. That gives 1.6 to 3.2 mg of the blend per shot, or about 1 to 2 mg of GHK-Cu, plus a small amount of each of the other three peptides. Run it 5 to 7 days a week for 4 to 6 weeks, then take 4 to 6 weeks off. This is a shorter cycle than GLOW.",
    specs: { "Blend": "BPC-157 10 mg + TB-500 10 mg + GHK-Cu 50 mg + KPV 10 mg", "Common vial size": "80 mg total", "Reconstitution": "10 ml bac water", "Typical dose": "20-40 units a day (1.6-3.2 mg blend, up to 2 mg GHK-Cu)" }
  },

  /* ---- Added 2026-06-21: researched library expansion (drafts to verify) ---- */

  {
    slug: "semaglutide", name: "Semaglutide", cat: "weight",
    presets: [{label:"Starting",dose:"0.25",unit:"mg"},{label:"Common",dose:"1",unit:"mg"},{label:"Higher",dose:"2.4",unit:"mg"}], recon: {mg:"10", ml:"2"},
    short: "A GLP-1 peptide studied for appetite and weight.",
    lede: "Semaglutide is the GLP-1 peptide people hear about most, studied for appetite, blood sugar, and weight management.",
    body: ["Semaglutide is a GLP-1 receptor agonist, meaning it mimics a gut hormone the body releases after eating. It's studied for slowing how fast the stomach empties, lowering appetite, and supporting blood sugar control, which together tend to reduce food intake over time.","Supplier reference sheets commonly show a slow titration, starting low and stepping up every few weeks to let the body adjust. Dosing is weekly rather than daily, and the slow ramp is meant to ease the nausea that often comes with starting too high."],
    benefits: ["Appetite reduction", "Weight management support", "Blood sugar support", "Slower stomach emptying"],
    side: "Nausea, reflux, and constipation are the most commonly reported effects, usually worst right after a dose increase. Supplier sheets stress titrating up slowly rather than jumping to higher doses. Sheets also say to avoid it with a personal or family history of thyroid cancer, a history of pancreatitis or gallbladder disease, or during pregnancy.",
    cycleNote: "Reference sheets show one shot every 7 days, on the same day each week. Start at 0.25 mg. Stay on each dose for at least 4 weeks before going up by 0.25 mg. If you tend to get nausea, taking the dose before bed can help. There is no on and off cycle for this one. Most people who stop regain weight, so plan for the long term.",
    specs: { "Common vial sizes": "5 mg or 10 mg", "Reconstitution": "5 mg + 1 ml, or 10 mg + 2 ml", "Typical dose": "0.25-2.4 mg per week" }
  },
  {
    slug: "aod-9604", name: "AOD-9604", cat: "weight",
    presets: [{label:"Twice a day",dose:"250",unit:"mcg"},{label:"Once a day",dose:"300",unit:"mcg"}], recon: {mg:"5", ml:"2.5"},
    short: "An HGH fragment studied for fat metabolism without the hormone effects.",
    lede: "AOD-9604 is a growth hormone fragment studied for fat metabolism without the broader effects of full growth hormone.",
    body: ["AOD-9604 is a small piece of the human growth hormone molecule, specifically the tail end tied to fat breakdown. Researchers looked at it to see whether the fat-metabolism part of growth hormone could work on its own, without the muscle-building, blood sugar, and IGF-1 effects of the full hormone.","Supplier reference sheets commonly show a daily subcutaneous dose, often run for several weeks at a time. It's described as appetite-neutral, so it isn't associated with the hunger changes seen with GLP-1 peptides."],
    benefits: ["Fat metabolism support", "Appetite-neutral profile", "No IGF-1 spike reported", "Targets stubborn fat areas"],
    side: "Mild injection-site reactions are the most commonly noted effect. Sheets also list headache, a racing heart, chest tightness, and dizziness, and warn against stacking it with stimulants. Human data is limited, so supplier sheets frame it as research-stage.",
    cycleNote: "Reference sheets show two plans. For general use, take 300 mcg once a day in the morning on an empty stomach, for 20 days, then take 10 days off. For fat loss, take 250 mcg twice a day, once right after waking and once at least 1.5 hours after dinner, for 90 days, then 30 days off. Try to stay fasted for 3 to 4 hours after each shot. This peptide can turn to gel in the vial, so some sheets suggest keeping a small bottle of acetic acid solution on hand to fix that.",
    specs: { "Common vial size": "5 mg", "Reconstitution": "2.5 ml bac water", "Typical dose": "300 mcg once a day, or 250 mcg twice a day" }
  },
  {
    slug: "mots-c", name: "MOTS-c", cat: "weight",
    presets: [{label:"Every 3 days",dose:"3",unit:"mg"},{label:"Every 5 days",dose:"5",unit:"mg"}], recon: {mg:"10", ml:"2"},
    short: "A mitochondrial peptide studied for energy and metabolism.",
    lede: "MOTS-c is a mitochondrial-derived peptide studied for how cells handle energy and metabolic stress.",
    body: ["MOTS-c is a 16-amino-acid peptide the mitochondria make on their own. It's studied as a signal that tells cells how to handle energy during stress, exercise, and aging, with its most studied effect being activation of AMPK, a key energy switch inside cells.","Supplier reference sheets commonly show 3 mg every 3 days or 5 mg every 5 days, run for 8 to 10 weeks with 4 to 5 weeks off. Native MOTS-c has no completed human clinical trials, so the numbers on supplier charts come from research planning rather than approved protocols."],
    benefits: ["Metabolic support", "AMPK activation", "Exercise and endurance research", "Mitochondrial energy support"],
    side: "Reported effects are generally mild, with muscle cramping the one most often named, though human safety data is limited. Sheets warn that very high doses or long use may stress the body and throw off thyroid and cortisol rhythms. Vial sizes vary a lot, so supplier sheets warn against copying dose numbers from a chart that doesn't match your vial.",
    cycleNote: "Reference sheets show two simple plans. Plan one: 5 mg every 5 days. Plan two: 3 mg every 3 days. Both add up to about 7 mg a week. Run either plan for 8 to 10 weeks, then take 4 to 5 weeks off. Take it first thing in the morning on an empty stomach, or 30 to 60 minutes before a workout. Some sheets suggest 10 to 14 days of SS-31 before you start. Do not take more than the plan calls for.",
    specs: { "Common vial sizes": "10 / 20 / 40 mg", "Reconstitution": "2 ml bac water (10 mg vial)", "Typical dose": "3 mg every 3 days, or 5 mg every 5 days" }
  },
  {
    slug: "5-amino-1mq", name: "5-Amino-1MQ", cat: "weight",
    short: "An oral NNMT blocker studied for fat metabolism and NAD+.",
    lede: "5-Amino-1MQ is an oral compound studied for blocking NNMT, an enzyme tied to fat storage and metabolism.",
    body: ["5-Amino-1MQ is a small molecule that inhibits NNMT, an enzyme involved in how fat cells store energy and use nicotinamide. By blocking NNMT, it's studied for raising intracellular NAD+ availability, which is associated with fat metabolism, blood sugar regulation, and metabolic flexibility.","Unlike most items in this library, it's taken orally as a capsule, so there's no reconstitution or injection involved. In preclinical research it's been investigated for reversing diet-induced obesity and lowering plasma cholesterol, though human data is still limited."],
    benefits: ["Fat metabolism support", "NAD+ support", "Blood sugar support", "Oral, no injection"],
    side: "Human safety data is limited, so supplier sheets commonly suggest cycling: 4 to 8 weeks on, then 2 to 4 weeks off. Trouble sleeping, restlessness, and a faster heart rate are the effects most often listed, which is why sheets say nothing after mid-afternoon. It is flagged against use with liver problems, so a baseline liver check is a sensible step. It comes as capsules, so no mixing is needed.",
    cycleNote: "This one is a pill, so there is nothing to mix. Reference sheets show three plans: 1 pill (50 mg) once a day, 2 pills (100 mg) split morning and afternoon, or 3 pills (150 mg) split into three doses. Take the last dose by mid-afternoon so it does not keep you up. Taking it on an empty stomach may curb appetite more. Run it every day for 4 to 8 weeks, then take 2 to 4 weeks off.",
    specs: { "Form": "Oral capsule (no mixing)", "Common size": "50 mg capsules", "Typical dose": "50-150 mg per day, split into 1 to 3 doses" }
  },
  {
    slug: "bpc-tb-blend", name: "BPC-157 / TB-500 Blend", cat: "muscle",
    // Blend doses are entered as TOTAL blend mg so the calculator math works out.
    // 0.5 mg total = 250 mcg of each peptide = 10 units at the standard 10 mg / 2 ml mix.
    presets: [{label:"Starting (300 mcg of each)",dose:"0.6",unit:"mg"},{label:"Common (400 mcg of each)",dose:"0.8",unit:"mg"},{label:"Higher (500 mcg of each)",dose:"1",unit:"mg"}], recon: {mg:"10", ml:"2"},
    short: "A repair-focused blend studied for recovery and soft-tissue healing.",
    lede: "The BPC-157/TB-500 blend is studied for tissue repair, pairing two recovery peptides in one vial.",
    body: ["This blend combines BPC-157, a stable fragment studied for gut and connective-tissue repair, with TB-500, a thymosin beta-4 fragment studied for cell migration and healing. The two are often grouped together in research because they're thought to support recovery through different pathways. A standard vial holds 5 mg of each peptide, for 10 mg total.","Supplier reference sheets commonly show 2 ml of bac water added to the vial, which gives 250 mcg of each peptide per 10 units on an insulin syringe. On those sheets the dose for each peptide tends to land around 300 to 500 mcg per day, meaning 12 to 20 units, injected subcutaneously once daily at any time of day with no fasting required. Runs of 8 weeks with 4 to 8 weeks off are typical, and reconstituted vials are usually kept refrigerated and used within four to six weeks."],
    benefits: ["Soft-tissue recovery", "Connective-tissue repair", "Healing support", "Gut lining support"],
    side: "Human data is limited and these are not approved drugs. Both can sting on injection, and reactions at the injection site are the most commonly noted caution. The cautions for each peptide apply here too: skip it with a cancer history, an autoimmune condition, a clotting disorder, or during pregnancy.",
    cycleNote: "Reference sheets run this blend for 8 weeks, then rest 4 to 8 weeks. The standard plan is a lower dose for weeks 1 and 2, then a step up for weeks 3 to 8. Take it once a day at any time, with or without food. Oral capsules (500 mcg of each) are one a day, or one in the morning and one at night, for 6 to 8 weeks.",
    specs: { "Blend": "5 mg BPC-157 + 5 mg TB-500", "Common vial size": "10 mg total", "Reconstitution": "2 ml bac water", "Concentration": "250 mcg of each per 10 units", "Typical dose": "300-500 mcg of each, once daily", "Injection": "Subcutaneous or IM, 12-20 units" }
  },
  {
    slug: "ara-290", name: "ARA-290", cat: "muscle",
    presets: [{label:"Starting",dose:"2",unit:"mg"},{label:"Common",dose:"3",unit:"mg"},{label:"Higher",dose:"4",unit:"mg"}], recon: {mg:"16", ml:"1.5"},
    short: "An EPO-derived peptide studied for nerve repair and inflammation.",
    lede: "ARA-290 is studied for nerve pain and tissue protection, working through a repair receptor rather than red blood cell production.",
    body: ["ARA-290, also called cibinetide, is an 11-amino-acid peptide derived from a section of erythropoietin. It's designed to activate what researchers call the innate repair receptor, which is tied to anti-inflammatory and tissue-protective effects. Unlike EPO itself, it isn't thought to raise red blood cell counts.","Most of the published work centers on small-fiber neuropathy and conditions like sarcoidosis. A dose-ranging trial compared 1 mg, 4 mg, and 8 mg given daily for 28 days. Supplier reference sheets commonly show a 16 mg vial mixed with 1.5 ml of bac water, with daily doses of 2 to 4 mg."],
    benefits: ["Nerve repair support", "Anti-inflammatory action", "Tissue protection", "Neuropathic pain research"],
    side: "ARA-290 has been through Phase 2 trials but isn't FDA approved. It's dosed in milligrams rather than micrograms, so reading the vial size carefully matters before any dilution math. Sheets flag it with diabetes medicine (low blood sugar) and blood thinners, so talk to your doctor first if you take either.",
    cycleNote: "Reference sheets show 2, 3, or 4 mg once a day, every day. Pick a run of 4, 8, or 12 weeks, then rest for half that time (2, 4, or 6 weeks). An 8 mg dose exists on some sheets, but only for 4 weeks at most.",
    specs: { "Common vial size": "16 mg", "Reconstitution": "1.5 ml bac water", "Typical dose": "2-4 mg once daily" }
  },
  {
    slug: "igf-1-lr3", name: "IGF-1 LR3", cat: "muscle",
    presets: [{label:"Starting",dose:"33",unit:"mcg"},{label:"Common",dose:"75",unit:"mcg"},{label:"Higher",dose:"100",unit:"mcg"}], recon: {mg:"1", ml:"2.5", diluent:"0.6% acetic acid"},
    short: "A long-acting IGF-1 analog studied for muscle growth and recovery.",
    lede: "IGF-1 LR3 is a modified, longer-lasting form of IGF-1 studied for muscle hypertrophy and tissue recovery.",
    body: ["IGF-1 LR3 is a synthetic analog of insulin-like growth factor 1, altered so it stays active in the body far longer than natural IGF-1. It binds IGF-1 receptors on muscle and other tissue, driving protein synthesis and cell proliferation. Research describes it activating satellite cells, which are tied to both muscle fiber growth and new fiber formation.","Its long half-life, often cited at 20 to 30 hours, is why reference sheets show once-daily dosing. Supplier sheets commonly show a 1 mg vial reconstituted with 2.5 ml of 0.6% acetic acid rather than bac water, giving 400 mcg/ml. Daily doses on those sheets step up from 33 mcg toward 100 mcg, with the higher end flagged as carrying more risk."],
    benefits: ["Muscle growth support", "Recovery support", "Satellite cell activation", "Strength research"],
    side: "Reported concerns include low blood sugar, insulin resistance over time, heart rhythm changes, and tissue overgrowth. Reference material treats it as unsuitable for anyone with a cancer history, diabetes, or active growth plates. The rule on sheets is as low a dose as possible, for as short a time as possible.",
    cycleNote: "Reference sheets mix this one with 0.6% acetic acid, not bac water, so it does not break down early. The dose steps up over 8 weeks: 33 mcg in week 1, 50 mcg in week 2, 75 mcg in weeks 3 and 4, and 100 mcg in weeks 5 to 8. Take it once a day right after you train, then eat carbs and protein. Do not take it at bedtime or on an empty stomach. Rest 4 to 8 weeks after each run.",
    specs: { "Common vial size": "1 mg", "Reconstitution": "2.5 ml of 0.6% acetic acid (not bac water)", "Typical dose": "33-100 mcg once daily, right after training" }
  },
  {
    slug: "follistatin-344", name: "Follistatin 344", cat: "muscle",
    presets: [{label:"Starting",dose:"100",unit:"mcg"},{label:"Common",dose:"200",unit:"mcg"},{label:"Higher",dose:"300",unit:"mcg"}], recon: {mg:"1", ml:"2"},
    short: "A myostatin-blocking protein studied for muscle growth.",
    lede: "Follistatin 344 is studied for muscle growth through its role as a natural blocker of myostatin.",
    body: ["Follistatin 344 is a naturally occurring protein that acts as an antagonist to myostatin, the signal that limits how much skeletal muscle the body builds. By binding myostatin, it's studied for its potential to release that brake and allow more muscle growth. It's one of several follistatin variants, distinguished by its amino acid length.","It has a short plasma half-life, often cited around 3 to 4 hours, which is why reference sheets favor daily dosing over larger, less frequent doses. Supplier sheets commonly show a 1 mg vial reconstituted with 2 ml of bac water, giving 500 mcg/ml, with daily doses of 100 to 300 mcg run in short cycles followed by time off. Human data is limited."],
    benefits: ["Muscle growth support", "Myostatin inhibition", "Lean mass research", "Recovery interest"],
    side: "Human research is sparse, so protocols lean on community use and extrapolation rather than trials. As a recombinant protein it's sensitive to handling, and freeze-thaw cycles after mixing are commonly cautioned against.",
    cycleNote: "Follistatin runs in short bursts, not long cycles. The most common plan is 100 mcg once a day for 10 days, which uses one 1 mg vial. Some people go up to 200 or 300 mcg a day, but they still stop within a month. After a run, rest at least 4 weeks. Mix it gently and never freeze and thaw it after mixing.",
    specs: { "Common vial size": "1 mg", "Reconstitution": "2 ml bac water", "Typical dose": "100-300 mcg daily in short cycles" }
  },
  {
    slug: "ipamorelin", name: "Ipamorelin", cat: "gh",
    presets: [{label:"Starting",dose:"100",unit:"mcg"},{label:"Common",dose:"200",unit:"mcg"},{label:"Higher",dose:"300",unit:"mcg"}], recon: {mg:"10", ml:"3"},
    short: "A selective GH secretagogue studied for sleep and recovery.",
    lede: "Ipamorelin is studied for prompting the body's own growth hormone release without raising cortisol or prolactin.",
    body: ["Ipamorelin is a synthetic pentapeptide that activates the ghrelin receptor to trigger a pulse of growth hormone from the pituitary. It's known for being selective, meaning supplier sheets describe little effect on cortisol or prolactin compared with older secretagogues. Its half-life is short, around two hours, so it's often dosed before bed to line up with the natural overnight GH pulse.","Reference sheets commonly cite 100 to 300 mcg per dose, one to three times daily, with many starting at 100 mcg to assess tolerance. Reported effects include deeper sleep, faster recovery, and gradual body recomposition rather than rapid muscle gain. Mild water retention in the first few weeks is the most frequently mentioned note."],
    benefits: ["Sleep quality", "Recovery support", "Lean mass support", "Low cortisol impact"],
    side: "Most commonly noted are mild water retention in the first few weeks, more hunger, flushing, drowsiness, occasional headaches, and irritation at the injection site. Inject slowly, since a fast push can cause a hot, prickly feeling. It is not FDA-approved and is sold for research-reference use only.",
    cycleNote: "Reference sheets start everyone at 100 mcg (3 units at this mix) once a day at bedtime on an empty stomach, and hold there until it feels fine. From there the range is 100 to 300 mcg per dose. Once a day is the wellness plan. Twice a day adds a dose on waking, and three times a day adds one after your workout. Run 8 to 12 weeks, then take 4 to 6 weeks off.",
    specs: { "Common vial size": "10 mg", "Reconstitution": "3 ml bac water", "Typical dose": "100-300 mcg at bedtime, fasted" }
  },
  {
    slug: "cjc-1295", name: "CJC-1295 (No DAC)", cat: "gh",
    presets: [{label:"Starting",dose:"100",unit:"mcg"},{label:"Common",dose:"200",unit:"mcg"},{label:"Higher",dose:"300",unit:"mcg"}], recon: {mg:"5", ml:"2"},
    short: "A short-acting GHRH analog studied for GH pulses.",
    lede: "CJC-1295 (No DAC) is studied for producing a short, natural-style burst of growth hormone through the GHRH pathway.",
    body: ["CJC-1295 without DAC, also called Mod GRF 1-29, is a modified copy of the body's own growth-hormone-releasing hormone. It signals the pituitary to release a brief pulse of GH and then clears quickly, in roughly 30 minutes, which is why it's often paired with a ghrelin-style peptide. Without the DAC attachment, it does not build up a long-lasting blood level, so it mimics the body's natural rhythm more closely.","Supplier reference sheets commonly show 100 to 300 mcg per injection, one to three times daily, usually in a fasted window for a cleaner GH response. Many run a five-days-on, two-days-off pattern to limit receptor desensitization. It is not FDA-approved and is described in research-reference terms only."],
    benefits: ["GH pulse support", "Pairs with Ipamorelin", "Short natural-style action", "Recovery support"],
    side: "Reported notes include injection-site irritation, occasional flushing, early water retention, more appetite, mild tiredness after a dose, and a need to dose on an empty stomach for best effect. It is not FDA-approved and is sold for research-reference use only.",
    cycleNote: "Reference sheets run CJC-1295 for 12 weeks, then rest 6 to 12 weeks. Take it on an empty stomach, 2 to 3 hours after your last meal, since food blunts the growth hormone pulse. The gentle plan is 100 mcg once a day for the first month, then 150 to 200 mcg. Twice-daily plans step from 100 to 200 to 300 mcg per dose over the cycle. Water retention early on is common. Drink water and consider magnesium.",
    specs: { "Common vial size": "5 mg (reference sheets use 10 mg)", "Reconstitution": "2 ml bac water", "Typical dose": "100-300 mcg, fasted" }
  },
  {
    slug: "ipamorelin-cjc-1295", name: "Ipamorelin / CJC-1295 Blend", cat: "gh",
    // Blend doses are entered as TOTAL blend mcg so the calculator math works out.
    // 500 mcg total = 250 mcg of each peptide = 10 units at the standard 10 mg / 2 ml mix.
    presets: [{label:"Starting (100 mcg of each)",dose:"200",unit:"mcg"},{label:"Common (250 mcg of each)",dose:"500",unit:"mcg"},{label:"Higher (300 mcg of each)",dose:"600",unit:"mcg"}], recon: {mg:"10", ml:"2"},
    short: "A popular GH blend studied for recovery and sleep.",
    lede: "The Ipamorelin / CJC-1295 blend is studied for combining two pathways that prompt a stronger, more natural growth hormone pulse.",
    body: ["This blend pairs Ipamorelin, a selective ghrelin-receptor peptide, with CJC-1295 (No DAC), a short-acting GHRH analog. Reference sheets describe the two as complementary: one tells the pituitary to release GH while the other amplifies the size of that pulse. Vials are typically sold as a 10 mg total blend, a 5 mg and 5 mg split of each peptide, reconstituted with 2 ml of bac water. That mix gives 250 mcg of each peptide per 10 units on an insulin syringe, and at 250 mcg of each per day one vial lasts about 20 days.","Dose figures on supplier sheets usually refer to each peptide, commonly 100 to 300 mcg of each, once daily, fasted, meaning at least 2 hours after eating. Before bed on an empty stomach is the most common window, since it lines up with the natural overnight GH pulse. A common pattern is to start near 100 mcg of each, titrate up over several weeks, and run 12 to 16 weeks followed by 8 to 16 weeks off. It is not FDA-approved and is described in research-reference terms only."],
    benefits: ["Combined GH pathways", "Sleep quality", "Recovery support", "Body recomposition support"],
    side: "Notes mirror the individual peptides: mild early water retention and bloating, more hunger, tiredness after a dose, possible flushing or headaches, and injection-site irritation. Inject slowly. Sheets flag caution with blood sugar and thyroid conditions. It is not FDA-approved and is sold for research-reference use only.",
    cycleNote: "Reference sheets run this blend for 12 to 16 weeks, then take a long break of 8 to 16 weeks. Dose once a day right before bed on an empty stomach, at least 2 hours after your last meal. Start around 100 mcg of each peptide and work up to about 300 mcg of each over the cycle. Some bloating and water weight in the first weeks is normal. Magnesium and water help.",
    specs: { "Blend": "5 mg Ipamorelin + 5 mg CJC-1295", "Common vial size": "10 mg total", "Reconstitution": "2 ml bac water", "Concentration": "250 mcg of each per 10 units", "One vial lasts": "About 20 days at 250 mcg of each daily", "Typical dose": "250 mcg of each, once daily before bed" }
  },
  {
    slug: "tesamorelin-ipamorelin", name: "Tesamorelin / Ipamorelin Blend", cat: "gh",
    presets: [{label:"Starting (weeks 1-6)",dose:"1",unit:"mg"},{label:"Higher (week 7 on)",dose:"2",unit:"mg"}], recon: {mg:"13", ml:"3"},
    short: "A GH blend studied for visceral fat and recovery.",
    lede: "The Tesamorelin / Ipamorelin blend is studied for pairing a visceral-fat GHRH analog with a selective GH secretagogue.",
    body: ["This blend combines Tesamorelin, a GHRH analog that's FDA-approved for reducing visceral abdominal fat in HIV-associated lipodystrophy, with Ipamorelin, a selective ghrelin-receptor peptide. Supplier sheets frame the pairing as one peptide driving the GHRH side and the other adding a clean GH pulse. The reference product is a 13 mg vial, 10 mg tesamorelin plus 3 mg ipamorelin, reconstituted with 3 ml of bac water.","Reference sheets show 23 units (about 1 mg of the mix) once a day at bedtime for the first 6 weeks, then either staying there or moving up to 46 units (about 2 mg). Vendors differ on the ratio, so check your label. No published human trial has tested this exact combination as a single product, so figures are extrapolated from each peptide."],
    benefits: ["Visceral fat support", "Recovery support", "Sleep quality", "Lean mass support"],
    side: "Tesamorelin notes include joint pain, fluid retention, and injection-site reactions; Ipamorelin adds mild early water retention. It is sold as a research-reference blend, not an FDA-approved combination product.",
    cycleNote: "Reference sheets run this blend for 12 to 16 weeks, then rest 4 to 8 weeks. A short trial of a few weeks will not show much. For the first 6 weeks the dose is 23 units (about 1 mg of the mix) once a day at bedtime, five days a week with two days off. From week 7 you can stay there or move up to 46 units (about 2 mg). Take it at least 90 minutes after your last meal.",
    specs: { "Blend": "10 mg Tesamorelin + 3 mg Ipamorelin", "Common vial size": "13 mg total", "Reconstitution": "3 ml bac water", "Typical dose": "About 1 mg of the mix (23 units) at bedtime; up to 2 mg (46 units) after week 6" }
  },
  {
    slug: "p21", name: "P21", cat: "brain",
    presets: [{label:"Starting",dose:"500",unit:"mcg"},{label:"Common",dose:"1000",unit:"mcg"},{label:"Higher",dose:"1500",unit:"mcg"}], recon: {mg:"10", ml:"1"},
    short: "A CNTF-derived peptide studied for neurogenesis and memory.",
    lede: "P21 is studied for supporting neurogenesis and cognition, a small peptide modeled on ciliary neurotrophic factor.",
    body: ["P21 is a synthetic peptide designed to mimic the neurotrophic effects of CNTF while crossing the blood-brain barrier. Research has looked at its role in promoting the growth and survival of neurons, increasing dendritic spine density, and supporting synaptic plasticity.","Most of the available work comes from animal models tied to learning, memory, and neurodegeneration. Supplier reference sheets describe steady daily dosing over several weeks rather than high-dose pulses, with effects reported gradually over a four to six week window."],
    benefits: ["Neurogenesis support", "Memory and learning", "Synaptic plasticity", "Neuroprotection"],
    side: "Reported effects include injection-site irritation, mild headaches, and sleep disturbance if dosed late in the day. Long-term human safety data is limited, so sheets often suggest cycling.",
    cycleNote: "There is no supplier reference sheet for P21 in our source set, and no human dosing data. Community use is steady daily dosing, most often 500 mcg to 1 mg in the morning, for 4 to 8 weeks before a break. Dosing late in the day can disturb sleep. Start low and hold there for a week before going up.",
    specs: { "Common vial size": "10 mg", "Reconstitution": "1 ml bac water", "Typical dose": "500-1500 mcg daily" }
  },
  {
    slug: "pe-22-28", name: "PE-22-28", cat: "brain",
    presets: [{label:"Starting",dose:"100",unit:"mcg"},{label:"Common",dose:"250",unit:"mcg"},{label:"Higher",dose:"500",unit:"mcg"}], recon: {mg:"5", ml:"2"},
    short: "A spadin-derived peptide studied for mood and neuroprotection.",
    lede: "PE-22-28 is studied for mood, memory, and neuroprotection, a short fragment of spadin, which comes from the sortilin propeptide.",
    body: ["PE-22-28 is a seven amino acid fragment of spadin, itself derived from the propeptide of sortilin, that acts as a TREK-1 channel inhibitor. Animal research has connected it to rapid antidepressant-like effects, enhanced neuroplasticity, and hippocampal neurogenesis, with interest in neuroprotection after injury or stroke.","It's most often administered intranasally to take advantage of nose-to-brain delivery pathways, though subcutaneous use is also described. There's no validated human dose, so supplier sheets lean toward conservative starting amounts and cycling."],
    benefits: ["Mood support", "Neuroplasticity", "Memory support", "Neuroprotection"],
    side: "There's no human clinical dosing or safety data, so all amounts come from preclinical work and community use. Sheets suggest starting low and cycling several weeks on with a break.",
    cycleNote: "There is no supplier reference sheet for PE-22-28 in our source set and no human dosing data. Community use is small daily amounts, 100 to 500 mcg, for 2 to 4 weeks, then a break. Many people use it as a nasal spray instead of an injection. Start at the low end and hold there before going up.",
    specs: { "Common vial size": "5 mg", "Reconstitution": "2 ml bac water", "Typical dose": "100-500 mcg daily" }
  },
  {
    slug: "ss-31", name: "SS-31 (Elamipretide)", cat: "energy",
    presets: [{label:"Starting",dose:"1",unit:"mg"},{label:"Standard",dose:"5",unit:"mg"},{label:"Maximum",dose:"6",unit:"mg"}], recon: {mg:"30", ml:"2"},
    short: "A mitochondria-targeted peptide studied for cellular energy.",
    lede: "SS-31 is studied for supporting mitochondrial function and cellular energy, a tetrapeptide that binds cardiolipin.",
    body: ["SS-31, also known as elamipretide, is a synthetic four amino acid peptide that concentrates in the inner mitochondrial membrane and binds a phospholipid called cardiolipin. By stabilizing that structure under stress, it's studied for protecting the energy-making machinery of the cell and reducing oxidative damage.","It has one of the deeper research bases among newer peptides, with work spanning heart, muscle, and age-related conditions. Clinical trials have used a supervised daily injection, while supplier sheets for research use commonly show much lower amounts."],
    benefits: ["Mitochondrial support", "Cellular energy", "Antioxidant activity", "Muscle and heart research"],
    side: "Injection-site reactions are the most commonly reported effect, with stomach upset, headache, and dizziness also listed. Sheets say to skip it during pregnancy. Community amounts are far below supervised clinical trial doses, and long-term self-directed use isn't well characterized.",
    cycleNote: "Supplier sheets size this to a 30 mg vial, since a 10 mg vial only covers a few days. The gentle plan starts at 1 mg five days a week and steps up to 2, 3, then 4 mg over 12 weeks. The standard plan is 5 mg, 3 to 7 days a week, for 8 to 12 weeks. Take it in the morning before food. Rest 4 to 8 weeks between cycles. Some run 10 to 14 days of 1 mg right before a MOTS-c cycle.",
    specs: { "Common vial sizes": "30 mg or 50 mg", "Reconstitution": "2 ml bac water (30 mg vial)", "Typical dose": "1-6 mg per shot, 3 to 7 days a week" }
  },
  {
    slug: "foxo4-dri", name: "FOXO4-DRI", cat: "energy",
    presets: [{label:"Starting",dose:"1",unit:"mg"},{label:"Common",dose:"2",unit:"mg"},{label:"Higher",dose:"3",unit:"mg"}], recon: {mg:"10", ml:"1"},
    short: "A senolytic peptide studied for clearing senescent cells.",
    lede: "FOXO4-DRI is studied for clearing senescent cells, a designed peptide that disrupts the FOXO4 and p53 interaction.",
    body: ["FOXO4-DRI is a D-retro-inverso peptide built to selectively target senescent cells, sometimes called zombie cells, by interfering with the FOXO4 to p53 survival signal. In animal models this has been linked to clearing those cells and improvements in markers tied to aging.","It's typically used in short pulsed courses rather than daily, with supplier sheets describing every-other-day or a few days per cycle approaches repeated a few times a year. All dosing is extrapolated from preclinical research, since it hasn't been tested in humans."],
    benefits: ["Senescent cell clearance", "Cellular aging research", "Tissue health interest", "Short-course protocol"],
    side: "Sheets note flu-like symptoms within a day or two and pronounced injection-site soreness. It works through the p53 pathway, so common cautions include active cancer history, pregnancy, and pulmonary hypertension.",
    cycleNote: "Sources disagree on this one. The animal research used a few larger shots, every other day, then a long break. That is the pattern most community protocols follow: 1 to 3 mg every other day for 3 to 6 shots, repeated 2 or 3 times a year. One supplier sheet does something different: 250 mcg a day for 4 weeks, then 375 mcg for 4 weeks, then 500 mcg for up to 8 more weeks, followed by 4 to 8 weeks off. It has not been tested in people, so every number here is a guess built from animal work.",
    specs: { "Common vial size": "10 mg", "Reconstitution": "1 ml bac water", "Typical dose": "1-3 mg every other day, 3 to 6 shots per course" }
  },
  {
    slug: "thymosin-alpha-1", name: "Thymosin Alpha-1", cat: "immunity",
    presets: [{label:"Starting",dose:"450",unit:"mcg"},{label:"Common",dose:"1600",unit:"mcg"}], recon: {mg:"10", ml:"2"},
    short: "A thymic peptide studied for immune coordination and antiviral support.",
    lede: "Thymosin Alpha-1 is studied for tuning the immune system, with decades of clinical use as the prescription drug thymalfasin.",
    body: ["Thymosin Alpha-1 is a 28 amino acid peptide first isolated from the thymus gland. It's studied for helping the immune system respond to viruses and infections, and it has international approval as a treatment for chronic hepatitis B, hepatitis C, and as a cancer adjunct.","It's thought to work by increasing the number and activity of T cells through signaling pathways. Supplier reference sheets most often show 1.6 mg (32 units at this mix) taken two days a week, 3 to 4 days apart. Some split that into a smaller daily dose of about 450 mcg."],
    benefits: ["Immune coordination", "Antiviral support", "T-cell activity", "Long clinical track record"],
    side: "Reported effects are usually mild, such as injection-site soreness, tiredness, mild fever, muscle aches, nausea, or brief flu-like symptoms that reflect immune activation. Supplier sheets flag extra caution for people with autoimmune conditions or organ transplants.",
    cycleNote: "Reference sheets show one dose of 1.6 mg, taken two days each week with 3 to 4 days between shots. Evening is the preferred time, but morning works too. A cycle runs 4 to 24 weeks, then take a 2 to 12 week break. For a serious infection, some sheets show the same 1.6 mg dose every day for two weeks, then back to the normal schedule.",
    specs: { "Common vial size": "10 mg", "Reconstitution": "2 ml bac water", "Typical dose": "1.6 mg two days a week, 3 to 4 days apart" }
  },
  {
    slug: "vip", name: "VIP", cat: "immunity",
    presets: [{label:"Starting",dose:"100",unit:"mcg"},{label:"Common",dose:"150",unit:"mcg"},{label:"Higher",dose:"200",unit:"mcg"}], recon: {mg:"10", ml:"2.5"},
    short: "An anti-inflammatory peptide studied for CIRS and respiratory support.",
    lede: "VIP is studied for calming inflammation and is best known in protocols for chronic inflammatory response syndrome and mold illness.",
    body: ["VIP, vasoactive intestinal peptide, is a naturally occurring signaling peptide with anti-inflammatory, vasodilatory, and immune-balancing effects. It's most often discussed as an intranasal spray in the CIRS protocol, where it's studied for normalizing inflammatory markers like TGF-beta1, MMP-9, and VEGF.","Supplier reference sheets commonly show intranasal dosing of about 50 mcg per spray, up to four times daily, with subcutaneous protocols running 100 to 200 mcg once a day, five days a week, on an empty stomach. The amounts below are expressed per administration to match a spray or injection."],
    benefits: ["Anti-inflammatory action", "Respiratory and vasodilatory support", "Immune balance", "Inflammatory marker support"],
    side: "The main caution is low blood pressure, which can show up as dizziness or lightheadedness, especially at higher doses. Flushing, headache, nausea, loose stools, and nasal irritation are also reported, and it's flagged against use with blood-pressure-lowering medications. Reference sheets also say to skip it during an active infection, an autoimmune flare, or pregnancy.",
    cycleNote: "Reference sheets start at 100 mcg once a day, five days a week. Step up to 150 mcg in weeks 2 and 3, then 200 mcg from week 4 on. Take it in the morning or early afternoon on an empty stomach, and drink plenty of water. An 8 week cycle is followed by a 2 to 4 week break.",
    specs: { "Common vial size": "10 mg", "Reconstitution": "2.5 ml bac water", "Typical dose": "100-200 mcg once a day, 5 days a week" }
  },
  {
    slug: "thymalin", name: "Thymalin", cat: "immunity",
    presets: [{label:"Starting",dose:"5",unit:"mg"},{label:"Common",dose:"10",unit:"mg"}], recon: {mg:"10", ml:"1"},
    short: "A thymus-derived bioregulator studied for immune restoration.",
    lede: "Thymalin is studied as a thymic peptide bioregulator, often run in short cycles for immune balance and longevity research.",
    body: ["Thymalin is a complex of peptides extracted from the thymus gland, studied as a multi-system bioregulator for immune balance, blood cell regeneration, and anti-aging signaling. It comes out of decades of gerontology research and is often grouped with the bioregulator peptides.","Supplier reference sheets commonly show a short-course pattern: 5 to 10 mg daily by subcutaneous or intramuscular injection for 5 to 10 days, making one cycle. Cycles are typically repeated a few times per year rather than run continuously."],
    benefits: ["Immune restoration", "Cyclical short-course use", "Bioregulator signaling", "Longevity research interest"],
    side: "Reported tolerability is generally good, with occasional injection-site reactions. Most reference material is based on older clinical research rather than modern controlled trials, so the evidence base is limited.",
    cycleNote: "Reference sheets show 10 mg once a day for 10 days, by a shot under the skin or into muscle. Some run 5 mg a day for 20 days instead, which adds up to the same amount. Either way, that run is one course. Wait at least a month, then repeat if needed, usually two or three times a year.",
    specs: { "Common vial size": "10 mg", "Reconstitution": "1 ml bac water", "Typical dose": "5-10 mg daily for 5-10 days per cycle" }
  },
  {
    slug: "ll-37", name: "LL-37", cat: "immunity",
    presets: [{label:"Starting",dose:"50",unit:"mcg"},{label:"Common",dose:"200",unit:"mcg"},{label:"Higher",dose:"450",unit:"mcg"}], recon: {mg:"5", ml:"2.5"},
    short: "The human cathelicidin peptide studied for defense and repair.",
    lede: "LL-37 is studied as the body's own antimicrobial peptide, tied to immune defense and wound healing.",
    body: ["LL-37 is the only human cathelicidin, a 37 amino acid peptide that the body produces as part of innate immunity. It's studied for broad antimicrobial activity against bacteria, viruses, and fungi, alongside a role in regulating inflammation through Toll-like receptor signaling.","Supplier reference sheets commonly start subcutaneous dosing at 50 mcg and climb each week toward 450 mcg over an 8 to 12 week cycle. Topical and wound-healing uses are described at higher concentrations."],
    benefits: ["Antimicrobial defense", "Wound healing support", "Innate immune signaling", "Inflammation modulation"],
    side: "Higher doses are flagged as more likely to cause side effects, so reference sheets favor starting low. As a strongly active immune peptide, it can provoke inflammatory responses, and the human research base is still early. Reference sheets say not to use it with an autoimmune condition (such as rheumatoid arthritis, lupus, MS, or psoriasis), an organ transplant, active cancer, or pregnancy.",
    cycleNote: "Reference sheets start low and climb each week: 50, 100, 150, then 200 mcg once a day for the first four weeks. Weeks 5 through 8 go 300, 350, 400, then 450 mcg, and 450 mcg holds through the end of the cycle. Dose every day for the first 4 weeks, then drop to 5 days a week. A cycle runs 8 to 12 weeks, then rest 4 to 8 weeks.",
    specs: { "Common vial size": "5 mg", "Reconstitution": "2.5 ml bac water", "Typical dose": "50 mcg to start, climbing weekly to 450 mcg" }
  },
  {
    slug: "pt-141", name: "PT-141 (Bremelanotide)", cat: "sexual",
    presets: [{label:"Starting",dose:"500",unit:"mcg"},{label:"Common",dose:"1750",unit:"mcg"},{label:"Higher",dose:"2000",unit:"mcg"}], recon: {mg:"10", ml:"5"},
    short: "A melanocortin peptide studied for sexual desire and arousal.",
    lede: "PT-141 is studied for low sexual desire, working through melanocortin receptors in the brain rather than the vascular system.",
    body: ["PT-141, also called bremelanotide, is a melanocortin receptor agonist studied for hypoactive sexual desire. It acts centrally in the brain on pathways tied to arousal, which sets it apart from blood-flow approaches. An injectable version is FDA approved for premenopausal women.","Supplier reference sheets commonly show a 10 mg vial reconstituted with 2 to 5 ml bac water, dosed subcutaneously 45 to 60 minutes before intended activity. Many sheets describe a first shot of 500 mcg only to check tolerance, with a working dose of 1.75 to 2 mg."],
    benefits: ["Sexual desire support", "Central arousal pathway", "Studied in men and women", "On-demand use"],
    side: "Nausea, flushing, and headache are the most commonly reported effects, and nausea tends to track with higher doses. Temporary rises in blood pressure are noted, so cardiovascular caution is advised. Dizziness with blurred vision is a reason to see a doctor.",
    cycleNote: "Reference sheets use a 500 mcg first shot only to check how your body handles it, not for an actual encounter. The working dose is 1.75 to 2 mg, injected 45 to 60 minutes before activity. Never take more than one shot in 24 hours or more than 8 shots in a month. Using it too often can make it stop working as well, so give it a rest between uses.",
    specs: { "Common vial size": "10 mg", "Reconstitution": "5 ml bac water", "Typical dose": "500 mcg test dose, then 1.75 to 2 mg as needed" }
  },
  {
    slug: "oxytocin", name: "Oxytocin", cat: "sexual",
    presets: [{label:"Starting",dose:"100",unit:"mcg"},{label:"Common",dose:"150",unit:"mcg"},{label:"Higher",dose:"200",unit:"mcg"}], recon: {mg:"5", ml:"2.5"},
    short: "A bonding hormone studied for connection, mood, and trust.",
    lede: "Oxytocin is studied for social bonding, mood, and intimacy, the same hormone the body releases during closeness.",
    body: ["Oxytocin is a naturally occurring hormone tied to bonding, trust, and social connection. Outside its approved obstetric use, it is researched for social cognition, anxiety, mood, and intimacy, often delivered intranasally or subcutaneously. Results are mixed, and the largest autism trial found no significant difference from placebo.","Supplier reference sheets commonly show a 5 mg vial reconstituted with 2.5 ml bac water, with subcutaneous research doses of 100 to 200 mcg once a day. The doses are tiny, so a 0.3 ml or 0.5 ml syringe makes them easier to measure. Intranasal protocols are often described in international units, where roughly 1 IU equals about 1.7 mcg."],
    benefits: ["Social bonding", "Mood support", "Sense of connection", "Stress modulation"],
    side: "Mild effects like nasal irritation, headache, or mood shifts are reported. Water intoxication with seizures is a labeled risk at high or IV doses, so pregnancy, heart disease, and low sodium warrant clinician oversight.",
    cycleNote: "Reference sheets start at 100 mcg once a day and go up to 200 mcg a day only if needed. Run it for 8 weeks, then take 4 weeks off. If you use a nasal spray instead, take it 30 to 45 minutes before the situation you want help with, up to 3 sprays a day.",
    specs: { "Common vial size": "5 mg", "Reconstitution": "2.5 ml bac water", "Typical dose": "100-200 mcg once a day (subcutaneous)" }
  },
  {
    slug: "kisspeptin", name: "Kisspeptin", cat: "sexual",
    presets: [{label:"Starting",dose:"200",unit:"mcg"},{label:"Common",dose:"300",unit:"mcg"},{label:"Higher",dose:"500",unit:"mcg"}], recon: {mg:"10", ml:"2"},
    short: "An upstream hormone signal studied for desire and reproduction.",
    lede: "Kisspeptin is studied for sexual desire and reproductive signaling, sitting at the very top of the hormone cascade.",
    body: ["Kisspeptin is a signaling peptide that triggers GnRH release, which in turn prompts LH and FSH and the downstream reproductive hormones. It has been studied for hypoactive sexual desire in men and women, hypothalamic amenorrhea, and egg maturation during IVF. Researchers find it interesting because it acts upstream rather than replacing hormones directly.","Supplier reference sheets commonly show a 10 mg vial reconstituted with 2 ml bac water, dosed subcutaneously. Described protocols start at 200 mcg every other day on an empty stomach, stepping up to 300, 400, or 500 mcg only if needed. The hormone response peaks about 45 to 60 minutes after the shot."],
    benefits: ["Sexual desire support", "Upstream hormone signaling", "Reproductive research use", "Studied in men and women"],
    side: "Short trials reported mild flushing, hot flashes, sweating, headache, dizziness, loose stools, and injection-site redness. Using it too often can blunt the signal over time, so hormone-sensitive conditions, pregnancy, and pituitary issues warrant avoidance.",
    cycleNote: "Reference sheets start at 200 mcg every other day, on an empty stomach, at any time of day. Go up only if you need to, in steps of 300, 400, then 500 mcg. Using it too often can make your body stop responding, so two shots a week is the sweet spot. Run it for 4 weeks, then take 4 weeks off.",
    specs: { "Common vial size": "10 mg", "Reconstitution": "2 ml bac water", "Typical dose": "200-500 mcg, every other day, empty stomach" }
  },
  {
    slug: "hcg", name: "HCG", cat: "hormonal",
    presets: [{label:"Lower",dose:"250",unit:"iu"},{label:"Common",dose:"500",unit:"iu"},{label:"Higher",dose:"1000",unit:"iu"}], recon: {mg:"5000", ml:"2", unit:"iu"},
    short: "A hormone studied for testicular function and fertility support.",
    lede: "HCG is studied for maintaining testicular function and fertility, mimicking LH to keep natural production active.",
    body: ["HCG, human chorionic gonadotropin, acts much like luteinizing hormone and signals the testes to keep producing testosterone and sperm. It is widely referenced alongside testosterone protocols to preserve testicular size and fertility, and in fertility settings for both men and women. It is measured in international units rather than milligrams.","Supplier reference sheets commonly show a 5000 IU vial reconstituted with 2 ml bac water, giving 2500 IU per ml. Male protocols often describe small subcutaneous doses three times per week, frequently in the 250 to 1000 IU range per injection."],
    benefits: ["Testicular function support", "Fertility support", "Preserves natural production", "Pairs with TRT protocols"],
    side: "Reported effects include estrogen rises, breast tenderness, acne, mood changes, and water retention, with blood clots a rare serious risk. Sheets say to avoid it with hormone-sensitive cancers. Dosing is individual and hormone-sensitive, so it warrants clinician oversight and lab monitoring.",
    cycleNote: "HCG lasts about 36 hours in the body, so reference sheets dose it 3 times a week, not daily. The standard plan with testosterone therapy is 500 IU three times a week for 12 weeks. A low dose that copies natural LH is 250 to 500 IU three times a week. Higher restart plans go from 1000 to 2000 IU per shot and need a doctor and lab work.",
    specs: { "Common vial sizes": "5000 iu (also 1000 iu)", "Reconstitution": "2 ml bac water", "Typical dose": "250-500 iu low dose, 500-1500 iu with TRT, 3x weekly" }
  },
  {
    slug: "hmg", name: "HMG", cat: "hormonal",
    presets: [{label:"Lower",dose:"75",unit:"iu"},{label:"Common",dose:"150",unit:"iu"},{label:"Higher",dose:"225",unit:"iu"}], recon: {mg:"225", ml:"1", unit:"iu"},
    short: "A combined FSH and LH hormone studied for fertility.",
    lede: "HMG is studied for fertility and gonadotropin support, supplying both FSH and LH activity in roughly equal measure.",
    body: ["HMG, human menopausal gonadotropin, contains follicle-stimulating hormone and luteinizing hormone in roughly a 1:1 ratio. It is studied for ovulation induction and IVF stimulation in women, and for restoring sperm production and gonadotropin signaling in men. It is measured in international units, with each research vial commonly holding 75 IU.","Supplier reference sheets commonly show 75 IU vials reconstituted with about 1 ml bac water or supplied diluent, with multiple vials sometimes combined per dose. Described ranges run from 75 to 150 IU for ovulation induction up to 150 to 300 IU for IVF stimulation, given daily over a stimulation window."],
    benefits: ["Combined FSH and LH", "Fertility support", "Ovulation induction", "Sperm production support"],
    side: "Effects can include injection-site reactions, headache, bloating, and ovarian hyperstimulation in women at higher doses. It is hormone-sensitive and dose-specific, so it warrants clinician oversight and monitoring.",
    cycleNote: "HMG comes in small 75 IU vials, and it is normal to dissolve two or three vials in the same 1 ml of water. The calculator above assumes three vials (225 IU) in 1 ml. Men who use it with HCG take 75 to 150 IU three times a week, often for many months, since sperm takes about three months to respond. Women take 75 to 300 IU every day for about 7 to 12 days while a doctor watches the ovaries. This is a prescription fertility hormone and needs lab monitoring.",
    specs: { "Common vial size": "75 iu per vial (often 2-3 vials mixed in one 1 ml)", "Reconstitution": "1 ml bac water or supplied diluent for up to 3 vials", "Typical dose": "Women 75-300 iu daily; men 75-150 iu 3x weekly" }
  },
];

/* ---------- Suggested schedules ----------
   Timing / Frequency / Duration for each peptide, keyed by slug.
   "What supplier reference sheets commonly show," not recommendations.
   To change a peptide's schedule, edit its line below. */
const SCHEDULES = {
  // Weight & Metabolism
  "tirzepatide":            { timing: "Any time of day, same day each week", frequency: "Once per week", duration: "4+ weeks on each dose, until you reach your goal" },
  "retatrutide":            { timing: "Any time of day, same day each week", frequency: "Once per week", duration: "4+ weeks on each dose, until you reach your goal" },
  "cagrilintide":           { timing: "Same day each week", frequency: "Once per week", duration: "8 weeks on, 4 to 8 weeks off" },
  "eloralintide":           { timing: "Any time of day, same day each week", frequency: "Once per week", duration: "4+ weeks on each dose, until you reach your goal" },
  "semaglutide":            { timing: "Any time. Before bed if you get nausea", frequency: "Once per week", duration: "4+ weeks on each dose, until you reach your goal" },
  "aod-9604":               { timing: "Morning, empty stomach. Stay fasted 3 to 4 hours after if you can", frequency: "Every day, 1 to 2 times a day", duration: "20 days on, 10 days off" },
  "mots-c":                 { timing: "Morning, empty stomach, or 30 to 60 minutes before a workout", frequency: "Every 3 days (3 mg) or every 5 days (5 mg)", duration: "8 to 10 weeks on, 4 to 5 weeks off" },
  "5-amino-1mq":            { timing: "Morning, or split morning and mid-afternoon. Nothing later", frequency: "Every day", duration: "4 to 8 weeks on, 2 to 4 weeks off" },
  // Muscle & Recovery
  "bpc-157":                { timing: "Any time. Inject near the injury or into the belly", frequency: "5 days on, 2 days off (or every day)", duration: "8 to 10 weeks on, 4 to 6 weeks off" },
  "tb-500":                 { timing: "Any time, no fasting needed", frequency: "Twice a week, on separate days", duration: "8 weeks on, 4 to 8 weeks off" },
  "kpv":                    { timing: "Any time. Same time each day for gut use", frequency: "Every day", duration: "8 weeks on, 4 to 8 weeks off" },
  "bpc-tb-blend":           { timing: "Any time of day, no fasting required", frequency: "Once daily", duration: "8 weeks on, 4 to 8 weeks off" },
  "ara-290":                { timing: "AM", frequency: "Every day", duration: "8 weeks on, 4 weeks off" },
  "igf-1-lr3":              { timing: "Within 30 minutes after a workout, then eat", frequency: "Every day", duration: "8 weeks on, 4 to 8 weeks off" },
  "follistatin-344":        { timing: "30 min pre-workout, or any set time", frequency: "Every day", duration: "10 days on, 4 weeks off" },
  // Growth & Anti-Aging
  "tesamorelin":            { timing: "At night, at least 90 minutes after your last meal", frequency: "5 days on, 2 days off", duration: "12 to 16 weeks on, 4 to 8 weeks off" },
  "ipamorelin":             { timing: "Bedtime, empty stomach (1.5 hours after eating)", frequency: "5 days on, 2 days off. 1 to 3 doses a day", duration: "8 to 12 weeks on, 4 to 6 weeks off" },
  "cjc-1295":               { timing: "Empty stomach, 2 to 3 hours after eating. Bedtime if once a day", frequency: "5 days on, 2 days off. 1 to 3 doses a day", duration: "12 weeks on, 6 to 12 weeks off" },
  "ipamorelin-cjc-1295":    { timing: "Before bed on an empty stomach, at least 2 hours after eating", frequency: "Once a day, 5 to 7 days a week", duration: "12 to 16 weeks on, 8 to 16 weeks off" },
  "tesamorelin-ipamorelin": { timing: "At night, at least 90 minutes after your last meal", frequency: "5 days on, 2 days off", duration: "12 to 16 weeks on, 4 to 8 weeks off" },
  // Brain & Mood
  "dsip":                   { timing: "30 minutes to 1 hour before bed", frequency: "Every day", duration: "8 to 12 weeks on, 4 to 8 weeks off" },
  "semax":                  { timing: "Morning, with or without food", frequency: "Once a day, 5 to 7 days a week", duration: "6 to 8 weeks on, 6 to 8 weeks off" },
  "selank":                 { timing: "Morning, empty stomach. For anxiety, add an afternoon dose", frequency: "Once a day for focus, twice a day for anxiety", duration: "4 to 6 weeks on, 2 to 4 weeks off" },
  "p21":                    { timing: "AM", frequency: "Every day", duration: "4 to 8 weeks on, then a break" },
  "pe-22-28":               { timing: "AM", frequency: "Every day", duration: "2 to 4 weeks on, then a break" },
  // Energy & Longevity
  "epithalon":              { timing: "30 to 60 minutes before bed", frequency: "Every day (or every 4 days for a first cycle)", duration: "20 days, 2 to 3x per year" },
  "nad":                    { timing: "AM", frequency: "2x per week to start, building to 4 to 7x per week", duration: "12 weeks on, 4 to 6 weeks off" },
  "ss-31":                  { timing: "AM, on an empty stomach", frequency: "5 days a week to start, 3 to 7 days a week later", duration: "8 to 12 weeks on, 4 to 8 weeks off" },
  "foxo4-dri":              { timing: "AM", frequency: "Every other day, 3 to 6 shots per course", duration: "Short course, 2 to 3x per year" },
  // Skin & Wellness
  "glutathione":            { timing: "AM", frequency: "Once a day, 6 days a week", duration: "4 weeks on, 4 weeks off" },
  "ghk-cu":                 { timing: "PM preferred, any time works", frequency: "Every day", duration: "4 to 12 weeks on, 4 to 12 weeks off" },
  "glow":                   { timing: "Any time, no fasting needed", frequency: "Every day", duration: "6 to 12 weeks on, 6 to 12 weeks off" },
  "klow":                   { timing: "Any time", frequency: "Once a day, 5 to 7 days a week", duration: "4 to 6 weeks on, 4 to 6 weeks off" },
  // Immune Support
  "thymosin-alpha-1":       { timing: "PM preferred, AM is fine", frequency: "2 days per week, 3 to 4 days apart", duration: "8 weeks on, 4 weeks off" },
  "vip":                    { timing: "Morning or early afternoon, empty stomach", frequency: "Once a day, 5 days a week", duration: "8 weeks on, 2 to 4 weeks off" },
  "thymalin":               { timing: "AM or PM", frequency: "Every day during the course", duration: "10 days, 2 to 3x per year" },
  "ll-37":                  { timing: "Any time of day", frequency: "Every day for weeks 1 to 4, then 5 days a week", duration: "8 to 12 weeks on, 4 to 8 weeks off" },
  // Sexual Health
  "pt-141":                 { timing: "45 to 60 minutes before activity", frequency: "As needed, never more than once in 24 hours", duration: "No cycle. Max 8 doses per month" },
  "oxytocin":               { timing: "Any time. For social or intimacy use, 30 to 45 minutes before", frequency: "Once a day", duration: "8 weeks on, 4 weeks off" },
  "kisspeptin":             { timing: "Any time of day, empty stomach", frequency: "Every other day. Twice a week is the sweet spot", duration: "4 weeks on, 4 weeks off" },
  // Hormonal Support
  "hcg":                    { timing: "AM, same days and times each week", frequency: "3x per week", duration: "12 weeks, or as needed" },
  "hmg":                    { timing: "AM", frequency: "Men: 3x per week. Women: every day", duration: "As directed by your doctor" },
};

/* ---------- Render: top nav ---------- */
function renderNav(active) {
  const links = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "library.html", label: "Peptides", key: "library" },
    { href: "about.html", label: "About", key: "about" },
  ];
  if (STORE_URL) links.push({ href: STORE_URL, label: STORE_NAV_LABEL, key: "buy", ext: true });
  return `
  <nav class="nav">
    <div class="nav-inner">
      <a class="nav-logo" href="index.html">
        <span class="nav-logo-text">${SITE_NAME}<small>${SITE_TAGLINE}</small></span>
      </a>
      <div class="nav-links">
        ${links.map(l => `<a href="${l.href}"${l.ext?' target="_blank" rel="noopener"':''}${l.key===active?' style="color:var(--ink);background:var(--line-soft)"':''}>${l.label}</a>`).join("")}
        <a class="nav-cta" href="calculator.html">Calculator</a>
        ${COMMUNITY_URL ? `<a class="nav-circle" href="${COMMUNITY_URL}" target="_blank" rel="noopener">${COMMUNITY_BUTTON} <span aria-hidden="true">+</span></a>` : ``}
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav-mobile" id="navMobile">
      ${links.map(l => `<a href="${l.href}"${l.ext?' target="_blank" rel="noopener"':''}${l.key===active?' class="active"':''}>${l.label}</a>`).join("")}
      <a class="nav-mobile-cta" href="calculator.html">Open Calculator</a>
      ${COMMUNITY_URL ? `<a class="nav-mobile-cta" href="${COMMUNITY_URL}" target="_blank" rel="noopener">${COMMUNITY_BUTTON}</a>` : ``}
    </div>
  </nav>`;
}

/* wire mobile nav toggle (called after nav is inserted) */
function initMobileNav() {
  var t=document.getElementById('navToggle'),m=document.getElementById('navMobile');
  if(t&&m&&!t.dataset.wired){
    t.dataset.wired="1";
    t.addEventListener('click',function(){
      var open=m.classList.toggle('open');
      t.classList.toggle('open',open);
      t.setAttribute('aria-expanded',open?'true':'false');
    });
  }
}
if (typeof document!=="undefined") {
  document.addEventListener('DOMContentLoaded',initMobileNav);
}

/* ---------- Render: footer ---------- */
function renderFooter() {
  return `
  <footer class="footer">
    <div class="wrap">
      <div>
        <div class="footer-brand">${SITE_NAME}</div>
        <p class="footer-fine">An education library. Built to make a confusing topic feel clear and calm.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <a href="library.html">Peptides</a>
        <a href="calculator.html">Dosage Calculator</a>
        <a href="about.html">About</a>
      </div>
      ${(COMMUNITY_URL || STORE_URL) ? `<div>
        <h4>Go further</h4>
        ${COMMUNITY_URL ? `<a class="btn btn-primary footer-btn" href="${COMMUNITY_URL}" target="_blank" rel="noopener">${COMMUNITY_BUTTON}</a>` : ``}
        ${STORE_URL ? `<a class="btn btn-ghost footer-btn" href="${STORE_URL}" target="_blank" rel="noopener">${STORE_BUTTON}</a>` : ``}
      </div>` : ``}
    </div>
    <div class="wrap"><div class="footer-legal" style="grid-column:1/-1">
      ${SITE_NAME} is for educational purposes only and is not medical advice. Nothing here is a recommendation to use any compound. Always consult your own qualified healthcare provider before making any health decision.
    </div></div>
  </footer>`;
}

/* ---------- Render: community band ----------
   Only shows if COMMUNITY_URL is set in config.js. Drop a
   <div id="communityBand"></div> on any page and call this. */
function renderCommunityBand() {
  if (!COMMUNITY_URL) return "";
  return `
  <section class="community-band">
    <div class="wrap">
      <span class="eyebrow">${COMMUNITY_EYEBROW}</span>
      <h2 class="display">${COMMUNITY_NAME}</h2>
      <p>${COMMUNITY_BLURB}</p>
      <a class="btn btn-lg community-btn" href="${COMMUNITY_URL}" target="_blank" rel="noopener">${COMMUNITY_BUTTON}</a>
    </div>
  </section>`;
}

/* ---------- Render: store band ----------
   Only shows if STORE_URL is set in config.js. */
function renderVendorBand() {
  if (!STORE_URL || typeof STORE_BUTTONS_ON_CONTENT === "undefined" || !STORE_BUTTONS_ON_CONTENT) return "";
  return `
  <section class="vendor-band">
    <div class="wrap">
      <div>
        <h3>${STORE_BAND_TITLE}</h3>
        <p>${STORE_BAND_TEXT}</p>
      </div>
      <a class="btn btn-primary btn-lg" href="${STORE_URL}" target="_blank" rel="noopener">${STORE_BUTTON}</a>
    </div>
  </section>`;
}

/* Small "buy" strip at the top of the library and each peptide page. Hidden when STORE_URL is blank. */
function renderBuyBar() {
  if (!STORE_URL || typeof STORE_BUTTONS_ON_CONTENT === "undefined" || !STORE_BUTTONS_ON_CONTENT) return "";
  return `
  <div class="buy-bar">
    <a class="btn btn-primary" href="${STORE_URL}" target="_blank" rel="noopener">${STORE_BUTTON}</a>
    <p>${STORE_BAR_TEXT}</p>
  </div>`;
}

/* Calculator page: "the water to use" card. Links to your store only if STORE_URL and WATER_URL are set. */
function renderWaterCard() {
  if (!WATER_URL) return "";
  return `
  <div class="water-cards">
    <a class="water-card" href="${WATER_URL}" target="_blank" rel="noopener">
      <div class="wc-name">Bacteriostatic water (10ml)</div>
      <div class="wc-desc">Sterile water with a preservative, so a mixed vial lasts for weeks.</div>
      <div class="supply-link">View product →</div>
    </a>
  </div>`;
}

/* Calculator page: dark "where to buy" section at the bottom. Hidden when STORE_URL is blank. */
function renderOrderSection() {
  if (!STORE_URL || typeof STORE_BUTTONS_ON_CONTENT === "undefined" || !STORE_BUTTONS_ON_CONTENT) return "";
  return `
  <section class="calc-section section-dark" id="order-sec">
    <a id="order" class="anchor"></a>
    <div class="wrap" style="text-align:center">
      <span class="eyebrow" style="color:var(--teal)">Where to Buy</span>
      <h2 class="display" style="color:#fff;margin:12px 0 14px;font-size:1.6rem">${STORE_BAND_TITLE}</h2>
      <p style="color:#CFCEC9;max-width:54ch;margin:0 auto 28px">${STORE_BAND_TEXT}</p>
      <a class="btn btn-primary btn-lg" href="${STORE_URL}" target="_blank" rel="noopener">${STORE_BUTTON}</a>
    </div>
  </section>`;
}

/* ---------- Age gate (21+) ----------
   Runs automatically on every page that loads data.js.
   First visit: a full-screen overlay asks the visitor to confirm they are
   21 or older. Their answer is saved in this browser (localStorage), so
   they only see the gate once per device. Clearing browser data resets it. */
(function () {
  try {
    if (localStorage.getItem('pep_age_ok') === 'yes') return;
  } catch (e) { /* if storage is blocked, show the gate every visit */ }

  const gate = document.createElement('div');
  gate.className = 'age-gate';
  gate.innerHTML = `
    <div class="age-gate-card" role="dialog" aria-modal="true" aria-labelledby="ageGateTitle">
      <span class="eyebrow">Before you come in</span>
      <h2 class="display" id="ageGateTitle">Are you 21 or older?</h2>
      <p>This site shares peptide education written for adults. Please confirm your age to continue.</p>
      <div class="age-gate-actions">
        <button class="btn btn-primary btn-lg" id="ageGateYes">Yes, I'm 21 or older</button>
        <button class="btn btn-ghost btn-lg" id="ageGateNo">No, I'm under 21</button>
      </div>
    </div>`;
  document.body.appendChild(gate);
  document.body.classList.add('age-gate-lock');

  document.getElementById('ageGateYes').addEventListener('click', function () {
    try { localStorage.setItem('pep_age_ok', 'yes'); } catch (e) {}
    gate.remove();
    document.body.classList.remove('age-gate-lock');
  });

  document.getElementById('ageGateNo').addEventListener('click', function () {
    gate.querySelector('.age-gate-card').innerHTML = `
      <span class="eyebrow">Thanks for your honesty</span>
      <h2 class="display">This site is for adults</h2>
      <p>The content here is written for readers 21 and older. We'll be here when the time is right.</p>`;
  });
})();

if (typeof module !== "undefined") { module.exports = { PEPTIDES, CATEGORIES }; }

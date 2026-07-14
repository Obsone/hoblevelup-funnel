# Hoblevelup Website Working Agreements

## Project Goal

Build a polished, credible, responsive landing page for obsone's solo GoHighLevel automation service. The site should explain the offer clearly, demonstrate systems thinking, and guide qualified visitors to the existing lead form without invented proof.

## Start Here

1. Read `DESIGN.md` before changing visual styles or components.
2. Read `index.html` and inspect the current behavior before proposing a rewrite.
3. For project status and decisions, consult `D:\Codex World\Personal AI OS\Efforts\Hoblevelup Website.md` when the vault is accessible.
4. Treat `booking/` as existing untracked work. Do not delete, overwrite, move, or commit it unless obsone explicitly includes it in scope.

## Blueprint

- Follow **First the Blueprint. Then the Build.**
- Use a standard blueprint for UI changes: current state, desired behavior, affected sections, risks, and verification.
- Use a full blueprint before deployment, authentication, external-data handling, GoHighLevel integration changes, or other production-risk work.
- Prefer a surgical redesign over a framework migration. Change the stack only when obsone approves a clear benefit and migration plan.

## Credibility and Voice

- Hoblevelup is a solo provider; use first-person singular in client-facing copy.
- Keep the tone warm, clear, professional, calm, practical, and specific.
- Never invent clients, results, conversion rates, revenue, testimonials, certifications, pricing, credentials, or years of experience.
- Do not turn planned services or developing skills into claims of proven expertise.
- Connect features to business outcomes and customer experience without hype.

## Change Boundaries

- Keep every changed line traceable to the approved outcome or its safe verification.
- Preserve existing GoHighLevel CTA URLs unless changing them is explicitly requested.
- Treat Privacy Policy and Terms links as known placeholders; do not invent legal content.
- Preserve unrelated assets, content, Git state, and experiments.
- Do not silently refactor, reformat the whole page, add dependencies, or introduce a build system.
- Record useful out-of-scope improvements separately.

## Verification

For meaningful UI changes:

- Test at 375 px, 768 px, and 1440 px widths.
- Check for horizontal overflow and responsive header behavior.
- Test keyboard navigation, visible focus, heading structure, labels, and icon accessibility.
- Verify internal anchors and external CTAs.
- Check the browser console for errors.
- Compare the result against `DESIGN.md` and the approved blueprint.
- Run `git status --short` and confirm unrelated work, especially `booking/`, remains untouched.

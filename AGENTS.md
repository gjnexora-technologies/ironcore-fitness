<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project rules

- Editable site content (programs, trainers, plans, prices, contact, gallery) lives in `src/lib/site-data.ts` — single source so the owner edits one file.
- Shared chrome and section components live in `src/components/site/`; routes compose them.
- Booking form is frontend-only (no backend) per brief: keep the site lightweight.

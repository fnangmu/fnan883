/* ---------------------------------------------------------------------------
   FNAN 883 - student presentation registry
   ---------------------------------------------------------------------------
   HOW TO ADD YOURS
     1. Append ONE line at the very bottom of this file.
     2. Keep the whole entry on a SINGLE line. Do not wrap it across lines,
        and do not edit or reorder anybody else's line.

   Why one line: this file is merged with git's "union" strategy (see
   /.gitattributes), which keeps BOTH sides of an overlapping edit instead of
   raising a conflict. That works only when each entry is one self-contained
   line. A wrapped entry can be sliced in half by a merge and will break the
   page for everyone.

   Fields
     presenter - your name, as you want it listed
     slug      - your folder name under presentations/ (also your branch name)
     title     - title of the paper you presented
     authors   - author list, e.g. "Fama and French (2015)"
     source    - journal / working paper reference
     date      - presentation date, YYYY-MM-DD
--------------------------------------------------------------------------- */

window.PRESENTATIONS = window.PRESENTATIONS || [];

PRESENTATIONS.push({ presenter: "Tan", slug: "tan", title: "A Five-Factor Asset Pricing Model", authors: "Fama and French (2015)", source: "Journal of Financial Economics 116, 1–22", date: "2026-09-07" });

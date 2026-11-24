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
     week      - which week of the seminar you presented, as a number. The
                 collection page orders by it. Weeks rather than dates: the
                 class does not always meet on the same weekday.
     page      - optional; the page for this particular talk, as a path under
                 presentations/ (e.g. "tan/p2.html"). Omit it and the entry
                 links to your folder's index.html instead. Use it when you
                 present more than once.
--------------------------------------------------------------------------- */

window.PRESENTATIONS = window.PRESENTATIONS || [];

PRESENTATIONS.push({ presenter: "Tan", slug: "tan", page: "tan/p1.html", title: "A Five-Factor Asset Pricing Model", authors: "Fama and French (2015)", source: "Journal of Financial Economics 116, 1–22", week: 2 });
PRESENTATIONS.push({ presenter: "Lingyi", slug: "lingyi", page: "lingyi/p1.html", title: "Choosing Factors", authors: "Fama and French (2018)", source: "Journal of Financial Economics 128, 234–252", week: 2 });
PRESENTATIONS.push({ presenter: "Zihao", slug: "zihao", page: "zihao/p1.html", title: "Short- and Long-Horizon Behavioral Factors", authors: "Daniel, Hirshleifer, and Sun (2020)", source: "Review of Financial Studies 33, 1673–1736", week: 2 });
PRESENTATIONS.push({ presenter: "Tan", slug: "tan", page: "tan/p2.html", title: "Share Issuance and Cross-sectional Returns", authors: "Pontiff and Woodgate (2008)", source: "Journal of Finance 63, 921–945", week: 4 });
PRESENTATIONS.push({ presenter: "Lingyi", slug: "lingyi", page: "lingyi/p2.html", title: "Asset Growth and the Cross-Section of Stock Returns", authors: "Cooper, Gulen, and Schill (2008)", source: "Journal of Finance 63, 1609–1651", week: 4 });
PRESENTATIONS.push({ presenter: "Zihao", slug: "zihao", page: "zihao/p2.html", title: "Value and Momentum Everywhere", authors: "Asness, Moskowitz, and Pedersen (2013)", source: "Journal of Finance 68, 929–985", week: 4 });
PRESENTATIONS.push({ presenter: "Lingyi", slug: "lingyi", page: "lingyi/p3.html", title: "The Conditional CAPM Does Not Explain Asset-Pricing Anomalies", authors: "Lewellen and Nagel (2006)", source: "Journal of Financial Economics 82, 289–314", week: 9 });

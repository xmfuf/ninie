(function () {
  const sectionsEl = document.getElementById("sections");
  const searchEl = document.getElementById("search");
  const filtersEl = document.getElementById("filters");
  const resultCountEl = document.getElementById("resultCount");
  const noResultsEl = document.getElementById("noResults");

  let activeCategory = "all";

  const ARABIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

  function toArabicDigits(n) {
    return String(n).replace(/[0-9]/g, (d) => ARABIC_DIGITS[d]);
  }

  function chapterNumber(n) {
    return toArabicDigits(String(n).padStart(2, "0"));
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function formatResultCount(n) {
    if (n === 0) return "لا توجد مصادر";
    if (n === 1) return "مصدر واحد";
    if (n === 2) return "مصدران";
    if (n >= 3 && n <= 10) return `${n} مصادر`;
    return `${n} مصدرًا`;
  }

  function matches(resource, query) {
    if (!query) return true;
    const haystack = `${resource.name} ${resource.desc} ${resource.domain}`.toLowerCase();
    return haystack.includes(query);
  }

  function render() {
    const query = searchEl.value.trim().toLowerCase();
    const categories = activeCategory === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === activeCategory);

    let totalShown = 0;
    sectionsEl.innerHTML = "";

    categories.forEach((cat) => {
      const items = RESOURCES.filter(
        (r) => r.category === cat.id && matches(r, query)
      );
      if (items.length === 0) return;
      totalShown += items.length;

      const chapterIndex = CATEGORIES.findIndex((c) => c.id === cat.id) + 1;

      const section = document.createElement("section");
      section.className = "section";

      const head = document.createElement("div");
      head.className = "section-head";
      head.innerHTML = `
        <span class="section-num serial">${chapterNumber(chapterIndex)}</span>
        <span class="section-title">${escapeHtml(cat.label)}</span>
        <span class="section-rule"></span>
      `;
      section.appendChild(head);

      const list = document.createElement("ul");
      list.className = "entry-list";

      items.forEach((r, i) => {
        const li = document.createElement("li");
        li.className = "entry";
        li.innerHTML = `
          <a class="entry-row" href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer">
            <span class="entry-num serial">${toArabicDigits(i + 1)}</span>
            <span class="entry-body">
              <span class="entry-top">
                <span class="entry-name">${escapeHtml(r.name)}</span>
                <span class="entry-domain" dir="ltr">${escapeHtml(r.domain)}</span>
              </span>
              <p class="entry-desc">${escapeHtml(r.desc)}</p>
              <span class="entry-verified">آخر تحقق: ${escapeHtml(r.verified)}</span>
            </span>
          </a>
        `;
        list.appendChild(li);
      });

      section.appendChild(list);
      sectionsEl.appendChild(section);
    });

    resultCountEl.textContent = formatResultCount(totalShown);
    noResultsEl.hidden = totalShown !== 0;
  }

  searchEl.addEventListener("input", render);

  filtersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    filtersEl.querySelectorAll(".filter-btn").forEach((b) =>
      b.classList.toggle("is-active", b === btn)
    );
    render();
  });

  render();
})();

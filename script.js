(function () {
  const sectionsEl = document.getElementById("sections");
  const searchEl = document.getElementById("search");
  const filtersEl = document.getElementById("filters");
  const resultCountEl = document.getElementById("resultCount");
  const noResultsEl = document.getElementById("noResults");

  let activeCategory = "all";

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

      const section = document.createElement("section");
      section.className = "section";

      const heading = document.createElement("h2");
      heading.className = "section-title";
      heading.textContent = cat.label;
      section.appendChild(heading);

      const list = document.createElement("ul");
      list.className = "card-list";

      items.forEach((r) => {
        const li = document.createElement("li");
        const initial = escapeHtml(r.name.trim().charAt(0));
        const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(r.domain)}`;
        li.innerHTML = `
          <a class="card" href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer">
            <div class="card-row">
              <div class="card-heading">
                <span class="card-icon-wrap">
                  <span class="card-icon-fallback">${initial}</span>
                  <img
                    class="card-icon"
                    src="${faviconUrl}"
                    alt=""
                    loading="lazy"
                    onload="this.previousElementSibling.hidden = true"
                    onerror="this.remove()"
                  />
                </span>
                <span class="card-name">${escapeHtml(r.name)}</span>
              </div>
              <span class="card-domain" dir="ltr">${escapeHtml(r.domain)}</span>
            </div>
            <p class="card-desc">${escapeHtml(r.desc)}</p>
            <div class="card-meta">
              <span class="verified-badge">آخر تحقق: ${escapeHtml(r.verified)}</span>
            </div>
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

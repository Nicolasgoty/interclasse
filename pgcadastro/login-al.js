
      function showToast() {
        const t = document.getElementById("toast");
        t.classList.add("show");
        clearTimeout(t._hide);
        t._hide = setTimeout(() => t.classList.remove("show"), 1200);
      }
      function addRipple(e) {
        const el = e.currentTarget;
        const r = document.createElement("span");
        r.className = "ripple";
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        r.style.width = r.style.height = size + "px";
        r.style.left = e.clientX - rect.left - size / 2 + "px";
        r.style.top = e.clientY - rect.top - size / 2 + "px";
        el.appendChild(r);
        setTimeout(() => r.remove(), 600);
      }

      document.querySelectorAll("[data-target]").forEach((btn) => {
        btn.addEventListener("click", function (e) {
          addRipple(e);
          showToast();
          const t = this.getAttribute("data-target");
          setTimeout(() => (location.href = t), 700);
        });
      });

      // menu
      const menuBtn = document.getElementById("menuBtn");
      const menu = document.getElementById("menu-lateral");
      menuBtn.addEventListener("click", () => {
        const open = menu.classList.toggle("open");
        menu.setAttribute("aria-hidden", String(!open));
      });

      // ripple + navigation
      function showToast() {
        const t = document.getElementById("toast");
        t.classList.add("show");
        clearTimeout(t._hide);
        t._hide = setTimeout(() => t.classList.remove("show"), 1200);
      }

      function addRipple(e) {
        const el = e.currentTarget;
        const r = document.createElement("span");
        r.className = "ripple";
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        r.style.width = r.style.height = size + "px";
        r.style.left = e.clientX - rect.left - size / 2 + "px";
        r.style.top = e.clientY - rect.top - size / 2 + "px";
        el.appendChild(r);
        setTimeout(() => r.remove(), 600);
      }

      document.querySelectorAll("[data-target]").forEach((btn) => {
        btn.addEventListener("click", function (e) {
          addRipple(e);
          showToast();
          const target = this.getAttribute("data-target");
          setTimeout(() => (location.href = target), 700);
        });
      });
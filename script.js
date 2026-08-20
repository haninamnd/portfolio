  const caseStudies = {
      amala: {
        title: "Toko Kue Amala",
        sections: [
          ["Client", "Toko Kue Amala — Padang. Social Media Specialist Intern, Sep–Oct 2025."],
          ["Challenge / Objective", "Mendukung brand visibility, audience engagement, dan aktivitas promosi melalui Instagram dan TikTok."],
          ["My Contribution", "Menyusun content calendar, storyline, promotional planning, membuat short-form video, carousel, copywriting, scheduling, serta product-focused visual."],
          ["Visual Evidence", "Tambahkan screenshot content, carousel, product photography, dan analytics Instagram/TikTok di bagian visual project card."],
          ["Results", "+4.3% Instagram follower growth dan +44.4% increase in peak post views selama periode internship."],
          ["What I Can Bring", "Content yang lebih terstruktur, konsistensi publishing, visual promotional assets, serta insight performa yang dapat digunakan untuk iterasi konten berikutnya."]
        ]
      },
      pln: {
        title: "PLN UP2D Sumbar",
        sections: [
          ["Client", "PLN UP2D Sumbar — Padang. Video Editor Freelance, Oct 2025–Jan 2026."],
          ["Objective", "Mendukung internal communication dan organizational initiatives melalui visual content yang informatif dan engaging."],
          ["My Contribution", "Mengembangkan konsep dan storyline, mengedit raw footage menjadi video yang kohesif, menjaga visual quality, consistency, dan message clarity, serta berkolaborasi dengan tim K3L."],
          ["Visual Evidence", "Tambahkan frame video, before/after editing, atau screenshot final video sebagai bukti visual."],
          ["Results", "CV mendokumentasikan kontribusi produksi dan kolaborasi, tetapi tidak mencantumkan angka performance metric untuk project ini."],
          ["What I Can Bring", "Video communication yang lebih terstruktur, pesan lebih jelas, dan visual yang mendukung kebutuhan komunikasi organisasi."]
        ]
      },
      sanggar: {
        title: "Sanggar Ungu UKS Faterna Unand",
        sections: [
          ["Client / Organization", "Sanggar Ungu UKS Faterna Unand — Head of Information and Communication, Jul 2022–Jun 2023."],
          ["Objective", "Mendukung komunikasi organisasi, event promotion, dokumentasi, dan penyebaran informasi digital."],
          ["My Contribution", "Memproduksi 76 visual content dan 11 video content; mengelola publishing Instagram, TikTok, YouTube, dan Gmail; berkolaborasi dengan leaders/cross-functional teams; serta mengelola digital archive."],
          ["Visual Evidence", "Tambahkan kolase Instagram posts, TikTok/YouTube content, event poster, dokumentasi, dan contoh archive workflow."],
          ["Results", "76 visual contents dan 11 video contents diproduksi selama periode kepengurusan."],
          ["What I Can Bring", "Komunikasi digital yang lebih konsisten, materi promosi event, dokumentasi visual, dan digital archive yang lebih terorganisir."]
        ]
      },
      tiktok: {
        title: "Drama & Entertainment TikTok",
        sections: [
          ["Project Type", "Personal Content Creation & Social Media Project — Jan 2026–Present."],
          ["Objective", "Membangun akun niche drama & entertainment dari awal dan memahami bagaimana trend, format, storytelling, dan audience response memengaruhi performa content."],
          ["My Contribution", "Trend research, short-form video production, storytelling testing, hashtag testing, posting schedule experimentation, performance analysis, dan refinement content strategy."],
          ["Visual Evidence", "Tambahkan screenshot profile, top-performing videos, analytics, views, likes, comments, dan audience insights."],
          ["Results", "4,000+ followers, 1.4M+ total likes, 20.99% engagement rate, dan salah satu video mencapai 3.3M views."],
          ["What I Can Bring", "Menunjukkan kemampuan membangun audience dari nol, membaca performa content, menemukan high-performing formats, dan melakukan iterasi berbasis data."]
        ]
      }
    };

    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");

    document.querySelectorAll("[data-modal]").forEach(button => {
      button.addEventListener("click", () => {
        const data = caseStudies[button.dataset.modal];
        modalTitle.textContent = data.title;
        modalContent.innerHTML = data.sections.map(([heading, body]) => `
          <section class="modal-section">
            <h4>${heading}</h4>
            <p>${body}</p>
          </section>
        `).join("");
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });
    });

    function closeModal() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    document.querySelector(".close").addEventListener("click", closeModal);
    modal.addEventListener("click", e => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") closeModal();
    });

    // Project filter
    const filters = document.querySelectorAll(".filter");
    const projects = document.querySelectorAll(".project-card");

    filters.forEach(filter => {
      filter.addEventListener("click", () => {
        filters.forEach(f => f.classList.remove("active"));
        filter.classList.add("active");

        const selected = filter.dataset.filter;
        projects.forEach(project => {
          const show = selected === "all" || project.dataset.category === selected;
          project.classList.toggle("hidden", !show);
        });
      });
    });

    // Scroll reveal
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
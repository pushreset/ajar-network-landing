(function () {
  "use strict";

  var STRINGS = {
    en: {
      statement: "Supporting rights and access to justice for precariously housed and unhoused people and those who depend on public space",
      subtitle: "AJAR Network, Access to Justice Action Research",
      cta: "Add a signalement",
      whatisLabel: "What is a signalement?",
      whatis: "A signalement is a short report documenting an incident of institutional violence, a record that builds toward accountability.",
      contact: "Contact us",
      about: "About the Collaborative"
    },
    fr: {
      statement: "Soutenir les droits et l'accès à la justice des personnes en situation de logement précaire ou sans-abri, et de celles qui dépendent de l'espace public",
      subtitle: "Réseau AJAR, Recherche-action sur l'accès à la justice",
      cta: "Déposer un signalement",
      whatisLabel: "Qu'est-ce qu'un signalement ?",
      whatis: "Un signalement est un court rapport documentant un incident de violence institutionnelle, une trace pour bâtir la responsabilité.",
      contact: "Nous contacter",
      about: "À propos du Collaboratif"
    },
    pa: {
      statement: "ਅਸਥਿਰ ਰਿਹਾਇਸ਼ ਵਾਲੇ ਅਤੇ ਬੇਘਰ ਲੋਕਾਂ, ਅਤੇ ਜਨਤਕ ਥਾਂ 'ਤੇ ਨਿਰਭਰ ਲੋਕਾਂ ਦੇ ਹੱਕਾਂ ਅਤੇ ਨਿਆਂ ਤੱਕ ਪਹੁੰਚ ਦਾ ਸਮਰਥਨ",
      subtitle: "AJAR ਨੈੱਟਵਰਕ,ਨਿਆਂ ਤੱਕ ਪਹੁੰਚ ਐਕਸ਼ਨ ਰਿਸਰਚ",
      cta: "ਸਿਗਨਾਲਮੈਂਟ ਜੋੜੋ",
      whatisLabel: "ਸਿਗਨਾਲਮੈਂਟ ਕੀ ਹੈ?",
      whatis: "ਸਿਗਨਾਲਮੈਂਟ ਸੰਸਥਾਗਤ ਹਿੰਸਾ ਦੀ ਘਟਨਾ ਦਾ ਇੱਕ ਛੋਟਾ ਰਿਕਾਰਡ ਹੈ,ਜਵਾਬਦੇਹੀ ਵੱਲ ਵਧਣ ਵਾਲਾ ਇੱਕ ਦਸਤਾਵੇਜ਼।",
      contact: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
      about: "ਕੋਲੈਬੋਰੇਟਿਵ ਬਾਰੇ"
    },
    zh: {
      statement: "支持居住不稳定者、无家可归者，以及依赖公共空间的人们的权利与诉诸司法的机会",
      subtitle: "AJAR 网络,诉诸司法行动研究",
      cta: "添加一份 signalement",
      whatisLabel: "什么是 signalement？",
      whatis: "signalement 是记录机构暴力事件的简短报告，一份推动问责的记录。",
      contact: "联系我们",
      about: "关于合作组织"
    }
  };

  var LANGS = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "pa", label: "ਪੰਜਾਬੀ" },
    { code: "zh", label: "中文" }
  ];

  var current = "en";

  function applyLang(lang) {
    current = STRINGS[lang] ? lang : "en";
    var t = STRINGS[current];
    document.documentElement.lang = current;

    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] != null) el.textContent = t[key];
    });

    var buttons = document.querySelectorAll(".lang-pills button");
    buttons.forEach(function (b) {
      b.classList.toggle("active", b.dataset.code === current);
    });
  }

  function buildPills() {
    var container = document.getElementById("langPills");
    LANGS.forEach(function (l) {
      var btn = document.createElement("button");
      btn.textContent = l.label;
      btn.dataset.code = l.code;
      btn.setAttribute("lang", l.code);
      btn.addEventListener("click", function () { applyLang(l.code); });
      container.appendChild(btn);
    });
  }

  buildPills();
  applyLang(current);
})();

(function () {
  "use strict";

  var STRINGS = {
    en: {
      statement: "Supporting rights and access to justice for precariously housed and unhoused people and those who depend on public space",
      subtitle: "Access to Justice Action Research Network",
      cta: "Add a signalement",
      whatisLabel: "What is a signalement?",
      whatis: "A signalement is a short, factual report documenting an incident of institutional violence. You can submit eyewitness accounts as well as photos, videos and other evidence. Your report will contribute to our efforts to ensure that authorities are held accountable for their actions.",
      ctaPrompt: "Do you want to report a violation of your or another person's rights by the authorities?",
      contact: "Contact us",
      about: "About the Collaborative"
    },
    fr: {
      statement: "Soutenir les droits et l'accès à la justice des personnes en situation de logement précaire ou sans-abri, et de celles qui dépendent de l'espace public",
      subtitle: "Réseau de recherche-action sur l'accès à la justice",
      cta: "Déposer un signalement",
      whatisLabel: "Qu'est-ce qu'un signalement ?",
      whatis: "Un signalement est un rapport court et factuel documentant un incident de violence institutionnelle. Vous pouvez soumettre des témoignages oculaires ainsi que des photos, des vidéos et d'autres preuves. Votre signalement contribuera à nos efforts pour que les autorités répondent de leurs actes.",
      ctaPrompt: "Souhaitez-vous signaler une violation de vos droits ou de ceux d'une autre personne par les autorités ?",
      contact: "Nous contacter",
      about: "À propos du Collaboratif"
    },
    pa: {
      statement: "ਅਸਥਿਰ ਰਿਹਾਇਸ਼ ਵਾਲੇ ਅਤੇ ਬੇਘਰ ਲੋਕਾਂ, ਅਤੇ ਜਨਤਕ ਥਾਂ 'ਤੇ ਨਿਰਭਰ ਲੋਕਾਂ ਦੇ ਹੱਕਾਂ ਅਤੇ ਨਿਆਂ ਤੱਕ ਪਹੁੰਚ ਦਾ ਸਮਰਥਨ",
      subtitle: "ਨਿਆਂ ਤੱਕ ਪਹੁੰਚ ਐਕਸ਼ਨ ਰਿਸਰਚ ਨੈੱਟਵਰਕ",
      cta: "ਸਿਗਨਾਲਮੈਂਟ ਜੋੜੋ",
      whatisLabel: "ਸਿਗਨਾਲਮੈਂਟ ਕੀ ਹੈ?",
      whatis: "ਸਿਗਨਾਲਮੈਂਟ ਸੰਸਥਾਗਤ ਹਿੰਸਾ ਦੀ ਘਟਨਾ ਦਾ ਇੱਕ ਛੋਟਾ, ਤੱਥ-ਆਧਾਰਿਤ ਰਿਪੋਰਟ ਹੈ। ਤੁਸੀਂ ਚਸ਼ਮਦੀਦ ਗਵਾਹੀਆਂ ਦੇ ਨਾਲ-ਨਾਲ ਫੋਟੋਆਂ, ਵੀਡੀਓ ਅਤੇ ਹੋਰ ਸਬੂਤ ਜਮ੍ਹਾਂ ਕਰ ਸਕਦੇ ਹੋ। ਤੁਹਾਡੀ ਰਿਪੋਰਟ ਅਧਿਕਾਰੀਆਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੇ ਕੰਮਾਂ ਲਈ ਜਵਾਬਦੇਹ ਬਣਾਉਣ ਦੇ ਸਾਡੇ ਯਤਨਾਂ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾਵੇਗੀ।",
      ctaPrompt: "ਕੀ ਤੁਸੀਂ ਅਧਿਕਾਰੀਆਂ ਦੁਆਰਾ ਆਪਣੇ ਜਾਂ ਕਿਸੇ ਹੋਰ ਵਿਅਕਤੀ ਦੇ ਹੱਕਾਂ ਦੀ ਉਲੰਘਣਾ ਦੀ ਰਿਪੋਰਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
      contact: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
      about: "ਕੋਲੈਬੋਰੇਟਿਵ ਬਾਰੇ"
    },
    zh: {
      statement: "支持居住不稳定者、无家可归者，以及依赖公共空间的人们的权利与诉诸司法的机会",
      subtitle: "诉诸司法行动研究网络",
      cta: "添加一份 signalement",
      whatisLabel: "什么是 signalement？",
      whatis: "signalement 是记录机构暴力事件的简短、真实的报告。您可以提交目击者陈述以及照片、视频和其他证据。您的报告将助力我们推动当局为其行为承担责任。",
      ctaPrompt: "您想举报当局侵犯您或他人权利的行为吗？",
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

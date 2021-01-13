const elementClassMap = new Map();

window.addEventListener("load", (event) => {
  gsap.registerPlugin(CSSRulePlugin);
  const titleSpan = CSSRulePlugin.getRule(
    ".content-main .title-wrapper > span:before"
  );
  const timeline = gsap.timeline();

  timeline
    .from(titleSpan, { transform: "scaleX(0)" })
    .to(titleSpan, { duration: 1, transform: "scaleX(1)" })
    .to(titleSpan, { duration: 0.5, borderRadius: "20%" }, "<0.5");

  const perks = document.querySelectorAll(".perk");
  const perk1 = document.querySelector(".perk-1");
  const perk2 = document.querySelector(".perk-2");
  const perk3 = document.querySelector(".perk-3");
  const offer1 = document.querySelector(".offer-1");
  const offer2 = document.querySelector(".offer-2");


  elementClassMap.set(perk1, ["fade-in-left", "fade-out-left"]);
  elementClassMap.set(perk2, ["fade-in-bottom", "fade-out-bottom"]);
  elementClassMap.set(perk3, ["fade-in-right", "fade-out-right"]);
  elementClassMap.set(offer1,["fade-in-center","fade-out-center"]);
  elementClassMap.set(offer2,["fade-in-center","fade-out-center"]);

  const intersectionOptions = {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0,
  };

  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    for (entry of entries) {
      if (!entry.isIntersecting) {
        return;
      } else if (entry.isIntersecting) {
        console.log(entry.target, "is intersecting");
        entry.target.classList.add(elementClassMap.get(entry.target)[0]);
        observer.unobserve(entry.target);
      }
    }
  }, intersectionOptions);

  for ([key, val] of elementClassMap) {
    fadeInObserver.observe(key);
  }
});

window.addEventListener("resize", (event) => {
  console.log(event);
  console.log(event.target.innerHeight);
  console.log(event.target.innerWidth);
});

console.log(window.navigator.platform);
console.log(window.navigator.appCodeName);
window.navigator.vibrate(5000);
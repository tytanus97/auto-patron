gsap.registerPlugin(CSSRulePlugin);
const titleSpan = CSSRulePlugin.getRule(".content-main > h1 span:before");
const timeline = gsap.timeline();

 timeline.from(titleSpan,{transform:'scaleX(0)'})
.to(titleSpan,{duration:1,transform:'scaleX(1)'})
.to(titleSpan,{duration:0.5,borderRadius:'20%'},'<0.5');


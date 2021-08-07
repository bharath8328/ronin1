const faders=document.querySelectorAll('.fade-in');

const appearOptions={
    threshold:1,
	rootMargin: "0px 0px 300px 0px"
};

const appearOnScroll= new IntersectionObserver(
    function(entries,appearOnScroll){
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },appearOptions);

faders.forEach(fader => {
        appearOnScroll.observe(fader);
    }
);
function getTimeRemaining(e){var t=Date.parse(e)-Date.parse(new Date),a=Math.floor(t/1e3%60),i=Math.floor(t/1e3/60%60),n=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/864e5),hours:n,minutes:i,seconds:a}}function initializeClock(e,t){var a=document.getElementById(e),i=a.querySelector("#timer-days"),n=a.querySelector("#timer-hours"),o=a.querySelector("#timer-minutes"),s=a.querySelector("#timer-seconds");function l(){var e=getTimeRemaining(t);i.innerHTML=e.days,n.innerHTML=("0"+e.hours).slice(-2),o.innerHTML=("0"+e.minutes).slice(-2),s.innerHTML=("0"+e.seconds).slice(-2),e.total<=0&&clearInterval(r)}l();var r=setInterval(l,1e3)}!function(o){skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)",xxsmall:"(max-width: 360px)"}),o(function(){var e=o(window),t=o("body"),a=o("#main");t.addClass("is-loading"),e.on("load",function(){window.setTimeout(function(){t.removeClass("is-loading")},100)}),o("form").placeholder(),skel.on("+medium -medium",function(){o.prioritize(".important\\28 medium\\29",skel.breakpoint("medium").active)});var i=o("#nav");if(0<i.length){a.scrollex({mode:"top",enter:function(){i.addClass("alt")},leave:function(){i.removeClass("alt")}});var n=i.find("a");n.scrolly({speed:1e3,offset:function(){return i.height()}}).on("click",function(){var e=o(this);"#"==e.attr("href").charAt(0)&&(n.removeClass("active").removeClass("active-locked"),e.addClass("active").addClass("active-locked"))}).each(function(){var e=o(this),t=e.attr("href"),a=o(t);a.length<1||a.scrollex({mode:"middle",initialize:function(){skel.canUse("transition")&&a.addClass("inactive")},enter:function(){a.removeClass("inactive"),0==n.filter(".active-locked").length?(n.removeClass("active"),e.addClass("active")):e.hasClass("active-locked")&&e.removeClass("active-locked")}})})}o(".scrolly").scrolly({speed:1e3})})}(jQuery);var deadline="September 9, 2018";function parallaxIt(){var e=$(window),a=window.pageYOffset||document.documentElement.scrollTop,i=[],n=[];$('[data-type="content"]').each(function(e,t){var a=$(this);a.__speed=a.data("speed")||1,a.__fgOffset=a.offset().top,i.push(a)}),$('[data-type="background"]').each(function(){var e=$(this);e.__speed=e.data("speed")||1,e.__fgOffset=e.offset().top,n.push(e)}),e.on("scroll resize",function(){$.each(i,function(e,t){i[e].__fgOffset=i[e].offset().top}),$.each(n,function(e,t){n[e].__fgOffset=n[e].offset().top}),a=window.pageYOffset||document.documentElement.scrollTop,i.forEach(function(e){var t=(e.__fgOffset-a)/e.__speed;e.css("top",t)}),n.forEach(function(e){var t=-(a-e.__fgOffset)/e.__speed;e.css({backgroundPosition:"50% "+t+"px"})})}),e.trigger("scroll")}initializeClock("timer-div",deadline),parallaxIt();

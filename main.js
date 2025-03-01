import {i as y} from "./loader.js";
const _ = function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
        i(n);
    new MutationObserver(n => {
        for (const s of n)
            if (s.type === "childList")
                for (const e of s.addedNodes)
                    e.tagName === "LINK" && e.rel === "modulepreload" && i(e)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(n) {
        const s = {};
        return n.integrity && (s.integrity = n.integrity),
        n.referrerpolicy && (s.referrerPolicy = n.referrerpolicy),
        n.crossorigin === "use-credentials" ? s.credentials = "include" : n.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function i(n) {
        if (n.ep)
            return;
        n.ep = !0;
        const s = r(n);
        fetch(n.href, s)
    }
};
_();
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", y);
console.log("main.js");
window.addEventListener("load", function() {
    const o = document.querySelectorAll(".adobe__item, .novum__item, .awwward__item, .behance__item")
      , t = gsap.utils.shuffle([...o]);
    gsap.from(t, {
        scrollTrigger: {
            trigger: ".home-articles__wrapper",
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        scale: .5,
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
        stagger: {
            amount: .6,
            from: "random"
        }
    })
});
$(window).ready(function() {
    const o = $(".button-icon.is-prefooter")
      , t = $(".francis-img.is-hungry, .benji-img.is-hungry")
      , r = $(".francis-img.is-happy, .benji-img.is-happy")
      , i = $(".francis-link")
      , n = $(".benji-link")
      , s = $(".francis-img")
      , e = $(".benji-img");
    t.css("opacity", 1),
    r.css("opacity", 0),
    o.hover(function() {
        t.css("opacity", 0),
        r.css("opacity", 1)
    }, function() {
        r.css("opacity", 0),
        t.css("opacity", 1)
    }),
    i.hover(function() {
        s.css("opacity", 0),
        $(".francis-img.is-face").css("opacity", 1),
        $(".benji-img.is-target").css("opacity", 1)
    }, function() {
        t.css("opacity", 1),
        $(".francis-img.is-face, .benji-img.is-target").css("opacity", 0)
    }),
    n.hover(function() {
        e.css("opacity", 0),
        $(".benji-img.is-face").css("opacity", 1),
        $(".francis-img.is-target").css("opacity", 1)
    }, function() {
        t.css("opacity", 1),
        $(".benji-img.is-face, .francis-img.is-target").css("opacity", 0)
    })
});
$(window).ready(function() {
    const o = $(".prefooter__img__wrapper")
      , r = $(".cta-prefooter__wrapper").find(".button-icon");
    let i;
    function n() {
        window.innerWidth <= 767 ? (i || (i = o.parent()),
        o.insertBefore(r)) : i && i.append(o)
    }
    n(),
    $(window).on("resize", n)
});
window.addEventListener("load", function() {
    const o = document.querySelector(".button-video-stuck")
      , t = document.querySelector(".video-bg")
      , r = t.querySelector("video");
    o.addEventListener("click", function() {
        gsap.to(o, {
            opacity: 0,
            duration: .5,
            ease: "power2.inOut",
            onComplete: function() {
                o.style.display = "none"
            }
        }),
        gsap.to(t, {
            width: "100%",
            height: "100%",
            opacity: 1,
            duration: 1.3,
            ease: "expo.inOut",
            onStart: function() {
                t.style.zIndex = "1000"
            }
        }),
        r && (r.play(),
        r.loop = !0)
    })
});
$(window).ready(function() {
    const o = $(".button-video-stuck")
      , t = 130
      , r = .4;
    let i = !1;
    $(document).on("mousemove", function(n) {
        const {clientX: s, clientY: e} = n
          , {left: c, top: a, width: u, height: d} = o[0].getBoundingClientRect()
          , p = c + u / 2
          , h = a + d / 2
          , g = s - p
          , f = e - h;
        if (Math.sqrt(g * g + f * f) < t) {
            i = !0;
            const m = g * r
              , w = f * r;
            gsap.to(o, {
                x: m,
                y: w,
                duration: 1.5,
                ease: "elastic.out(1, 0.3)"
            })
        } else
            i && (i = !1,
            gsap.to(o, {
                x: 0,
                y: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.3)"
            }))
    })
});
$(window).ready(function() {
    $(".button-video-stuck").hover(function() {
        gsap.to($(this).find(".fake-arrow-width"), {
            width: "100%",
            duration: .8,
            ease: "power2.inOut"
        }),
        gsap.to(this, {
            paddingLeft: "1.67rem",
            paddingRight: "4rem",
            backgroundColor: "#8ddd8d",
            color: "#131313",
            duration: .8,
            ease: "power2.inOut"
        }),
        gsap.to($(this).find(".icon-arrow-green-block"), {
            backgroundColor: "#131313",
            duration: .8,
            ease: "power2.inOut"
        }),
        gsap.to($(this).find(".icon-arrow-green-block svg"), {
            color: "#ffffff",
            duration: .8,
            ease: "power2.inOut"
        })
    }, function() {
        gsap.to($(this).find(".fake-arrow-width"), {
            width: "0%",
            duration: .8,
            ease: "power2.inOut"
        }),
        gsap.to(this, {
            paddingLeft: "4rem",
            paddingRight: "1.67rem",
            backgroundColor: "#131313",
            color: "#ffffff",
            duration: .8,
            ease: "power2.inOut"
        }),
        gsap.to($(this).find(".icon-arrow-green-block"), {
            backgroundColor: "#8ddd8d",
            duration: .8,
            ease: "power2.inOut"
        }),
        gsap.to($(this).find(".icon-arrow-green-block svg"), {
            color: "#131313",
            duration: .8,
            ease: "power2.inOut"
        })
    })
});
$(document).ready(function() {
    $(".button__gradient__item").each(function() {
        const o = $(this)
          , t = o.find(".button__gradient__link")
          , r = o.find(".button__gradient__toggle")
          , i = o.find(".button__gradient__bg")
          , n = o.find(".button__gradient__logo")
          , s = o.find(".button__gradient__button-text__wrapper");
        let e = !1;
        const c = 14;
        gsap.set(i, {
            opacity: 0,
            width: "30%",
            filter: "blur(70px)"
        }),
        gsap.set(r, {
            left: "0%",
            width: "6.11rem"
        }),
        gsap.set(s, {
            opacity: 0
        });
        function a() {
            if (e) {
                const d = o.width() - c * parseFloat(getComputedStyle(document.documentElement).fontSize);
                gsap.to(r, {
                    left: d + "px",
                    duration: .3,
                    ease: "power2.inOut"
                })
            }
        }
        o.hover(function() {
            e || gsap.to(i, {
                opacity: 1,
                duration: .5,
                ease: "power2.out"
            })
        }, function() {
            e || gsap.to(i, {
                opacity: 0,
                duration: .5,
                ease: "power2.in"
            })
        }),
        o.on("click", function(u) {
            if (!e) {
                u.preventDefault(),
                e = !0,
                gsap.to(i, {
                    width: "100%",
                    filter: "blur(0px)",
                    duration: .8,
                    ease: "power2.inOut"
                });
                const d = gsap.timeline({
                    delay: .1
                });
                d.to(r, {
                    width: c + "rem",
                    duration: .5,
                    ease: "power2.inOut"
                }),
                d.to(n, {
                    opacity: 0,
                    duration: .3,
                    ease: "power2.inOut"
                }, "-=0.3"),
                d.to(s, {
                    opacity: 1,
                    duration: .3,
                    ease: "power2.inOut"
                }, "-=0.3"),
                d.to(r, {
                    left: () => o.width() - c * parseFloat(getComputedStyle(document.documentElement).fontSize) + "px",
                    duration: 1,
                    ease: "power3.inOut"
                }, "-=0.3"),
                t.removeClass("pointer-none")
            }
        }),
        $(window).on("resize", a)
    })
});
$(document).ready(function() {
    const o = $(".services__button-logo.is-arrow");
    $(".tag__list");
    let t = "Agences";
    function r(c, a) {
        return c.find(".tag__item").get().sort( () => .5 - Math.random()).slice(0, a)
    }
    function i(c) {
        return gsap.to(c.find(".tag__item:not(.hidden)").get(), {
            y: 50,
            opacity: 0,
            duration: .5,
            stagger: .05,
            ease: "power2.in"
        })
    }
    function n(c) {
        const a = c.find(".tag__item:not(.hidden)");
        return gsap.set(a.get(), {
            y: -50,
            opacity: 0
        }),
        gsap.to(a.get(), {
            y: 0,
            opacity: 1,
            duration: .5,
            stagger: .05,
            ease: "power2.out"
        })
    }
    function s(c) {
        if (c === t) {
            const p = $(`.tag__list[data-name-services="${t}"]`);
            i(p).then( () => n(p));
            return
        }
        const a = gsap.timeline()
          , u = $(`.tag__list[data-name-services="${t}"]`)
          , d = $(`.tag__list[data-name-services="${c}"]`);
        u.length && (a.add(i(u)),
        a.set(u.get(), {
            display: "none"
        }, ">")),
        d.length && (a.set(d.get(), {
            display: "flex"
        }, ">"),
        d.find(".tag__item").removeClass("hidden"),
        a.add(n(d))),
        t = c
    }
    const e = $('.tag__list[data-name-services="Agences"]');
    if (e.length) {
        e.css("display", "flex");
        const c = $(r(e, 5));
        e.find(".tag__item").addClass("hidden"),
        c.removeClass("hidden"),
        n(e)
    }
    o.on("click", function() {
        const c = $(this).attr("data-name-services");
        s(c)
    })
});
$(document).ready(function() {
    const o = $(".services__button-block");
    function t(r) {
        const i = $(r)
          , n = i.find(".services__button-logo")
          , s = i.find(".services__button-logo.is-arrow")
          , e = i.find(".services__button-logo:not(.is-arrow)");
        gsap.set(n.get(), {
            y: "22.9rem"
        }),
        e.each(function() {
            const a = $(this).find(".rotate");
            if (a.length) {
                const u = Math.random() * 360 - 180;
                gsap.set(a.get(0), {
                    rotationZ: u
                })
            }
        });
        function c() {
            const a = gsap.timeline();
            return a.to(s.get(0), {
                y: "-10rem",
                duration: 1.2,
                ease: "power2.inOut"
            }).to(s.get(0), {
                opacity: 0,
                duration: .4,
                ease: "power1.inOut"
            }, "-=0.3"),
            a.to(e.get(), {
                y: "0rem",
                duration: 1,
                ease: "power2.out",
                stagger: .1
            }, "-=0.6"),
            e.each(function() {
                const u = $(this).find(".rotate");
                u.length && a.to(u.get(0), {
                    rotationZ: 0,
                    duration: 1.2,
                    ease: "power2.out"
                }, "-=1")
            }),
            a
        }
        s.on("click", c)
    }
    o.each(function() {
        t(this)
    })
});
$(document).ready(function() {
    $(".gradient-blur-bg").each(function() {
        const t = this;
        gsap.to(t, {
            x: "10%",
            y: "10%",
            rotation: 2,
            duration: 10,
            repeat: -1,
            yoyo: !0,
            ease: "sine.inOut"
        }),
        gsap.to(t, {
            scale: 1.1,
            duration: 15,
            repeat: -1,
            yoyo: !0,
            ease: "sine.inOut"
        })
    })
});
$(document).ready(function() {
    const o = $(".home-video__wrapper");
    let t = [];
    function r() {
        o.each(function(s) {
            const e = $(this)
              , c = e.find(".home-video__item__wrapper")
              , a = e.find(".button-icon.is-video-section")
              , u = e.find(".home-video__btn .heading-style-h3")
              , d = e.find(".video-be")
              , p = e.find(".home-video-btn__open")
              , h = p.find(".icon-arrow:not(.is-close)")
              , g = p.find(".icon-arrow.is-close");
            let f = Math.floor(Math.random() * d.length);
            gsap.set(c, {
                height: "4.72rem",
                width: "20rem",
                borderRadius: "2.78rem"
            }),
            gsap.set(a, {
                opacity: 0
            }),
            gsap.set(u, {
                opacity: 1
            }),
            gsap.set(d, {
                opacity: 0
            }),
            gsap.set(p, {
                left: "0.4rem"
            }),
            gsap.set(g, {
                opacity: 0
            });
            const l = gsap.timeline({
                paused: !0
            });
            l.to(c, {
                height: "32rem",
                width: "25rem",
                borderRadius: "2rem",
                duration: .8,
                ease: "power3.inOut"
            }).to(a, {
                opacity: 1,
                duration: .4,
                ease: "power2.inOut",
                onStart: () => a.addClass("pointer-events-auto")
            }, "-=0.6").to(u, {
                opacity: 0,
                duration: .4,
                ease: "power2.inOut"
            }, "-=0.4").to(d.eq(f), {
                opacity: 1,
                duration: .4,
                ease: "power2.inOut"
            }, "-=0.4").to(p, {
                left: "98%",
                xPercent: -100,
                duration: .6,
                ease: "power3.inOut"
            }, "-=0.3").to(h, {
                opacity: 0,
                duration: .2,
                ease: "power2.inOut"
            }, "-=0.3").to(g, {
                opacity: 1,
                duration: .2,
                ease: "power2.inOut"
            }, "-=0.2"),
            t[s] = l;
            const m = () => {
                gsap.to(d, {
                    opacity: 0,
                    duration: .4,
                    ease: "power2.inOut"
                })
            }
            ;
            e.on("mouseenter", function() {
                window.innerWidth > 991 && (l.play(),
                e.addClass("z-index-2"))
            }),
            e.on("mouseleave", function() {
                window.innerWidth > 991 && (l.reverse(),
                m(),
                e.removeClass("z-index-2"),
                a.removeClass("pointer-events-auto"))
            }),
            p.on("click", function(w) {
                w.stopPropagation(),
                window.innerWidth > 991 && (l.progress() === 0 || l.reversed() ? (l.play(),
                e.addClass("z-index-2")) : (l.reverse(),
                m(),
                e.removeClass("z-index-2"),
                a.removeClass("pointer-events-auto")))
            })
        })
    }
    function i() {
        t.forEach(s => {
            s && s.kill()
        }
        ),
        gsap.set($(".home-video__item__wrapper, .button-icon.is-video-section, .home-video__btn .heading-style-h3, .video-be, .home-video-btn__open, .icon-arrow"), {
            clearProps: "all"
        })
    }
    function n() {
        window.innerWidth > 991 ? (i(),
        r(),
        o.removeClass("mobile-layout")) : (i(),
        o.addClass("mobile-layout"))
    }
    n(),
    $(window).on("resize", n)
});
$(document).ready(function() {
    const o = $(".button-drop")
      , t = $(".dropdown__list__wrapper")
      , r = t.find(".dropdown__item");
    let i, n = window.innerWidth <= 991;
    gsap.set(t.get(0), {
        opacity: 0,
        visibility: "hidden",
        backdropFilter: "blur(0px)"
    }),
    gsap.set(r.get(), {
        opacity: 0,
        y: 10
    });
    function s() {
        gsap.to(t.get(0), {
            duration: .3,
            opacity: 1,
            visibility: "visible",
            backdropFilter: "blur(8px)",
            ease: "power2.out"
        }),
        gsap.to(r.get(), {
            duration: .3,
            opacity: 1,
            y: 0,
            stagger: .05,
            ease: "power2.out"
        })
    }
    function e() {
        gsap.to(t.get(0), {
            duration: .3,
            opacity: 0,
            backdropFilter: "blur(0px)",
            ease: "power2.in",
            onComplete: () => {
                gsap.set(t.get(0), {
                    visibility: "hidden"
                })
            }
        }),
        gsap.to(r.get(), {
            duration: .2,
            opacity: 0,
            y: 10,
            stagger: .03,
            ease: "power2.in"
        })
    }
    function c(a) {
        n ? a.type === "click" && (t.css("visibility") === "hidden" ? s() : e()) : a.type === "mouseenter" ? (clearTimeout(i),
        s()) : a.type === "mouseleave" && (i = setTimeout(function() {
            t.is(":hover") || e()
        }, 100))
    }
    o.on("mouseenter mouseleave click", c),
    t.on("mouseleave", function() {
        n || (i = setTimeout(function() {
            o.is(":hover") || e()
        }, 100))
    }),
    $(window).on("resize", function() {
        n = window.innerWidth <= 991
    })
});

function s() {
    if (localStorage.getItem("loaderPlayed") === "true") {
        document.querySelector(".loader").style.display = "none",
        myFade();
        return
    }
    const e = document.querySelector(".loader")
      , t = document.querySelector(".logo-loader-gsap")
      , o = ["#131313", "#faaafa", "#e0e055", "#8ddd8d", "#6066ee", "#FFFFFF"];
    setTimeout( () => {
        gsap.fromTo(t, {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            onComplete: () => {
                gsap.to(t, {
                    y: "-100%",
                    duration: 1,
                    ease: "power3.out",
                    onComplete: n
                })
            }
        })
    }
    , 200);
    function n(a=0) {
        if (a >= o.length) {
            r();
            return
        }
        gsap.to(e, {
            backgroundColor: o[a],
            duration: .2,
            ease: "power1.inOut",
            onComplete: () => {
                a < o.length - 1 ? setTimeout( () => n(a + 1), 300) : r()
            }
        })
    }
    function r() {
        gsap.to(e, {
            y: "-100%",
            duration: 1.2,
            ease: "power3.out",
            onComplete: () => {
                e.style.display = "none",
                myFade(),
                localStorage.setItem("loaderPlayed", "true")
            }
        })
    }
}
function i(e=!1) {
    const t = document.querySelector(".page-wrapper");
    return e ? (gsap.set(t, {
        opacity: 1,
        y: 0
    }),
    Promise.resolve()) : gsap.to(t, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.inOut"
    })
}
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        const t = e.target.closest("a");
        if (t) {
            const o = t.getAttribute("href");
            (o.startsWith("/") || o.includes("/projets")) && (e.preventDefault(),
            i().then( () => {
                window.location.href = o
            }
            ))
        }
    }
    ),
    window.addEventListener("popstate", e => {
        i(!0).then( () => {}
        )
    }
    )
}
);
function d() {
    const e = localStorage.getItem("lastVisit")
      , t = new Date().getTime()
      , o = 60 * 60 * 1e3;
    return !e || t - parseInt(e) > o ? (localStorage.setItem("lastVisit", t.toString()),
    !0) : !1
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
    d() && s()
}
) : d() && s();
window.onpageshow = function(e) {
    if (e.persisted) {
        const t = document.querySelector(".page-wrapper");
        gsap.set(t, {
            opacity: 1,
            y: 0
        })
    }
}
;
export {s as i};

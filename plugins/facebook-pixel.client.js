/* eslint-disable */
export default defineNuxtPlugin((nuxtApp) => {
    /*
     ** Only run on client-side and only in production mode
     */
    // if (process.env.NODE_ENV !== "production") return
  
    /*
     ** Initialize Facebook Pixel Script
     */
    if (process.client) {
      !(function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );
      fbq('init', '1623671601696404')
  
      // Wait for the router to be ready before setting up the afterEach hook
      nuxtApp.hooks.hook('app:created', () => {
        nuxtApp.$router.afterEach((to, from) => {
          /*
           ** Fire a page view on each route change
           */
          console.log("fire pageview")
          fbq("track", "PageView")
        })
      })
    }
  })

  
export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    // telegram
    if (url.pathname.includes('bot1790677966')) {
      url.hostname = 'tg.xunhs.workers.dev'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    else{
      // default redirect to blog
      url.hostname = 'snow.xunhs.workers.dev'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};

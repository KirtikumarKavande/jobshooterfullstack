const preventGoingBack = (url) => {
  window.addEventListener("popstate", function () {
    window.history.pushState(null, null, url);
  });
};
export default preventGoingBack;

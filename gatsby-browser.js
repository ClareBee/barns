exports.onRouteUpdate = (location) => {
  if (location.hash) {
    setTimeout(() => {
      document.querySelector(`${location.hash}`).scrollIntoView({behavior: "smooth"});
    }, 0);
  }
};

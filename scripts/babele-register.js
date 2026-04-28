Hooks.once("init", () => {
  if (typeof game.babele !== "undefined") {
    game.babele.register({
      module: "rils-plutonium-kr",
      lang: "ko",
      dir: "languages/ko",
    });
  }
});

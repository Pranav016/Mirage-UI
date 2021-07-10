jQuery(document).ready(function ($) {
  $("ul.cards").on("click", function () {
    $(this).toggleClass("transition");
  });

  $("ul.card-stacks").on("click", function () {
    $(this).toggleClass("transition");
  });

  $("ul.cards-split").on("click", function () {
    $(this).toggleClass("transition");
  });

  $("ul.cards-split-delay").on("click", function () {
    $(this).toggleClass("transition");
  });
});

/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

(function () {
  const selectors = {
    form: "#MultilevelSearch",
  };
  const form = document.querySelector(selectors.form);

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const ServerFamily = formData.get("ServerFamily").replaceAll(" ", "+");
    const ServerType = formData.get("ServerType").replaceAll(" ", "+");
    const ServerCapacity = formData.get("ServerCapacity").replaceAll(" ", "+");

    const url = `/collections/all?sort_by=title-ascending&filter.p.product_type=${ServerType}&filter.p.vendor=${ServerFamily}&filter.p.m.custom.capacity=${ServerCapacity}`;

    console.log(url);

    window.location.href = url;
  });
})();

// (function () {
//   let interval = setInterval(() => {
//     const selectors = {
//       easySearch: "#easysearch-search",
//       easySearchWidget: ".easysearch-widget",
//     };
//     const easySearch = document.querySelector(selectors.easySearch);
//     console.log(easySearch);
//     if (easySearch) {
//       clearInterval(interval);
//       easySearch.addEventListener("click", (e) => {
//         console.log(e);
//         e.preventDefault();

//         if (e.target.getAttribute("disabled")) return;

//         const easySearchWidget = easySearch.closest(selectors.easySearchWidget);
//         const allSelect = easySearchWidget.querySelectorAll("select");

//         const brand = allSelect[0].selectedOptions[0].value.replaceAll(
//           " ",
//           "+"
//         );
//         const serverType = allSelect[1].selectedOptions[0].value.replaceAll(
//           " ",
//           "+"
//         );
//         const serverCapacity = allSelect[2].selectedOptions[0].value.replaceAll(
//           " ",
//           "+"
//         );
//         const url = `/collections/all?sort_by=title-ascending&filter.p.product_type=${serverType}&filter.p.vendor=${brand}&filter.p.m.custom.capacity=${serverCapacity}`;

//         console.log(url);

//         window.location.href = url;
//       });
//     }
//   }, 1000);
// })();

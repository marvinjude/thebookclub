import hideOnClickOutside from "./handleClickOutside";

/**Handles - slide-in, slide-out, click-out for sidebar */

document.addEventListener("DOMContentLoaded", function () {
  const sidebarTogglers = document.querySelectorAll(".toggle-sidebar");
  const sidebar = document.querySelector("#sidebar");
  const widthWhenHidden = "-352px";

  for (const sidebarToggler of sidebarTogglers) {
    sidebarToggler.onclick = () => {
      const isClosed =
        sidebar.style.marginLeft == widthWhenHidden ||
        sidebar.style.marginLeft == "";

      const isOpened = sidebar.style.marginLeft == "0px";

      // Close
      if (isOpened) {
        sidebar.style.marginLeft = widthWhenHidden;
        return;
      }

      // Open
      if (isClosed) {
        sidebar.style.marginLeft = "0px";

        //handle clickout for sidebar element
        setTimeout(() => {
          hideOnClickOutside(sidebar, [sidebarToggler], (elem) => {
            elem.style.marginLeft = widthWhenHidden;
          });
        });

        return;
      }
    };
  }
});

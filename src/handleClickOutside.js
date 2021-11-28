/**
 * @param {Element} element The element to perfrom action on when there is click-out
 * @param {[Element]} excludList - Element to excluse from being able to trigger action
 * @param {function} action function to call on click-out
 */

function hideOnClickOutside(element, excludList, action) {
  const outsideClickListener = (event) => {
    if (
      !element.contains(event.target) &&
      isVisible(element) &&
      [...excludList].every((elemItem) => !elemItem.isSameNode(event.target))
    ) {
      if (action) action(element);

      removeClickListener();
    }
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
  };

  document.addEventListener("click", outsideClickListener);
}

function isVisible(elem) {
  return (
    !!elem &&
    !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
  );
}

export default hideOnClickOutside;

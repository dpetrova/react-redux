import React from "react";

const Link = ({ href, children, className }) => {
  // helper function to navigate between links without full page reload
  const onClick = (event) => {
    //handling open in a new tab when (Ctrl + click) on a link
    //metaKey for Mac, ctrlKey for Windows
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // prevent default full page reload
    event.preventDefault();
    // sync url with the current content
    window.history.pushState({}, "", href);
    // emit navigation event that url has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;

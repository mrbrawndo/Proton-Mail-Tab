function openProtonMail() {
  browser.tabs.create({url: "https://mail.protonmail.com/"});
}
browser.browserAction.onClicked.addListener(openProtonMail);

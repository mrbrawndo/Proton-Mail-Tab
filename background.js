function openProtonMail() {
  browser.tabs.create({url: "https://mail.proton.me/u/0/inbox"});
}
browser.browserAction.onClicked.addListener(openProtonMail);

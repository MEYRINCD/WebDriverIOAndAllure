class Homepage {
  get DeclineCookieBtn() {
    return $('[aria-label="close and deny"]');
  }

  ClickDeclineCookieBtn() {
    this.DeclineCookieBtn.click();
  }
}
module.exports = new Homepage();

class Footer {
  get ElasticSIPTrunkingPricingBtn() {
    return $('.ecnksg [href="/pricing/elastic-sip"]');
  }
  get SMSAPIPricingBtn() {
    return $('.ecnksg [href="/pricing/messaging"]');
  }
  get VoiceAPIPricingBtn() {
    return $('.ecnksg [href="/pricing/call-control"]');
  }
  get WirelessPricingBtn() {
    return $('.ecnksg [href="/pricing/iot-data-plans"]');
  }
  get DeveloperDocsBtn() {
    return $('.ecnksg [href*="docs/v2"]');
  }
  get BlogBtn() {
    return $('.ecnksg [href="/resources"]');
  }
  get ResourceHubBtn() {
    return $('.ecnksg [href="/learn"]');
  }
  get ReleaseNotesBtn() {
    return $('.ecnksg [href="/release-notes"]');
  }
  get WirelessCellularIoTBtn() {
    return $('.kZyHWE [href="/products/iot-sim-card"]');
  }
  get GetASIMCardBtn() {
    return $('.jnwLUb [href="/sign-up"]');
  }
  ClickElasticSIPBtn() {
    this.ElasticSIPTrunkingPricingBtn.click();
  }
  ClickSMSAPIPricingBtn() {
    this.SMSAPIPricingBtn.click();
  }
  ClickVoiceAPIPricingBtn() {
    this.VoiceAPIPricingBtn.click();
  }
  ClickWirelessPricingBtn() {
    this.WirelessPricingBtn.click();
  }
  ClickDeveloperDocsBtn() {
    this.DeveloperDocsBtn.click();
  }
  ClickBlogBtn() {
    this.BlogBtn.click();
  }
  ClickResourceHubBtn() {
    this.ResourceHubBtn.click();
  }
  ClickReleaseNotesBtn() {
    this.ReleaseNotesBtn.click();
  }
  ClickWirelessCellularIoTBtn() {
    this.WirelessCellularIoTBtn.click();
  }
  ClickGetASIMCardBtn() {
    this.GetASIMCardBtn.click();
  }
}
module.exports = new Footer();

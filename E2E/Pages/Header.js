class Header {
  get NumberLookUpBtn() {
    return $('.ctVOEX [href="/number-lookup"]');
  }
  get ProductsCategory() {
    return $(".khahzD:nth-child(1)");
  }
  get NumberLookUpImage1() {
    return $('[alt="Phone Number Lookup"]');
  }
  get ExploreUseCasesBtn() {
    return $('[href*="v2/messaging"]');
  }
  get SignUpBtnNumberLookUp() {
    return $('.jnwLUb [href="/sign-up"]');
  }
  get SolutionsCategory() {
    return $(".khahzD:nth-child(3)");
  }
  get BusinessToCustomerBrandsBtn() {
    return $('[href*="business-to-consumer-brands"]');
  }
  get GetInTouchWithOurExpertsBtn() {
    return $('.knQTTI [href="/contact-us"]');
  }
  get ResourcesCategory() {
    return $(".khahzD:nth-child(6)");
  }
  get MissionControlBtn() {
    return $('[href*="mission-control"]');
  }
  get PricingCategory() {
    return $(".khahzD:nth-child(10)");
  }
  get CountrySelect() {
    return $(".cJtkQG:nth-child(2) .dCDohY:nth-child(1)");
  }
  get SMSAPiBtn() {
    return $('.ctVOEX [href="/pricing/messaging"');
  }
  get ThingsYouShouldKnowBtn() {
    return $('[aria-controls="citation-sms"]');
  }
  get CompanyCategory() {
    return $(".khahzD:nth-child(8)");
  }
  get AboutTelnyxBtn() {
    return $('.iWLbyI [href="/company/about"]');
  }
  get SeeTheBrandBtn() {
    return $('[title="Telnyx Brand"]');
  }
  get AllSolutionsBtn() {
    return $('[href="/solutions"]');
  }
  get ExploreB2CSolutions() {
    return $("li:nth-child(2) .edVhEG");
  }
  get SeeAllUseCasesBtn() {
    return $('[href="/use-cases"]');
  }
  get ExploreAIVoiceAnalytics() {
    return $("li:nth-child(9) .edVhEG");
  }
  get EmailInputLineHP() {
    return $('[name="email"]');
  }
  get TryForFreeBtnHP() {
    return $('[type="submit"]');
  }
  get NetworkCategory() {
    return $('.jgxzDd [href*="global-ip-network"]');
  }
  get TryOutNetworkBtn() {
    return $('href="/sign-up"');
  }
  get SupportCenterBtn() {
    return $(".blLdCs:nth-child(3)");
  }
  get GettingStartedBtn() {
    return $('[href*="133094-getting-started"]');
  }
  get RightArrow() {
    return $('[aria-label="Next Item"]');
  }
  get LeftDot() {
    return $('[aria-label="Slide 1"]');
  }
  get OomaLinkText() {
    return $('[href="/customer-stories/ooma"]');
  }
  get OomaPageOomaLinkText() {
    return $('.fIjqZs [href="https://www.ooma.com/"]');
  }
  get GlobalNumbersButton() {
    return $('.iWLbyI [href="/products/phone-numbers"]');
  }
  get SignUpForFreePhoneNumbersPage() {
    return $('.ERDSm[href="/sign-up"]');
  }
  get CallTrackingBtn() {
    return $('.hxgeKl [href="/use-cases/call-tracking"]');
  }
  get CustomerEngagementPlatforms() {
    return $('[href*="customer-engagement-platforms"]');
  }
  get ScheduleACallWithOurExpertBtn() {
    return $('.bgmPIp [href="/contact-us"]');
  }

  ClickNumberLookUpBtn() {
    this.NumberLookUpBtn.click();
  }

  HoverProductsCategory() {
    this.ProductsCategory.moveTo();
  }
  ClickExploreUseCasesBtn() {
    this.ExploreUseCasesBtn.click();
  }
  ClickSignUpBtnNumberLookUp() {
    this.SignUpBtnNumberLookUp.click();
  }
  HoverSolutionsCategory() {
    this.SolutionsCategory.moveTo();
  }
  ClickBusinessToCustomerBrandsBtn() {
    this.BusinessToCustomerBrandsBtn.click();
  }
  ClickGetInTouchWithOurExpertsBtn() {
    this.GetInTouchWithOurExpertsBtn.click();
  }
  HoverResourcesCategory() {
    this.ResourcesCategory.moveTo();
  }
  ClickMissionControlBtn() {
    this.MissionControlBtn.click();
  }
  HoverPricingCategory() {
    this.PricingCategory.moveTo();
  }
  ChooseOptionUACountrySelect() {
    this.CountrySelect.selectByAttribute("href", "/pricing/messaging/ua");
  }
  ClickSMSAPiBtn() {
    this.SMSAPiBtn.click();
  }
  ClickThingsYouShouldKnowBtn() {
    this.ThingsYouShouldKnowBtn.click();
  }
  HoverCompanyCategory() {
    this.CompanyCategory.moveTo();
  }
  ClickAboutTelnyxBtn() {
    this.AboutTelnyxBtn.click();
  }
  ClickSeeTheBrandBtn() {
    this.SeeTheBrandBtn.click();
  }
  ClickAllSolutionsBtn() {
    this.AllSolutionsBtn.click();
  }
  ClickExploreB2CSolutions() {
    this.ExploreB2CSolutions.click();
  }
  ClickSeeAllUseCasesBtn() {
    this.SeeAllUseCasesBtn.click();
  }
  ClickExploreAIVoiceAnalytics() {
    this.ExploreAIVoiceAnalytics.click();
  }
  InputEmailInputLineHP() {
    this.EmailInputLineHP.addValue("afadfadadf@gmail.com");
  }
  ClickTryForFreeBtnHP() {
    this.TryForFreeBtnHP.click();
  }
  ClickNetworkCategory() {
    this.NetworkCategory.click();
  }
  ClickTryOutNetworkBtn() {
    this.TryOutNetworkBtn.click();
  }
  ClickSupportCenterBtn() {
    this.SupportCenterBtn.click();
  }
  ClickGettingStartedBtn() {
    this.GettingStartedBtn.click();
  }
  ClickRightArrow() {
    this.RightArrow.click();
  }
  ClickLeftDot() {
    this.LeftDot.click();
  }
  ClickOomaLinkText() {
    this.OomaLinkText.click();
  }
  ClickOomaPageOomaLinkText() {
    this.OomaPageOomaLinkText.click();
  }
  ClickGlobalNumbersButton() {
    this.GlobalNumbersButton.click();
  }
  ClickSignUpForFreeBtn() {
    this.SignUpForFreePhoneNumbersPage.click();
  }
  ClickCallTrackingBtn() {
    this.CallTrackingBtn.click();
  }
  ClickCustomerEngagementPlatforms() {
    this.CustomerEngagementPlatforms.click();
  }
  ClickScheduleACallWithOurExpertBtn() {
    this.ScheduleACallWithOurExpertBtn.click();
  }
}
module.exports = new Header();

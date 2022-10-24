const Homepage = require("../E2E/Pages/Homepage");
const Header = require("../E2E/Pages/Header");
const Footer = require ("../E2E/Pages/Footer")
describe("Telnyx Test Suite", async () => {
  beforeEach(async () => {
    await browser.url("https://telnyx.com/");
    await Homepage.ClickDeclineCookieBtn();
    await browser.setWindowSize(1920, 1080);
  });

  it("Should check functionality of Number lookup option", async () => {
    await Header.HoverProductsCategory();
    await Header.ClickNumberLookUpBtn();
    await browser.pause(1000)
    await expect($('[alt="Phone Number Lookup"]')).toBeDisplayed();
    await expect($(".eCGKsC")).toBeDisplayed();
    await Header.ClickExploreUseCasesBtn();
    await expect(browser).toBeDisplayed(
      "https://developers.telnyx.com/docs/v2/messaging"
    );
    await browser.url("https://telnyx.com/number-lookup");
    await Header.ClickSignUpBtnNumberLookUp();
    await expect(browser).toBeDisplayed("https://telnyx.com/sign-up");
  });

  it("Check Functionality of Business to costumer page", async () => {
    await Header.HoverSolutionsCategory();
    await Header.ClickBusinessToCustomerBrandsBtn();
    await expect($(".jJeNul")).toBeDisplayed();
    await expect(
      $('[alt="Business to Consumer Brands"]')
    ).toBeDisplayed();
    await Header.ClickGetInTouchWithOurExpertsBtn();
    await expect(browser).toHaveUrl("https://telnyx.com/contact-us");
  });

  it('Check functionality of Mission Control Portal page', async () =>{
    await Header.HoverResourcesCategory()
    await Header.ClickMissionControlBtn()
    await browser.pause(1000)
    await expect($('.jJeNul')).toBeDisplayed()
    await expect($('[alt="Mission Control Portal"]')).toBeDisplayed()
    await expect($('[alt="icon features scale"]')).toBeDisplayed()
    await expect($('[alt="icon products fast-porting"]')).toBeDisplayed()
    await expect($('[alt="icon features global-network"]')).toBeDisplayed()
    await expect($('.dXXeag')).toBeDisplayed()
  })
  it('Check functionality of WhatsApp Business API page', async() =>{
    await Header.HoverPricingCategory()
    await Header.ClickSMSAPiBtn()
    await Header.ChooseOptionUACountrySelect()
    await expect($('#price-cell-tf-sms')).toBeDisplayed()
    await Header.ClickThingsYouShouldKnowBtn()
    await expect($('[aria-controls="citation-sms"]')).toHaveAttr('aria-expanded','true')
    await expect($('.kyytju:nth-child(1) .igPgHM')).toBeDisplayed()

  })
  it('Check functionality of Pricing category element', async () =>{
    await expect($('.ecnksg:nth-child(3) .gRLahy')).toBeDisplayed()
    await Footer.ClickElasticSIPBtn()
    await expect(browser).toHaveUrl('https://telnyx.com/pricing/elastic-sip')
    await Footer.ClickSMSAPIPricingBtn()
    await expect(browser).toHaveUrl('https://telnyx.com/pricing/messaging')
    await Footer.ClickVoiceAPIPricingBtn()
    await expect(browser).toHaveUrl('https://telnyx.com/pricing/call-control')
    await Footer.ClickWirelessPricingBtn()
    await expect(browser).toHaveUrl('https://telnyx.com/pricing/iot-data-plans')
  })
  it('Check functionality of Resources category elements', async () =>{
    await expect($('.ecnksg:nth-child(2) .gRLahy')).toBeDisplayed()
    await Footer.ClickDeveloperDocsBtn()
    await expect(browser).toHaveUrlContaining('https://developers.telnyx.com/docs/v2')
    await browser.switchWindow('https://telnyx.com/')
    await Footer.ClickBlogBtn()
    await expect(browser).toHaveUrl('https://telnyx.com/resources')
    await Footer.ClickResourceHubBtn()
    await expect(browser).toHaveUrl('https://telnyx.com/learn')
    await Footer.ClickReleaseNotesBtn()
    await expect(browser).toHaveUrl('https://telnyx.com/release-notes')
  })
  it('Check functionality of About Telnyx page', async () =>{
    await Header.HoverCompanyCategory()
    await Header.ClickAboutTelnyxBtn()
    await expect($('.iNtgdk')).toBeDisplayed()
    await expect($('[title="About Us"]')).toBeDisplayed()
    await expect($('.bFEOhH:nth-child(1) ')).toBeDisplayed()
    await expect($('[title="Telnyx Chicago Office"]')).toBeDisplayed()
    await Header.ClickSeeTheBrandBtn()
    await expect(browser).toHaveUrl('https://telnyx.com/company/our-brand')
  })
  it('Check functionality of all solutions page', async () =>{
    await Header.HoverSolutionsCategory()
    await Header.ClickAllSolutionsBtn()
    await expect($('.juvWNo')).toBeDisplayed()
    await expect($('[alt="Business to Consumer Brands"]')).toBeDisplayed()
    await expect($('li:nth-child(2) .edVhEG')).toBeClickable()
    await Header.ClickExploreB2CSolutions()
    await expect(browser).toHaveUrl('https://telnyx.com/solutions/business-to-consumer-brands')
  })
  it('Check functionality of All Use Cases', async () =>{
    await Header.HoverSolutionsCategory()
    await Header.ClickSeeAllUseCasesBtn()
    await expect($('.juvWNo')).toBeDisplayed()
    await expect($('[alt="AI & Voice Analytics"]')).toBeDisplayed()
    await expect($('li:nth-child(9) .edVhEG')).toBeClickable()
    await Header.ClickExploreAIVoiceAnalytics()
    await expect(browser).toHaveUrl('https://telnyx.com/use-cases/conversational-ai')
  })
  it('Check functionality of Iot-sim-card page', async () =>{
    await Footer.ClickWirelessCellularIoTBtn()
    await expect($('.eCGKsC')).toBeDisplayed()
    await expect($('[alt="iot sim cards"]')).toBeDisplayed()
    await Footer.ClickGetASIMCardBtn()
    await expect(browser).toHaveUrl('https://telnyx.com/sign-up')
  })
  it('Check functionality of Email form at homepage', async ()=>{
    await Header.InputEmailInputLineHP()
    await Header.ClickTryForFreeBtnHP()
    await expect(browser).toHaveUrl('https://telnyx.com/sign-up?email=afadfadadf@gmail.com')
  })
  it('Check User can use Network option or not', async ()=>{
    await Header.ClickNetworkCategory()
    await Header.ClickTryOutNetworkBtn()
    await expect(browser).toHaveUrl('https://telnyx.com/sign-up')
  })
  it('Check visibility of header categories', async ()=>{
    await expect($('.khahzD:nth-child(1)')).toBeDisplayed()
    await expect($('.khahzD:nth-child(3)')).toBeDisplayed()
    await expect($('.khahzD:nth-child(5)')).toBeDisplayed()
    await expect($('.khahzD:nth-child(6)')).toBeDisplayed()
    await expect($('.khahzD:nth-child(8)')).toBeDisplayed()
    await expect($('.khahzD:nth-child(10)')).toBeDisplayed()
  })
  it('Check Support-center option is available', async ()=>{
    await Header.ClickSupportCenterBtn()
    await Header.ClickGettingStartedBtn()
    await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/133094-getting-started')
  })
  it('Check visibility of footer social media buttons', async ()=>{
    await expect($('.ecnksg:nth-child(6) .fwhIL:nth-child(1)')).toBeDisplayed()
    await expect($('.ecnksg:nth-child(6) .fwhIL:nth-child(2)')).toBeDisplayed()
    await expect($('.ecnksg:nth-child(6) .fwhIL:nth-child(3)')).toBeDisplayed()
  })
  it('Check functionality of comments elements',async () =>{
    await Header.ClickRightArrow()
    await expect($('.fCiTXY:nth-child(2) .kziOTL')).toBeDisplayed()
    await Header.ClickLeftDot()
    await expect ($('.fCiTXY:nth-child(1) .kziOTL')).toBeDisplayed()
  })
  it('Check functionality of customer story option', async ()=>{
    await Header.ClickOomaLinkText()
    await Header.ClickOomaPageOomaLinkText()
    await expect(browser).toHaveUrl('https://www.ooma.com/')
  })
  it('Check functionality Phone-numbers option', async () =>{
    await Header.HoverProductsCategory()
    await Header.ClickGlobalNumbersButton()
    await Header.ClickSignUpForFreeBtn()
    await expect(browser).toHaveUrl('https://telnyx.com/sign-up')
  })
  it('Check functionality of call-tracking page', async () =>{
    await Header.HoverSolutionsCategory()
    await Header.ClickCallTrackingBtn()
    await expect($('.jJeNul')).toBeDisplayed()
    await expect($('[alt="__Call Tracking__"]')).toBeDisplayed()
    await expect($('.knQTTI:nth-child(2) .kpXaqz:nth-child(2)')).toBeDisplayed()
    await expect($('[src*="teaser_automated-porting_3x.png"]')).toBeDisplayed()
  })
  it('Check functionality of CEP page', async () =>{
    await Header.HoverSolutionsCategory()
    await Header.ClickCustomerEngagementPlatforms()
    await expect($('.jJeNul')).toBeDisplayed()
    await expect($('[alt="Customer Engagement Platforms "]')).toBeDisplayed()
    await Header.ClickScheduleACallWithOurExpertBtn()
    await expect(browser).toHaveUrl('https://telnyx.com/contact-us')
  })

});

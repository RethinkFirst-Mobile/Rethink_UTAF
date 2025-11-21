import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class CalendarPage extends MobileBasePage {
  get calendarPageTitle() {
    return driver.isAndroid
      ? $('(//android.widget.TextView[@text="Calendar"])[1]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get calendarMenuIcon() {
    return driver.isAndroid
      ? $('(//androidx.compose.ui.platform.ComposeView//android.view.View[2]//android.view.View[2])[3]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get showArchiveToggle() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Show Archive"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get showCancelledToggle() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Show Cancelled"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get appointNeedVerification() {
    return driver.isAndroid
      ? $('new UiSelector().textContains("Appointments Need Verification")').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get todaysDate() {
    return driver.isAndroid
      ? $('new UiSelector().className("android.widget.TextView").textContains("Today")').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get dragHandle() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Drag handle"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get appointmentDescIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Appointment description"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get noAppointmentsAvail() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="No appointments available to select"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
}
export const calendarPage = new CalendarPage();

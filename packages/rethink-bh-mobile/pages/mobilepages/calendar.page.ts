import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class CalendarPage extends MobileBasePage {
  get calendarPageTitle() {
    return driver.isAndroid
      ? $('(//android.widget.TextView[@text="Calendar"])[1]').getElement()
      : $('//XCUIElementTypeStaticText[@name="Calendar"]').getElement();
  }

  get calendarMenuIcon() {
    return driver.isAndroid
      ? $('(//android.widget.TextView[@text="Calendar"])[2]').getElement()
      : $('//XCUIElementTypeImage[@name="calendar" and @label="calendar"]').getElement();
  }

  get showArchiveToggle() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Show Archive"]').getElement()
      : $('//XCUIElementTypeSwitch[@name="Show Archived"]').getElement();
  }

  get showCancelledToggle() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Show Cancelled"]').getElement()
      : $('//XCUIElementTypeSwitch[@name="Show Cancelled"]').getElement();
  }

  get appointNeedVerification() {
    return driver.isAndroid
      ? $('//android.widget.TextView[contains(@text,"Appointments Need Verification")]').getElement()
      : $(
          '//XCUIElementTypeNavigationBar//XCUIElementTypeStaticText[contains(@label,"Needs Verification")]',
        ).getElement();
  }

  get todaysDate() {
    return driver.isAndroid
      ? $('//android.widget.TextView[contains(@text,"Today")]').getElement()
      : $('//XCUIElementTypeButton[starts-with(@name, "Today")]').getElement();
  }

  get dragHandle() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Drag handle"]').getElement()
      : $('#iOSLocator').getElement();
  }

  get appointmentDescIcon() {
    return driver.isAndroid
      ? $('//android.view.View[@content-desc="Appointment description"]').getElement()
      : $('(//XCUIElementTypeImage[@name="calendar"])[1]').getElement();
  }

  get noAppointmentsAvail() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="No appointments available to select"]').getElement()
      : $(
          '//XCUIElementTypeStaticText[@name="You have no appointments scheduled on the selected dates."]',
        ).getElement();
  }
}
export const calendarPage = new CalendarPage();

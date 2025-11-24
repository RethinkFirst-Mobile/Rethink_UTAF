import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class AppointmentDetailPage extends MobileBasePage {
  get appointmentDetailPageTitle() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Appointment Detail"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }

  get saveButton() {
    return driver.isAndroid ? $('//android.widget.TextView[@text="Save"]').getElement() : $('#iOSLocator').getElement(); // locator for Android //need to update
  }
}
export const appointmentDetailPage = new AppointmentDetailPage();

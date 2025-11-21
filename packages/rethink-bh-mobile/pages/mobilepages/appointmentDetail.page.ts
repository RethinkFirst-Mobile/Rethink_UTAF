import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class AppointmentDetailPage extends MobileBasePage {
  get appointmentDetailPageTitle() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Appointment Detail"]').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
  get saveButton() {
    return driver.isAndroid
      ? $('//androidx.compose.ui.platform.ComposeView//android.view.View[3]/android.widget.Button').getElement()
      : $('#iOSLocator').getElement(); // locator for Android
  }
}
export const appointmentDetailPage = new AppointmentDetailPage();

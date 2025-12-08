import { MobileBasePage } from '../../../../globals/mobile/mobile-base.page';

class AppointmentDetailPage extends MobileBasePage {
  get appointmentDetailPageTitle() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Appointment Detail"]').getElement()
      : $('accessibility id:Appointment Detail').getElement();
  }

  get saveButton() {
    return driver.isAndroid
      ? $('//android.widget.TextView[@text="Save"]').getElement()
      : $('accessibility id:Save').getElement();
  }

  // Add more getters below as needed, for example:
  // get cancelButton() {
  //   return driver.isAndroid
  //     ? $('//android.widget.TextView[@text="Cancel"]').getElement()
  //     : $('accessibility id:Cancel').getElement();
  // }
}

export const appointmentDetailPage = new AppointmentDetailPage();

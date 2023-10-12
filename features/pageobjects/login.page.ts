import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {


    public open () {
        return super.open();
    }
}

export default new LoginPage();

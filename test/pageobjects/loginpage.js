class LoginPage {

    get mainForm() {
        return $('[class="wrapper"]')
    }

    get Logo() {
        return $('#logomini')
    }

    get formHeader() {
        return $('h1')
    }

    get usernameInput() {
        return $('input[name="username"]')
    }

    get passwordInput() {
        return $('input[name="password"]')
    }

    get loginButton() {
        return $('input[type="submit"]')
    }

    get usernameError() {
        return $('input[name="username"] ~ span[class="help-block"]')
    }

    get passwordError() {
        return $('input[name="password"] ~ span[class="help-block"]')
    }

    get fakeDashboardSelector() {
        return $('#dashboard')
    }

}

module.exports = LoginPage
const axios = require('axios');
const LoginPage = require('../pageobjects/loginpage')

class Methods extends LoginPage {

    async loginWithCredentials({ username = '', password = '' }) {
        await this.usernameInput.clearValue();
        await this.usernameInput.addValue(username)
        await this.passwordInput.clearValue();
        await this.passwordInput.addValue(password)
        await this.loginButton.click();
    }

    async checkLinkValidation(link) {
        return await axios({
            method: 'get',
            url: link
        }).then(response => response.headers['content-type']).catch(error => error)
    }

}

module.exports = Methods
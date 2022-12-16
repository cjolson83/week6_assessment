const { By } = require('selenium-webdriver')

const draw = async (driver, searchTerm) => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
}

const botDisplay = async (driver, searchTerm) => {
    await driver.findElement(By.name('bot-btn')).click()
    await driver.sleep(2000)
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
}


module.exports = {
    draw,
    botDisplay
}
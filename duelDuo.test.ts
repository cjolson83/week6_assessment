import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {draw, botDisplay} = require('./duelFunctions.js')

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Bot choices are displayed when Draw button is clicked', async () => {
    draw(driver)
    await driver.sleep(2000)
})

test('Bot choices are displayed in Your Duo section once Add to Duo button is clicked', async () => {
    botDisplay(driver)
    await driver.sleep(2000)
})
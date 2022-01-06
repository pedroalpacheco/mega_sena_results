const puppeteer = require('puppeteer');

const urlalvo = 'http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena';

(async () => {
  const browser = await puppeteer.launch({
    // headless: false
  });
  const page = await browser.newPage();

  await page.goto(urlalvo);
  await page.waitForSelector('.ng-binding.ng-scope')
  const resultados = await page.$$eval('li.ng-binding.ng-scope', (options) => options.map(

    (option) => `${option.innerText}`,
  ));
  console.log(resultados)


  await browser.close();
})();
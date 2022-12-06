### Comparison Test
I use this tool to compare 2 sites,<br/>
typically when I rebuild a site,<br/>
I want it to look exactly like the original<br/>
TODO: Generate a side-by-side report
```
npm run cypress -- run --spec cypress/e2e/tools/comparison.cy.js --config video=false,viewportWidth=1920,viewportHeight=1080 && npm run cypress -- run --spec cypress/e2e/tools/comparison.cy.js --config video=false,viewportWidth=428,viewportHeight=900
open ./cypress/e2e/tools/comparison.html
```
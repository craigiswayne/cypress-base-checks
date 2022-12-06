const viewports = [
    {
        name: 'desktop',
        width: 1920,
        height: 1080
    },
    {
        name: 'mobile',
        width: 428,
        height: 900
    }
]

/**
 * @see https://learn.microsoft.com/en-us/windows/apps/design/layout/screen-sizes-and-breakpoints-for-responsive-design
 */
const microsoftViewports = [
    {
        name: 'small',
        width: 480
    },
    {
        name: 'medium',
        width: 641
    },
    {
        name: 'large',
        width: 1008
    }
]

/**
 * @see https://www.browserstack.com/guide/ideal-screen-sizes-for-responsive-design
 */

const domains = [
    'https://www.microgaming.co.uk',
    'http://localhost:3000'
]

const paths = [
    '#',
    'about',
    'culture-and-values',
    'history',
    'awards',
    'responsible-gaming',
    'sustainability-pledge',
    'what-we-do',
    'platform-systems',
    'sports-betting',
    'news',
    'contact',
    'privacy-policy'
]

const filteredPaths = paths.filter(p => p === 'platform-systems')

domains.forEach(domain => {
    describe(`Screenshots for domain: ${domain}`, () => {
        filteredPaths.forEach(path => {
            it(`Screenshot for Path: ${path}`, () => {
                const vp = {
                    width: Cypress.config('viewportWidth'),
                    height: Cypress.config('viewportHeight')
                }
                const url = new URL(`${domain}/${path}`)
                cy.visit(url.toString())
                    .then(() => {
                        cy.wait(1000 * 5)
                        cy.screenshot(`/${vp.width}x${vp.height}/${url.pathname}-${url.hostname}`, {
                            overwrite: true,
                            capture: 'fullPage'
                        })
                    })
                // viewports.forEach(vp => {
                    // cy.viewport(vp.width, vp.height)
                    //     .then(() => {
                    //
                    //     })

                // })
            })
        })
    })
})

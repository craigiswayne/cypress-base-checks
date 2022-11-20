const viewports = [
    {
        width: 1920,
        height: 1080
    },
    {
        width: 428,
        height: 900
    }

]
const domains = [
    'https://www.microgaming.co.uk',
    'http://localhost:3000'
]
const paths = [
    '',
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
viewports.forEach( vp => {
    domains.forEach( domain => {
        describe(`Screenshots for domain: ${domain} - viewport ${vp.width}x${vp.height}`, () => {
            paths.forEach( path => {
                it(`Screenshot for ${path}`, () => {
                    const url = new URL(`${domain}/${path}`)
                    cy.viewport(vp.width, vp.height)
                    cy.visit(url.toString())
                        .then( () => {
                            cy.screenshot(`comparisons/${vp.width}x${vp.height}/${url.pathname}-${url.hostname}`, {overwrite: true})
                        })
                })
            })
        })
    })
})

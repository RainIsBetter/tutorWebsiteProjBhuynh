import posthog from 'posthog-js'

const posthogKey = 'phc_yc90xRdbu5wgq5wVAU5kfvIRvcMC92OrDNqiW8FKOx0'
const posthogHost = 'https://us.i.posthog.com'

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    defaults: '2026-01-30',
    capture_pageview: 'history_change',
  })
}

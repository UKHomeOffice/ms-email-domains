const emailDomainList = require('./email-domain-list.json')
const domainFunctions = require('./domain-functions.js')

module.exports = emailDomainList

module.exports.isValidDomain = (domain) => (domainFunctions.isOnDomainList(domain) || domainFunctions.isOnExtensionsList(domain))

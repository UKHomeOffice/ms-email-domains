const emailDomainList = require('./email-domain-list.json')
const emailExtensions = require('./email-extensions.json')

module.exports = emailDomainList

module.exports.isValidDomain = (domain) => (this.isOnDomainList(domain) || this.isOnExtensionsList(domain))

module.exports.isOnDomainList = (userEmailDomain) => (emailDomainList.includes(userEmailDomain))

module.exports.isOnExtensionsList = (userExtension) => emailExtensions.some((ext) => userExtension.endsWith(ext))

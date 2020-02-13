const emailExtensions = require('./email-extensions.json')
const emailDomainList = require('./email-domain-list.json')

module.exports = {
  isOnDomainList: (userEmailDomain) => (emailDomainList.includes(userEmailDomain)),

  isOnExtensionsList: (userExtension) => emailExtensions.some((ext) => userExtension.endsWith(ext))
}

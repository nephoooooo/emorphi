export default (options, variant) =>
  options[variant] || options[options.__DEFAULT] || {}

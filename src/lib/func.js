
exports.arrayUnique = arrayUnique
exports.getIP = getIP

// 剔除数组中的重复项
function arrayUnique (array) {
  return Array.from(new Set(array))
}

// 获取 IP 地址
function getIP () {
  var interfaces = require('os').networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
  return ''
}

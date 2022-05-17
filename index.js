module.exports = function testmod(d) {
  d.hook('C_REQUEST_USER_PAPERDOLL_INFO', '*', (e) => { e.zoom = true; return true })
}

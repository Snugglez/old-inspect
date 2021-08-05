module.exports = function testmod(d) {
  d.dispatch.addDefinition('C_REQUEST_USER_PAPERDOLL_INFO', 4, [
        ['name', 'refString'],
        ['serverId', 'uint32'],
        ['zoom', 'bool'],
        ['name', 'string']
      ], false);
  d.hook('C_REQUEST_USER_PAPERDOLL_INFO', 4, (e) => {e.zoom = true; return true})

}

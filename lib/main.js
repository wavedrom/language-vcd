exports.activate = function () {
  if (!atom.grammars.addInjectionPoint) return

  atom.grammars.addInjectionPoint('source.vcd', {
    type: 'preproc_arg',
    language (arg) { return 'vcd' },
    content (arg) { return arg }
  })

}

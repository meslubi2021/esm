import SafeFunction from "../builtin/function.js"

import shared from "../shared.js"
import unapply from "../util/unapply.js"

function init() {
  return {
    __proto__: null,
    bind: unapply(SafeFunction.prototype.bind)
  }
}

export default shared.inited
  ? shared.generic.Function
  : shared.generic.Function = init()
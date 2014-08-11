class @Ctl
  constructor: (@doc) ->
    console.log @doc
  meth: ->
    if @doc._s_n is "_ctl"
      return DATA.findOne(_id: @doc._ctl_id)
    else if @doc._s_n is "data"
      return DATA.findOne(_id: @doc._did)

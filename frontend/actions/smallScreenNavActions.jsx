export const SHOW_OPTIONS = "SHOW_OPTIONS"
export const HIDE_OPTIONS = "HIDE_OPTIONS"


export const showOptions = () => {
  return ({
    type: SHOW_OPTIONS
  })
}

export const hideOptions = () => {
  return ({
    type: HIDE_OPTIONS
  })
}

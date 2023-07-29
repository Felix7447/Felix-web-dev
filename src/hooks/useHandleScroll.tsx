import React, { useState, useEffect } from "react"
const bodyScrollLock = require('body-scroll-lock');

const useHandleScroll = (toggle: boolean) => {
  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;
  
  const [body, setBody] = useState<Window | null>(null)

  useEffect(() => {
    setBody(window)
  }, [])

  if (!body) {
    return
  }

  return toggle ? disableBodyScroll(body) : enableBodyScroll(body)

}

export default useHandleScroll
import { useState, useEffect } from 'react'

function useSessionStorage(key, initialState) {
  const [state, setState] = useState(
    () => JSON.parse(window.sessionStorage.getItem(key)) || initialState,
  )

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default useSessionStorage

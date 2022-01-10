function Rehydration() {
  if (typeof window === 'undefined') {
    return <div>This is content of server side.</div>
  }

  return <div>This is the content of client side.</div>
}

export default Rehydration
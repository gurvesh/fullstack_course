const Notification = ({ message, type }) => {

  if (message === null) {
    return null
  }

  return (
    <div className={(type === "normal") ? "normal-notice" : "error-notice"}>
      {message}
    </div>
  )
}

export default Notification
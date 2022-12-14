import './MyForm.css'

const MyForm = () => {
  const doNotAct = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  const onDrop = e => {
    doNotAct(e)
    doDrop(e)
  }

  const doDrop = e => {
    const dataTransfer = e.dataTransfer
    const files = dataTransfer.files
    console.log('files here', files)
  }

  return (
    <div className='my-form'>
      <div>Drag and Drop Form</div>
      <div
        className='drop-zone'
        onDragEnter={e => doNotAct(e)}
        onDragOver={e => doNotAct(e)}
        onDrop={e => onDrop(e)}
      >
        Drag and drop file here
      </div>
    </div>
  )
}

export default MyForm

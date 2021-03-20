import './../styles/Backdrop.css'

const Backdrop = ({ close }) => {
  return (
    <div className='backdrop' onClick={close} />
  )
}

export default Backdrop

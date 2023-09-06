function Error({ children }) {
  return (
    <div className='bg-red-600 text-white text-center p-3 font-bold uppercase mb-3 rounded-lg'>
        { children }
    </div> 
  )
}

export default Error
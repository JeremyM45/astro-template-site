export default function DynamicDropMenuItem({ isVisible, data, visibleComponent }){

  return(
    <>
      {isVisible && visibleComponent === data.key ?
        <div className='absolute p-40 px-80 border border-lime-300 left-60 bg-white'>
          <div className="flex">
            <h1 className="absolute left-0 top-0 p-6 text-lg">{data.link}</h1>
          </div>
          
        </div>
        :
        <></>
      }
    </>
    
  )
}
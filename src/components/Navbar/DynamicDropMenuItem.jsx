import DynamicMenusCard from "./DynamicMenuCard"

export default function DynamicDropMenuItem({ isVisible, data, visibleComponent }){
  return(
    <>
      {isVisible && visibleComponent === data.key ?
        <div className='absolute p-60 px-80 left-60 bg-white'>
          <div className="absolute left-0 top-0">
              <h1 className="border-b border-slate-300  mx-6 mt-4 pb-2 text-lg pt-2">{data.title} Product Overview</h1>
              <div className="flex flex-row">
                <ul className="flex flex-col w-full space-y-6 mx-4 pt-4">
                  {data.data.listItems.map(function(item, i){
                    ;
                    return(
                    <li key={i} className="mt-4 w-full">
                    <a href="#" className="border-b border-transparent hover:border-red-300 hover:text-red-300">{item}</a>
                  </li>
                  )
                  })}
                  
                </ul>
                <div className="grid grid-cols-2">
                  <DynamicMenusCard data={data.data.cards[0]}/>
                  <DynamicMenusCard data={data.data.cards[1]}/>
                  <DynamicMenusCard data={data.data.cards[2]}/>
                  <DynamicMenusCard data={data.data.cards[3]}/>
                </div>
              </div>
              
            
              
          </div>
                
        </div>
        
        :
        <></>
      }
    </>
    
  )
}
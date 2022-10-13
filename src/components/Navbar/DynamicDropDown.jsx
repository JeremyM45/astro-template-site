import { useState } from 'react'
import DynamicDropMenuItem from './DynamicDropMenuItem';

export default function DynamicDropDown({ title, links}){

  const [isVisible, setIsVisible] = useState(false);
  const [visibleCompnent, setvisibleCompnent] = useState(99);
  const [componenData, setComponentData] = useState({});

  function handleDynamicMenu(data){
    if(!isVisible){setIsVisible(true)}
    if(visibleCompnent != data.key){setvisibleCompnent(data.key)}
    if(componenData != data.link){setComponentData(data)}
  }

  return (
    <div onMouseLeave={() => setIsVisible(false)}>
      <div className="relative group" >
        
        <button className="flex flex-row border-b border-transparent items-center w-full px-4 py-4 mt-2 text-base text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:border-red-300 hover:text-red-300">
            <span>{title}</span>
        </button>
        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
        <DynamicDropMenuItem isVisible={isVisible} data={componenData} visibleComponent={visibleCompnent}/>
            <div className="px-2 w-60 pt-2 pb-4 bg-white shadow-lg rounded-lg">
              <ul className="grid grid-cols-1 gap-4 p-2">
                {
                  links.map(function(link, i) {
                    const data = {link: link, key: i}
                    return (
                      <div key={i} onMouseOver={() => handleDynamicMenu(data)}>
                        <li>
                          <div >
                            <a  href="/"  className="flex flex-row mr-6 p-2 border-b border-transparent hover:border-red-300 hover:text-red-300">
                              <span >{link}</span>
                            </a>
                          </div>
                        </li>
                      </div>
                    )
                  }
                )}
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}
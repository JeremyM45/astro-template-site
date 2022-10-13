export default function DynamicMenusCard({ data }){
  return(
    <>{data ? 
      <div className="p-2 pt-8">
        <h1 className="text-red-400">{data.cardTitle}</h1>
        <p className="text-sm">{data.cardDescription}</p>
      </div>
      :
      <></>}
    </>
  )
}
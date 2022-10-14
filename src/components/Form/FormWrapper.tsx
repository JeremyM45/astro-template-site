import { ReactNode } from 'react'

type FromWrapperProps = {
  title: string;
  children: ReactNode
}

export default function FormWrapper({ title, children }: FromWrapperProps){
  return(
    <>
      <h2 className='text-center m-0 mb-8'>{title}</h2>
      <div className='grid gap-4 justify-start grid-cols-[auto minmax(auto, 400px)]'>{children}</div>
    </>
  )
}
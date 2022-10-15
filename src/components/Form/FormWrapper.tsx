import { ReactNode } from 'react'

type FromWrapperProps = {
  title: string;
  children: ReactNode;
}

export default function FormWrapper({ title, children }: FromWrapperProps){
  return(
    <>
      <h2 className='text-center font-bold mt-6  mx-0 text-lg'>{title}</h2>
      <div>{children}</div>
    </>
  )
}
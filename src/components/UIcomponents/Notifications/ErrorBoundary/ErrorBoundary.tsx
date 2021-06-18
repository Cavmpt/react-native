import React, {useContext} from 'react'

import {Context, ContextType} from '../../../../store/Provider'

import './ErrorBoundary.scss'

export interface IErrorBoundaProps {
  children: React.ReactNode
}

export default function ErrorBounda(props: IErrorBoundaProps): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {errorMessage} = context

  const {children} = props
  return (
    <>
      {errorMessage !== '' && (
        <div className='error'>
          <div className='error__message'>{errorMessage}</div>
        </div>
      )}
      {children}
    </>
  )
}

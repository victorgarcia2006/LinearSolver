import React from 'react'
import PageLayout from '../components/PageLayout'
import H1 from '../components/typography/Heading1'

function sel() {
  return (
    <PageLayout title='Sistemas de Ecuaciones Lineales'>
      <div className="flex flex-col w-11/12 gap-y-40">
        <header className="flex flex-col items-center">
          <H1 isPurple>
            <p>Sistemas de Ecuaciones Lineales</p>
          </H1>
        </header>
      </div>
    </PageLayout>
  )
}

export default sel

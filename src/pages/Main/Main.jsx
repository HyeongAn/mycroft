import React from 'react'
import { testInfo } from '../../assets/test'
import { MainSection } from './styled'
import Card from '../../components/Card/Card'

const Main = () => {
  return (
    <MainSection>
      {testInfo.map((data, idx) => (
        <Card info={data} key={idx} />
      ))}
    </MainSection>
  )
}

export default Main

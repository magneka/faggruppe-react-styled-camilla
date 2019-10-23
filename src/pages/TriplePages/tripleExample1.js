import React from 'react'
import TripleContainer from '../../components/displaycontainers/tripleContainer'
import LorumDemo from "../../components/Pages/Democontainers/lorumDemo"
import LorumEnglishDemo from "../../components/Pages/Democontainers/lorumEnglish"
import TableDemo from "../../components/Pages/Democontainers/tabledemo"

const TripleExample1 = () =>
  <TripleContainer

    tlHeader="Table Demo"
    tlBody={<TableDemo />}

    trHeader="Lorum Ipsum translated"
    trBody={<LorumEnglishDemo />}

    botHeader='Lorum demo'
    botBody={<LorumDemo />}
  />

export default TripleExample1
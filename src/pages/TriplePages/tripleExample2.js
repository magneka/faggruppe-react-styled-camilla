import React from 'react'
import TripleContainer from '../../components/displaycontainers/tripleContainer'
import LorumDemo from "../../components/Pages/Democontainers/lorumDemo";
import LorumEnglishDemo from "../../components/Pages/Democontainers/lorumEnglish";
import TableDemo from "../../components/Pages/Democontainers/tabledemo";

const TripleExample2 = () =>
  <TripleContainer

    tlHeader="Lorum Ipsum"
    tlBody={<LorumDemo />}

    trHeader="Lorum Ipsum translated"
    trBody={<LorumEnglishDemo />}

    botHeader='Table demo'
    botBody={<TableDemo />}
  />

export default TripleExample2
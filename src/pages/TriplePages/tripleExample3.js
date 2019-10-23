import React from 'react'
import TripleContainer from '../../components/displaycontainers/tripleContainer'
import LorumDemo from "../../components/Pages/Democontainers/lorumDemo";
import LorumEnglishDemo from "../../components/Pages/Democontainers/lorumEnglish";
import TableDemo from "../../components/Pages/Democontainers/tabledemo";

const TripleExample3 = () =>  <TripleContainer 
      botHeader="Lorum Ipsum"
      botBody={<LorumDemo />}
      
      tlHeader="Lorum Ipsum translated"
      tlBody={<LorumEnglishDemo />}
      
      trHeader='Table demo'
      trBody={<TableDemo/>}
    />    
      
export default TripleExample3
import { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import './BlockList.scss'
import Table from './Table';

function BlockList() {
  const [dataTable, setDataTable] = useState([
      {id:uuidv4() ,block_name:'A1',block_no:'A1',assigned:'Krishna',},
      {id:uuidv4() ,block_name:'A1',block_no:'A1',assigned:'Krishna',},
      {id:uuidv4() ,block_name:'A1',block_no:'A1',assigned:'Krishna',},
      {id:uuidv4() ,block_name:'A1',block_no:'A1',assigned:'Krishna',},
      {id:uuidv4() ,block_name:'A1',block_no:'A1',assigned:'Krishna',},
    ]);

  
  const column = [
    { heading: 'S.no', value: '#' },
    { heading: 'Block Name', value: 'block_name' },
    { heading: 'Block_Number', value: 'block_no' },
    { heading: 'Assinged to', value: 'assigned' },
    {heading:'Actions',value:'icon'}
  ]

  return (
    <div className="BlockList">
      <div className='BlockList-Header'>
            <div className='header'>
                   <h1>Blocks</h1>
             </div>
              <div className='BlockList-Button'>
                  <button>Add Block</button>
              </div>
      </div>
      <hr />
      <Table data={dataTable} column={column} />
    </div>
  );
}

export default BlockList;
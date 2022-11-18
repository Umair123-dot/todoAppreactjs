import React, { useState } from 'react'
import { Spinner } from 'reactstrap';

const Loading = () => {
    const [loading,setLoading]=useState(false);
  return (
    <div>
      <Spinner>
      Loading...
    </Spinner>
    </div>
  )
}

export default Loading
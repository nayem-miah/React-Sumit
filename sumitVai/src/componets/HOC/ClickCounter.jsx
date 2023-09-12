
import withCounter from './WithCounter'

const ClickCounter=(props)=> {
    const {count, handeler} = props
    return (
      <div>
          <button onClick={handeler} type='button' > Clicked {count} times</button>
        </div>
    )
  }
  
export default withCounter(ClickCounter)




import withCounter from './withCounter'


const ClickCount = (props)=> {
    const {count,countHandler} = props
  return (
    <div>
       <button onClick={countHandler} type='button'> Clicked {count} times </button>
    </div>
  )
}

export default withCounter(ClickCount)
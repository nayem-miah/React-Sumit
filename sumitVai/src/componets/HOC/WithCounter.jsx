import { Component} from 'react'

const withCounter = (OrginalComponent)=>{
    
    
   class NewComponent extends Component {

        state={
            count: 0
        }
        ClickHandler = () => {

            this.setState({count: this.state.count + 1})
            
        }

      render() {

        const {count} = this.state
        return <OrginalComponent count = {count} handeler = {this.ClickHandler}/>

      }
    }
    return NewComponent
    
}

export default withCounter
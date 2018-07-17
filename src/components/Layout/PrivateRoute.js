import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const { dataUser } = this.props


// {console.log(this.props.dataUser, ' <----- dataUSer')}
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route  {...rest} render={(props)=>(
        dataUser.token === true
        ? <Component />
        : <Redirect to={{
            pathname="/admin/login",
            // state: { from: props.location }
        }} />
    )} />
)

const mapStateToProps = (state) =>{
    return {
        dataUser: state.postUserLogin.userLogin
    }
}

const mapDispatchToProps = () => {
    return {
    }
}

const PrivateRouteRedux = connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)

// export default PrivateRouteRedux
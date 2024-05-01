import axios from 'axios'

var fetchUserRequest = () => {
  return {
    type:'FETCH_USER_REQUEST'
  }
}
var fetchUserSuccess = (users) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload:users
  };
};
var fetchUserFailure = (err) => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload:err
  };
};

export var fetchUsers = () => {
  return (diapatch) => {//REDUX NUNCHI VASTUNDE 
    diapatch(fetchUserRequest())


    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data)
        diapatch(fetchUserSuccess(res.data))
      
      })
      .catch((err) => {
        console.log(err)
        diapatch(fetchUserFailure(err.message))
    })
    
  }
}
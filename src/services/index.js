import axios from 'axios';

export const fetchSomeData = () => {
    return axios.get('https://api.themoviedb.org/3/movie/76341' ,{
        headers: {
            Authorisation: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODdhODk0NmQwNjU4Mjk4ZjllMTE0ZDM3ZmRlODA3MSIsInN1YiI6IjVmZmZlMGI4NTk0Yzk0MDAzZjkwN2JmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DcgnBEtOFEeyjInMbXChGd6c30KDj3fa507OJSnNPtM'
        }
    })
}
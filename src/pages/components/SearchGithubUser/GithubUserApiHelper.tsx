import axios from 'axios'
import {GithubUserData} from '../../../interfaces/GithubUserData'

export const fetchGithubUser = async (username: string): Promise<GithubUserData> => {
  var userQuery = await axios
    .get(`https://api.github.com/users/${username}`)
    .then((res) => res.data)

  return userQuery
}

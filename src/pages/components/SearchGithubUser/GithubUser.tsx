import {useQuery} from '@tanstack/react-query'
import Image from 'next/image'
import {fetchGithubUser} from './GithubUserApiHelper'

const GithubUser: React.FC<{username: string}> = ({username}) => {
  const userQuery = useQuery([username], () => fetchGithubUser(username))
  const data = userQuery.data

  if (userQuery.isLoading) {
    return <p>...Loading</p>
  }

  if (userQuery.isError) {
    return <p>Sorry, the input received was not valid</p>
  }

  return (
    <div>
      <div className="w-64 h-64 lg:w-96 lg:h-96">
        <Image
          src={data.avatar_url}
          alt="Picture of the user"
          width="500"
          height="500"
          layout="responsive"></Image>
      </div>
      <p>Name: {data.name}</p>
      <p>Bio: {data.bio}</p>
      <p>Location: {data.location}</p>
    </div>
  )
}

export default GithubUser

import {useState, ChangeEvent} from 'react'
import GithubUser from './GithubUser'
import useDebounce from '../../utils/useDebounce'

const SearchGithubUser: React.FC = () => {
  const [searchUser, setSearchUser] = useState<string>('')
  const debouncedSearchUser = useDebounce(searchUser, 500)

  const onUserSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value

    setSearchUser(input)
  }

  return (
    <div className="w-screen h-screen flex flex-auto items-center justify-center">
      <div className="flex flex-col items-center justify-center h-1/2">
        <label htmlFor="searchGithubUser" className="text-3xl font-bold">
          Search Github User:
        </label>
        <input
          type="text"
          name="searchGithubUser"
          value={searchUser}
          onChange={onUserSearchChange}
          className="text-xl font-bold"></input>
        <div className="p-2"></div>
        {debouncedSearchUser && debouncedSearchUser.length > 0 && (
          <GithubUser username={debouncedSearchUser}></GithubUser>
        )}
      </div>
    </div>
  )
}

export default SearchGithubUser

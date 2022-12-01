import { Box, List, ListItem, ListIcon, Divider, Center, LinkOverlay, LinkBox } from '@chakra-ui/layout'
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import { usePlaylist } from '../lib/hooks'

const navMenu = [
    {
        name: 'Home',
        icon: MdHome,
        route: '/'
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: '/search'
    },
    {
        name: 'Your Library',
        icon: MdLibraryMusic,
        route: '/library'
    },
]
const musicMenu = [
    {
        name: 'Create PlayList',
        icon: MdPlaylistAdd,
        route: '/'
    },
    {
        name: 'Favorites',
        icon: MdFavorite,
        route: '/favorites'
    },
]
// const playLists = new Array(8).fill(1).map((_, i) => `Playlist ${i + 1}`)

const Sidebar = () => {
    const {playlists} = usePlaylist()
  return (
    <Box width="100%" height="calc(100vh - 100px)" bg="#000" paddingX="10px" color="gray">
        <Box paddingY="20px" height="100%">
            <Box width="120px" marginBottom="20px" paddingX="20px">
                <Image src="/logo.svg" alt='logo' height={60} width={120} />
            </Box>

            <Box marginBottom="20px">
                <List spacing={2}>
                    {
                        navMenu.map(({name, icon, route}) => {
                            return (
                                <ListItem paddingX="20px" fontSize="16px" key={name}>
                                    <LinkBox>
                                        <Link href={route} passHref>
                                            <LinkOverlay>
                                                <ListIcon as={icon} color="white" marginRight="10px" />
                                                {name}
                                            </LinkOverlay>
                                        </Link>
                                    </LinkBox>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>

            <Box marginBottom="10px">
                <List spacing={2}>
                    {
                        musicMenu.map(({name, icon, route}) => {
                            return (
                                <ListItem paddingX="20px" fontSize="16px" key={name}>
                                    <LinkBox>
                                        <Link href={route} passHref>
                                            <LinkOverlay>
                                                <ListIcon as={icon} color="white" marginRight="10px" />
                                                {name}
                                            </LinkOverlay>
                                        </Link>
                                    </LinkBox>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>

            <Divider bg="gray.800" />

            <Box height="65%" overflow="auto" paddingY="20px">
                <List spacing={2}>
                    {playlists.map(playlist => (
                        <ListItem paddingX="20px" key={playlist.id}>
                            <LinkBox>
                                <Link href={{
                                    pathname: '/playlist/[id]',
                                    query: { id: playlist.id },
                                    }} passHref>
                                    <LinkOverlay>
                                        {playlist.name}
                                    </LinkOverlay>
                                </Link>
                            </LinkBox>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    </Box>
  )
}

export default Sidebar
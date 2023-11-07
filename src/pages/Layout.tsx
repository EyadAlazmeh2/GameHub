import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {
  return (<>
    <NavBar />
    <Box padding={2}>
      <Outlet />
    </Box>
  </>
  )
}

export default Layout
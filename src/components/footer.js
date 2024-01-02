import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; Based on{' '}
      {
        <Link href="https://www.craftz.dog/" target="_blank">
          @craftzdog
        </Link>
      }{' '}
      - &copy; {new Date().getFullYear()} Gauthier Swartz.
    </Box>
  )
}

export default Footer

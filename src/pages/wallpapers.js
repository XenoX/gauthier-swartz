import {
  Container,
  Heading,
  Box,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'
import WallpaperThumbnailList from '../components/wallpaper-thumbnail-list'

const Wallpapers = () => (
  <Layout title="Wallpapers">
    <Container>
      <Box
        align="center"
        my={4}
        p={4}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
      >
        <em>Click on a wallpaper to open it in original size.</em>
      </Box>

      <P>
        This collection is my favorites wallpapers from different sources but
        many came from{' '}
        <Link
          href="https://github.com/archcraft-os/archcraft-wallpapers"
          target="_blank"
        >
          archcraft-wallpapers
        </Link>
        . None are mine. You can take them for personnal use, at least.
      </P>

      <Heading as="h2" fontSize={20} my={4}>
        Catppuccin - up to 5K
      </Heading>
      <WallpaperThumbnailList
        numOfImages={5}
        urlForImage={i =>
          `/images/wallpapers/catppuccin/w-${String(i).padStart(2, '0')}.jpg`
        }
      />

      <Heading as="h2" fontSize={20} my={4}>
        Minimal - up to 3K
      </Heading>
      <WallpaperThumbnailList
        numOfImages={5}
        urlForImage={i =>
          `/images/wallpapers/minimal/w-${String(i).padStart(2, '0')}.jpg`
        }
      />

      <Heading as="h2" fontSize={20} my={4}>
        Other - up to 5K
      </Heading>
      <WallpaperThumbnailList
        numOfImages={4}
        urlForImage={i =>
          `/images/wallpapers/other/w-${String(i).padStart(2, '0')}.jpg`
        }
      />
    </Container>
  </Layout>
)

export default Wallpapers
export { getServerSideProps } from '../components/chakra'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbDesk from '../../public/images/uses/desk.png'
import thumbChair from '../../public/images/uses/chair.png'
import thumbLaptop from '../../public/images/uses/laptop.png'
import thumbKeyboard from '../../public/images/uses/keyboard.webp'
import thumbMouse from '../../public/images/uses/mouse.webp'
import thumbHeadset from '../../public/images/uses/headset.webp'
import thumbSpeakers from '../../public/images/uses/speakers.png'
import thumbSoundCard from '../../public/images/uses/soundcard.webp'

const Posts = () => (
  <Layout title="Uses">
    <Container>
      <Box
        align="center"
        my={4}
        p={4}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        No sponsored products here
      </Box>
      <Heading as="h3" fontSize={20} mb={4}>
        Base
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Desk Kqueo Active 2 motors 180x80cm"
            thumbnail={thumbDesk}
            href="https://kqueo.fr/collections/la-gamme-active/products/active-180-bureau-assis-debout-2-moteurs-avec-plateau-180x80-cm-hauteur-reglable-de-75-a-122-cm?variant=42246798475477"
          />
          <GridItem
            title="Chair Corsair T3 Rush"
            thumbnail={thumbChair}
            href="https://www.corsair.com/fr/fr/p/gaming-chairs/cf-9010058-ww/t3-rush-fabric-gaming-chair-2023-grey-white-cf-9010058-ww"
          />
          <GridItem
            title="Dell XPS 9310 13inch"
            thumbnail={thumbLaptop}
            href="https://www.dell.com/fr-fr/shop/ordinateurs-portables-et-2-en-1/ordinateur-portable-xps-13/spd/xps-13-9315-laptop"
          />
        </SimpleGrid>
      </Section>

      <Heading as="h3" fontSize={20} mb={4}>
        Devices
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Logitech Pebble Keys 2 K380s"
            thumbnail={thumbKeyboard}
            href="https://www.logitech.com/fr-fr/products/keyboards/pebble-keys-2.html"
          />
          <GridItem
            title="Logitech Pro Wireless"
            thumbnail={thumbMouse}
            href="https://www.logitechg.com/fr-fr/products/gaming-mice/pro-wireless-mouse.910-005273.html"
          />
        </SimpleGrid>
      </Section>

      <Heading as="h3" fontSize={20} mb={4}>
        Sounds
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Logitech Pro Headset"
            thumbnail={thumbHeadset}
            href="https://www.logitechg.com/fr-fr/products/gaming-audio/pro-gaming-headset-passive-noise-cancellation.981-000812.html"
          />
          <GridItem
            title="Yamaha HS5"
            thumbnail={thumbSpeakers}
            href="https://www.thomann.de/fr/yamaha_hs_5.htm"
          />
          <GridItem
            title="Scarlett 2i2"
            thumbnail={thumbSoundCard}
            href="https://focusrite.com/products/scarlett-2i2"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'

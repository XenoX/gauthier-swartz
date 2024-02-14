import {
  Box,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Posts = () => (
  <Layout title="Uses">
    <Container>
      <Box
        align="center"
        my={4}
        p={4}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
      >
        No sponsored products here
      </Box>
      <Heading as="h3" fontSize={20} mb={4}>
        Hardware
      </Heading>

      <Section delay={0.1}>
        <List>
          <ListItem mb={0.8}>
            Desk:{' '}
            <Link
              href="https://kqueo.fr/collections/la-gamme-active/products/active-180-bureau-assis-debout-2-moteurs-avec-plateau-180x80-cm-hauteur-reglable-de-75-a-122-cm?variant=42246798475477"
              target="_blank"
            >
              Kqueo Active 2 motors 180x80cm
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            Chair:{' '}
            <Link
              href="https://www.corsair.com/fr/fr/p/gaming-chairs/cf-9010058-ww/t3-rush-fabric-gaming-chair-2023-grey-white-cf-9010058-ww"
              target="_blank"
            >
              Chair Corsair T3 Rush
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            Laptop:{' '}
            <Link
              href="https://www.dell.com/fr-fr/shop/ordinateurs-portables-et-2-en-1/ordinateur-portable-xps-13/spd/xps-13-9315-laptop"
              target="_blank"
            >
              Dell XPS 9310 13inch
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            Keyboard:{' '}
            <Link
              href="https://www.logitech.com/fr-fr/products/keyboards/pebble-keys-2.html"
              target="_blank"
            >
              Logitech Pebble Keys 2 K380s
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            Mouse:{' '}
            <Link
              href="https://www.logitechg.com/fr-fr/products/gaming-mice/pro-wireless-mouse.910-005273.html"
              target="_blank"
            >
              Logitech Pro Wireless
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            Headset:{' '}
            <Link
              href="https://www.logitechg.com/fr-fr/products/gaming-audio/pro-gaming-headset-passive-noise-cancellation.981-000812.html"
              target="_blank"
            >
              Logitech Pro Headset
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            Speakers:{' '}
            <Link
              href="https://www.thomann.de/fr/yamaha_hs_5.htm"
              target="_blank"
            >
              Yamaha HS5
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            Soundcard:{' '}
            <Link
              href="https://focusrite.com/products/scarlett-2i2"
              target="_blank"
            >
              Scarlett 2i2
            </Link>
          </ListItem>
        </List>
      </Section>

      <Heading as="h3" fontSize={20} mb={4}>
        Software
      </Heading>

      <Section delay={0.3}>
        <List>
          <ListItem mb={0.8}>
            OS:{' '}
            <Link href="https://archlinux.org/" target="_blank">
              Arch Linux
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            WM:{' '}
            <Link href="https://hyprland.org/" target="_blank">
              Hyprland
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            Bar:{' '}
            <Link href="https://github.com/Alexays/Waybar" target="_blank">
              Waybar
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            Terminal:{' '}
            <Link href="https://alacritty.org/" target="_blank">
              Alacritty
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            Color Scheme:{' '}
            <Link
              href="https://github.com/catppuccin/catppuccin"
              target="_blank"
            >
              Catppuccin Mocha
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            Notifications:{' '}
            <Link href="https://wayland.emersion.fr/mako/" target="_blank">
              Mako
            </Link>
          </ListItem>
          <ListItem mb={0.8}>
            Launcher:{' '}
            <Link href="https://hg.sr.ht/~scoopta/wofi" target="_blank">
              Wofi
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'

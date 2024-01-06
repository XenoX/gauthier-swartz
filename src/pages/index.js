import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ExternalLinkIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDiscord
} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        align="center"
        my={4}
        p={4}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
      >
        Hello, I&apos;m an indie developer based in France! 🇫🇷
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gauthier Swartz
          </Heading>
          <p>Digital Craftsman ( Developer / Formator / Tutor )</p>
          <Box py={3}>
            <em>
              <InfoOutlineIcon /> Currently learning Rust
            </em>
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/avatar.png"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Gauthier is a freelance and passionate full-stack developer based in
          Valenciennes. He loves learn new programming languages and frameworks.
          When not online, he is probably playing board games and video games.{' '}
          <Link href="https://catppuccin-website.vercel.app/" target="_blank">
            Catppuccin Color Palette
          </Link>{' '}
          lover (used on this website). BTW he uses Arch Linux.
        </Paragraph>
        <Box align="center" my={4}>
          <Link href="https://gaucode.fr" target="_blank">
            <Button
              variant="primary"
              scroll={false}
              rightIcon={<ExternalLinkIcon />}
            >
              My blog
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2023 to present</BioYear>
          <Paragraph>
            Educational tutor for{' '}
            <Link href="https://oclock.io/" target="_blank">
              O&apos;Clock
            </Link>
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2016 to 2023</BioYear>
          <Paragraph>
            Employee in an IT services company as web developer. Work for{' '}
            <Link href="https://auchan.fr" target="_blank">
              Auchan
            </Link>
            ,{' '}
            <Link href="https://uni-medias.com/" target="_blank">
              Uni-Medias
            </Link>
            ,{' '}
            <Link href="https://www.france.tv/" target="_blank">
              France Télévisions
            </Link>
            ,{' '}
            <Link href="https://decathlon.fr" target="_blank">
              Decathlon
            </Link>
            ,{' '}
            <Link href="https://lequipe.fr" target="_blank">
              L&apos;Équipe
            </Link>{' '}
            and{' '}
            <Link href="https://www.letudiant.fr/" target="_blank">
              L&apos;Étudiant
            </Link>
            .
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          <Paragraph>Graduated from SUPINFO (master in IT).</Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          <Paragraph>
            Former, tutor and mentor for different customers.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>1992</BioYear>
          <Paragraph>Born in Cambrai, France.</Paragraph>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Development, Music, Learning things, Board Games, Reading
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/xenox" target="_blank">
              <Button
                variant="inversed"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @XenoX
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/xenox_" target="_blank">
              <Button
                variant="inversed"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @xenox_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/gauthierswartz" target="_blank">
              <Button
                variant="inversed"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @gauthierswartz
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/gauthier-b-4a19531a3/"
              target="_blank"
            >
              <Button
                variant="inversed"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Gauthier B.
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Button
                variant="inversed"
                colorScheme="teal"
                leftIcon={<IoLogoDiscord />}
              >
                @xenoxswartz
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

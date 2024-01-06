import {
  Box,
  Container,
  Link,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbLaravel from '../../public/images/posts/introduction-a-laravel.jpg'
import thumbReact from '../../public/images/posts/introduction-a-react.jpg'
import thumbDebug from '../../public/images/posts/comment-debugger-un-projet-html-css-et-js.jpg'
import thumbInterview from '../../public/images/posts/reussir-son-entretien-d-embauche.jpg'
import thumbContribute from '../../public/images/posts/contribuer-a-un-projet-open-source.jpg'
import thumbDefense from '../../public/images/posts/bien-preparer-sa-soutenance.jpg'
import thumbDocker from '../../public/images/posts/decouvre-les-bases-de-docker.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Box
        align="center"
        my={4}
        p={4}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        My blog articles are in French 🇫🇷
      </Box>
      <Box align="center" my={4} p={4} borderRadius="lg">
        ℹ️ You can contribute to my blog, more information{' '}
        <Link href="https://gaucode.fr/contribuer" target="_blank">
          here
        </Link>
      </Box>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Introduction à Laravel"
            thumbnail={thumbLaravel}
            href="https://gaucode.fr/article/dev/introduction-a-laravel"
          />
          <GridItem
            title="Introduction à React"
            thumbnail={thumbReact}
            href="https://gaucode.fr/article/dev/introduction-a-react"
          />
          <GridItem
            title="Comment debugger un projet HTML, CSS et JS"
            thumbnail={thumbDebug}
            href="https://gaucode.fr/article/dev/comment-debugger-un-projet-html-css-et-js"
          />
          <GridItem
            title="Réussir son entretien d'embauche"
            thumbnail={thumbInterview}
            href="https://gaucode.fr/article/transverse/reussir-son-entretien-d-embauche"
          />
          <GridItem
            title="Contribuer à un projet open-source"
            thumbnail={thumbContribute}
            href="https://gaucode.fr/article/transverse/contribuer-a-un-projet-open-source"
          />
          <GridItem
            title="Bien préparer sa soutenance"
            thumbnail={thumbDefense}
            href="https://gaucode.fr/article/transverse/bien-preparer-sa-soutenance"
          />
          <GridItem
            title="Découvre les bases de Docker"
            thumbnail={thumbDocker}
            href="https://gaucode.fr/article/transverse/decouvre-les-bases-de-docker"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'

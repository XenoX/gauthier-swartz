import { SimpleGrid, Link, Image } from '@chakra-ui/react'

const WallpaperThumbnailList = ({ numOfImages, urlForImage }) => {
  return (
    <SimpleGrid columns={[3, 3, 4]} gap={6}>
      {Array.from(Array(numOfImages).keys())
        .map(i => i + 1)
        .map(i => (
          <Link key={i} href={urlForImage(i)} target="_blank">
            <Image
              key={i}
              borderRadius="lg"
              w="full"
              src={urlForImage(i)}
              alt=""
              mb={4}
            />
          </Link>
        ))}
    </SimpleGrid>
  )
}

export default WallpaperThumbnailList

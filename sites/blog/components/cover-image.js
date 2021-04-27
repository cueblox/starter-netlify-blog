import Link from 'next/link'
import cn from 'classnames'

function imageSource(file) {
  return 'https://brave-water-0fbfe4710.azurestaticapps.net/' + file
}
export default function CoverImage({ title, img, slug }) {
  const image = (
    <img
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={imageSource(img.file_name)}
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

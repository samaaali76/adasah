export default function PostContent({ content }) {
  const blocks = content.split(/\n\n+/)

  return (
    <div className="prose-content space-y-5">
      {blocks.map((block, i) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-3">
              {block.replace('## ', '')}
            </h2>
          )
        }
        if (block.startsWith('# ')) {
          return (
            <h1 key={i} className="text-3xl font-bold text-white mt-10 mb-3">
              {block.replace('# ', '')}
            </h1>
          )
        }
        return (
          <p key={i} className="text-neutral-300 leading-loose text-lg">
            {block}
          </p>
        )
      })}
    </div>
  )
}

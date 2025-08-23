export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <h2>about layout</h2>
        <section>{children}</section>
    </>
  )
}
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <h2>Marketing layout</h2>
        <section>{children}</section>
    </>
  )
}
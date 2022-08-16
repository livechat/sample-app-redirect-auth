type Props = {
  children: React.ReactNode
}

const ViewContainer = ({ children }: Props) => {
  return <div className="view-container">{children}</div>
}

export default ViewContainer

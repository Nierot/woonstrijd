
type TitleProps = {
    children?: React.ReactNode
    className?: string
}

const Title = (props: TitleProps) =>
<h1 className={`text-4xl pb-4 text-center ${props.className}`}>
    {props.children}
</h1>

export default Title

type TitleProps = {
    children?: React.ReactNode

}

const Title = (props: TitleProps) =>
<h1 className="text-4xl pb-4 text-center">
    {props.children}
</h1>

export default Title
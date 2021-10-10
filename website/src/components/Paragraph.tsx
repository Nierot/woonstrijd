
type ParagraphProps = {
    children?: React.ReactNode
    className?: string
}

const Paragraph: React.FC = (props: ParagraphProps) =>
<p className={`${props.className} text-lg pb-4`}>
    { props.children }
</p>

export default Paragraph
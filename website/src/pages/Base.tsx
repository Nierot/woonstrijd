import Footer from "../components/Footer";
import Header from "../components/Header";

type BaseProps = {
    children?: React.ReactNode
    className?: string
}


const Base = (props: BaseProps) => 
<div className="min-h-screen bg-background">
    <Header />
    <div className={`${props.className} 
        max-w-screen flex justify-center min-h-80
        `}>
        <div className="px-4 md:w-1/2">
            { props.children }
        </div>
    </div>
    <Footer />
</div>

export default Base;
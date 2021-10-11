const Page404: React.FC = () =>
<div className="bg-background flex h-screen w-screen flex-col justify-center items-center">
    <h1 className="text-9xl text-red-700">
        404
    </h1>
    <h2 className="text-4xl">
        Pagina niet gevonden
    </h2>

    <div className="py-8 text-2xl underline">
        <a href="/">Ga terug naar home</a>
    </div>
</div>

export default Page404
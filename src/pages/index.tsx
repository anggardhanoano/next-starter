export default function Home() {
    return (
        <div className="flex items-center p-4 w-screen h-screen justify-center bg-black relative">
            <main className="flex flex-col justify-center items-center text-white">
                <h1 className="font-mono text-3xl code">Halo!!!</h1>
                <h3 className="font-mono text-5xl font-bold code">
                    <span className="text-indigo-700">Next JS Template</span>
                    <span className="text-purple-700">.</span>
                </h3>
            </main>
            <footer className="absolute bottom-0 left-0 w-screen py-2 flex justify-center items-center">
                <span className="text-indigo-700">Updated by</span>
                <a
                    className="text-purple-900 mx-1"
                    href="https://github.com/anggardhanoano">
                    anggardhanoano
                </a>
                <span className="text-indigo-700">Initiated by</span>
                <a
                    className="text-purple-900 mx-1"
                    href="https://github.com/vuongddang/nextjs-tailwindcss-typescript-starter">
                    vuongddang
                </a>
            </footer>
        </div>
    );
}

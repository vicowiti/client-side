import { Link } from "react-router-dom"
import Logo from "../assets/zeraki.png"
export default function NotFound() {
    return (
        <>

            <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
                <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
                    <div className="flex flex-shrink-0 justify-center">
                        <Link to="/dashboard" className="inline-flex">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-12 w-auto"
                                src={Logo}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="py-16">
                        <div className="text-center">
                            <p className="text-base font-semibold text-[#018C79]">404</p>
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found.</h1>
                            <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                            <div className="mt-6">
                                <Link to="/dashboard" className="text-base font-medium text-[#018C79] hover:text-[#018C79]">
                                    Go back to Dashboard
                                    <span aria-hidden="true"> &rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </>
    )
}

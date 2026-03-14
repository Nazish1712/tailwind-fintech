import { cn } from "../utils/cn"

const Container = ({children, className}) => {
    return(
        <div className={cn("max-w-7xl mx-auto px-4 md:py-8 relative",className)}>
            <div className="absolute inset-y-0 left-0  w-px bg-gradient-to-b from-neutral-200 via-neutral-200 to-transparent"></div>
            <div className="absolute inset-y-0 right-0  w-px bg-gradient-to-b from-neutral-200 via-neutral-200 to-transparent"></div>
            {children}
        </div>
    )
}

export default Container